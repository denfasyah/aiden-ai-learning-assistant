import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 80;
    const CONNECT_DIST = 100;
    const COLORS = [
      "rgba(96,165,250,",  // Blue
      "rgba(167,139,250,", // Violet
      "rgba(103,232,249,", // Cyan
      "rgba(255,255,255,", // White
    ];
    const rand = (min, max) => Math.random() * (max - min) + min;

    // 1. Data Partikel Khusus Bertema Space & AI Learning
    const customParticlesCount = 15;
    const customParticles = Array.from({ length: customParticlesCount }, () => {
      const types = ["orbit", "node", "math"];
      return {
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        type: types[Math.floor(Math.random() * types.length)],
        size: rand(8, 16),
        vx: rand(-0.08, 0.08),
        vy: rand(-0.06, 0.06),
        angle: rand(0, Math.PI * 2),
        rotSpeed: rand(-0.01, 0.01),
        pulse: rand(0, Math.PI * 2),
        pulseSpeed: rand(0.01, 0.03),
        color: COLORS[Math.floor(Math.random() * (COLORS.length - 1))], // Hindari pure white agar berwarna
      };
    });

    // Data partikel titik (Bintang bawaan asli Anda)
    const particles = Array.from({ length: COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(0.5, 2.2),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.18, 0.18),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.3, 0.85),
      twinkle: rand(0, Math.PI * 2),
      twinkleSpeed: rand(0.008, 0.035),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2. Render Partikel AI & Learning Assistant (Di lapisan paling belakang)
      customParticles.forEach((cp) => {
        // Pergerakan melayang lambat
        cp.x = (cp.x + cp.vx + canvas.width) % canvas.width;
        cp.y = (cp.y + cp.vy + canvas.height) % canvas.height;
        cp.angle += cp.rotSpeed;
        cp.pulse += cp.pulseSpeed;

        // Efek opasitas bernapas (fading halus)
        const alpha = 0.12 + 0.08 * Math.sin(cp.pulse);

        ctx.save();
        ctx.translate(cp.x, cp.y);
        ctx.rotate(cp.angle);
        ctx.lineWidth = 1;

        if (cp.type === "orbit") {
          // Menggambar Planet Ber-cincin Mini (Space Theme)
          ctx.strokeStyle = cp.color + alpha + ")";
          ctx.beginPath();
          ctx.arc(0, 0, cp.size * 0.4, 0, Math.PI * 2);
          ctx.stroke();

          // Cincin Planet
          ctx.beginPath();
          ctx.ellipse(0, 0, cp.size * 0.8, cp.size * 0.2, Math.PI / 6, 0, Math.PI * 2);
          ctx.stroke();
        }
        else if (cp.type === "node") {
          // Menggambar Kotak Node Data Biner (AI Theme)
          ctx.strokeStyle = cp.color + alpha + ")";
          ctx.strokeRect(-cp.size / 2, -cp.size / 2, cp.size, cp.size);

          // Titik pusat di tengah kotak
          ctx.fillStyle = cp.color + (alpha * 1.5) + ")";
          ctx.beginPath();
          ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        else if (cp.type === "math") {
          // Menggambar Simbol Edukasi (+ / x) (Learning Theme)
          ctx.strokeStyle = cp.color + alpha + ")";
          ctx.beginPath();
          ctx.moveTo(-cp.size * 0.4, 0);
          ctx.lineTo(cp.size * 0.4, 0);
          ctx.moveTo(0, -cp.size * 0.4);
          ctx.lineTo(0, cp.size * 0.4);
          ctx.stroke();
        }

        ctx.restore();
      });

      // 3. Render partikel titik (Bintang bawaan asli Anda)
      particles.forEach((p) => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        p.twinkle += p.twinkleSpeed;
        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + a + ")";
        ctx.fill();
      });

      // 4. Render Garis Penghubung (Konstelasi bawaan asli Anda)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(148,130,255,${(1 - dist / CONNECT_DIST) * 0.18})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />;
};

export default ParticleBackground;