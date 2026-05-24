import { useEffect, useRef } from "react";

// ─── High-Definition Interactive Particle Network ──────────────────────────
// Crisp, sharp, and highly mouse-reactive. Perfect for an AI/Tech portfolio.
// No blur, fully dynamic, uses actual device pixel ratio for maximum sharpness.

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseX: number;
  baseY: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    // Faster, more dynamic movement
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1.5;
    this.color = color;
  }

  update(width: number, height: number, mouseX: number, mouseY: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen instead of hard bounce for smoother continuous flow
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // Strong mouse reactivity (Magnetic repel + slight swirl)
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distSq = dx * dx + dy * dy;
    const repelDist = 250;
    const repelDistSq = repelDist * repelDist;

    if (distSq < repelDistSq && distSq > 0) {
      const dist = Math.sqrt(distSq);
      const force = (repelDist - dist) / repelDist;
      
      // Repel
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * force * 4;
      this.y -= Math.sin(angle) * force * 4;
      
      // Swirl tangent
      this.x += Math.cos(angle + Math.PI / 2) * force * 2;
      this.y += Math.sin(angle + Math.PI / 2) * force * 2;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function HeroMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    // Teal, Magenta, Deep Blue, Light Cyan
    const colors = ["#9ecfda", "#de048d", "#4b8da1", "#ffffff"];

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      // Full resolution for maximum crispness
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      particles = [];
      // Dense network of particles
      const numParticles = Math.min(Math.floor((width * height) / 8000), 200); 
      
      for (let i = 0; i < numParticles; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(Math.random() * width, Math.random() * height, color));
      }
    };

    const animate = () => {
      // Dark slate background
      ctx.fillStyle = "#0a0f10";
      ctx.fillRect(0, 0, width, height);
      
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update and draw particles
      particles.forEach((p) => {
        p.update(width, height, mx, my);
        p.draw(ctx);
      });

      // Draw connections
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = 18000;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const opacity = 1 - dist / Math.sqrt(maxDistSq);
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // If one of the particles is magenta, make the line magenta, otherwise teal
            if (particles[i].color === "#de048d" || particles[j].color === "#de048d") {
              ctx.strokeStyle = `rgba(222, 4, 141, ${opacity * 0.5})`;
            } else {
              ctx.strokeStyle = `rgba(158, 207, 218, ${opacity * 0.4})`;
            }
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections (laser-like lines pulling to the cursor)
      if (mx > 0 && my > 0) {
        particles.forEach((p) => {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;
          const maxMouseDistSq = 40000;
          
          if (distSq < maxMouseDistSq) {
             const dist = Math.sqrt(distSq);
             const opacity = 1 - dist / Math.sqrt(maxMouseDistSq);
             
             ctx.beginPath();
             ctx.moveTo(p.x, p.y);
             ctx.lineTo(mx, my);
             ctx.strokeStyle = `rgba(158, 207, 218, ${opacity * 0.8})`;
             ctx.lineWidth = 1.5;
             ctx.stroke();
          }
        });
        
        // Draw a glowing core at the mouse position
        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(mx, my, 12, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(158, 207, 218, 0.3)";
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", handleResize);
    
    // Attach mouse events to a broader area (document or parent) so it reacts everywhere
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-mesh-canvas"
      aria-hidden="true"
      style={{ pointerEvents: "none", display: "block" }} // Let events pass through to document
    />
  );
}
