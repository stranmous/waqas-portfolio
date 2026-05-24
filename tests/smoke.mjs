import { spawn } from "node:child_process";
import { once } from "node:events";
import { resolve } from "node:path";
import { chromium } from "playwright";

const BASE_URL = "http://127.0.0.1:4173";
const viteBin = resolve("node_modules/vite/bin/vite.js");
const server = spawn(process.execPath, [viteBin, "preview", "--host", "127.0.0.1", "--port", "4173"], {
  cwd: process.cwd(),
  stdio: "pipe",
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  output += chunk.toString();
});

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function waitForServer() {
  const started = Date.now();
  while (Date.now() - started < 30_000) {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) return;
    } catch {
      // Retry until Vite preview is ready.
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`Preview server did not start. Output:\n${output}`);
}

async function checkAsset(pathname) {
  const response = await fetch(`${BASE_URL}${pathname}`);
  assert(response.ok, `${pathname} returned ${response.status}`);
}

async function checkViewport(browser, viewport) {
  const page = await browser.newPage({ viewport });
  const consoleIssues = [];
  const failedRequests = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleIssues.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} ${request.failure()?.errorText ?? ""}`.trim());
  });

  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  assert((await page.title()) === "Waqas Zafar - Applied AI & Full-Stack Developer", "Unexpected page title");

  const initial = await page.evaluate(() => ({
    text: document.body.innerText,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    hasOverlay: Boolean(document.querySelector("vite-error-overlay")),
  }));
  assert(initial.text.includes("WAQAS ZAFAR"), "Home page did not render meaningful content");
  assert(!initial.overflow, `${viewport.width}px viewport has horizontal overflow`);
  assert(!initial.hasOverlay, "Framework error overlay is visible");

  for (const sectionId of ["expertise", "projects", "contact"]) {
    let navTarget = page.locator(`a[href="#${sectionId}"]:visible`);
    if ((await navTarget.count()) === 0) {
      await page.getByRole("button", { name: "Toggle menu" }).click();
      await page.waitForTimeout(200);
      navTarget = page.locator(`a[href="#${sectionId}"]:visible`);
    }
    assert((await navTarget.count()) > 0, `No visible navigation link found for #${sectionId}`);
    await navTarget.first().click();
    await page.waitForTimeout(400);
    const reached = await page.evaluate((id) => {
      const element = document.getElementById(id);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }, sectionId);
    assert(reached, `Navigation did not reach #${sectionId}`);
  }

  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2_000);
  const projectCanvases = await page.locator("#projects canvas").count();
  assert(projectCanvases > 0, "Projects section did not mount the phone canvas");

  if (viewport.width <= 480) {
    const before = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => window.scrollY);
    assert(after > before, "Mobile page did not keep vertical scrolling around the phone section");
  }

  await page.locator("#contact").scrollIntoViewIfNeeded();
  const requiredFields = await page.locator("#contact input[required], #contact textarea[required]").count();
  assert(requiredFields === 3, "Contact form required validation fields are missing");

  await page.route("https://formsubmit.co/ajax/**", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      status: 200,
      body: JSON.stringify({ success: "true", message: "Email sent successfully!" }),
    });
  });
  await page.getByPlaceholder("'Enter your name'").fill("Smoke Test");
  await page.getByPlaceholder("'Enter your email'").fill("smoke@example.com");
  await page.getByPlaceholder("`Hello Waqas...`").fill("Automated smoke test message.");
  await page.getByRole("button", { name: "send_message()" }).click();
  await page.getByText("Message queued for Waqas.").waitFor({ state: "visible", timeout: 5_000 });

  const relevantConsoleIssues = consoleIssues.filter(
    (issue) => !issue.includes("GL Driver Message") && !issue.includes("Download the React DevTools"),
  );
  assert(relevantConsoleIssues.length === 0, `Console issues found:\n${relevantConsoleIssues.join("\n")}`);
  assert(failedRequests.length === 0, `Failed requests found:\n${failedRequests.join("\n")}`);

  await page.close();
}

try {
  await waitForServer();
  await Promise.all(["/Waqas-Zafar.pdf", "/favicon.svg", "/App-Screen.png", "/sitemap.xml"].map(checkAsset));

  const browser = await chromium.launch({ headless: true });
  await checkViewport(browser, { width: 1440, height: 900 });
  await checkViewport(browser, { width: 390, height: 844 });
  await browser.close();

  console.log("Smoke checks passed.");
} finally {
  server.kill();
  await once(server, "exit").catch(() => {});
}
