import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "output",
      "node_modules",
      "public/SimpleMario2D/**",
      "*.tsbuildinfo",
      "refactor.cjs",
      "vite.config.js",
      "vite.config.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        document: "readonly",
        FormData: "readonly",
        HTMLCanvasElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLElement: "readonly",
        IntersectionObserver: "readonly",
        KeyboardEvent: "readonly",
        MouseEvent: "readonly",
        Node: "readonly",
        PointerEvent: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        window: "readonly",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-hooks/immutability": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["tests/**/*.mjs"],
    languageOptions: {
      globals: {
        console: "readonly",
        document: "readonly",
        fetch: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        window: "readonly",
      },
    },
  },
);
