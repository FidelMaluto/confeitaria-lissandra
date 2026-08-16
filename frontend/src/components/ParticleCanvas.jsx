import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);

    // Particle Array
    const particles = [];
    const maxParticles = 65;

    class Particle {
      constructor(x, y, isTrail = false) {
        this.x = x !== undefined ? x : Math.random() * width;
        this.y = y !== undefined ? y : Math.random() * height;
        this.size = isTrail ? Math.random() * 4 + 2 : Math.random() * 3 + 1;
        this.speedX = isTrail ? (Math.random() - 0.5) * 3 : (Math.random() - 0.5) * 0.8;
        this.speedY = isTrail ? (Math.random() - 0.5) * 3 : -(Math.random() * 1.2 + 0.3);
        this.life = isTrail ? 1 : Math.random() * 0.8 + 0.2;
        this.decay = isTrail ? Math.random() * 0.03 + 0.015 : 0;
        this.color =
          Math.random() > 0.4
            ? `rgba(162, 74, 90, ${this.life})`
            : `rgba(169, 129, 47, ${this.life})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.decay > 0) {
          this.life -= this.decay;
        } else {
          if (this.y < 0) {
            this.y = height + 10;
            this.x = Math.random() * width;
          }
          if (this.x < 0 || this.x > width) {
            this.speedX *= -1;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize background floating ambient particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Shockwaves on click
    const shockwaves = [];

    function handleMouseMove(e) {
      if (Math.random() < 0.6) {
        particles.push(new Particle(e.clientX, e.clientY, true));
      }
    }

    function handleClick(e) {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 120,
        alpha: 0.8,
      });

      for (let i = 0; i < 18; i++) {
        particles.push(new Particle(e.clientX, e.clientY, true));
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Animation Loop
    function render() {
      ctx.clearRect(0, 0, width, height);

      // Render shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4;
        sw.alpha -= 0.02;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(162, 74, 90, ${sw.alpha})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(169, 129, 47, 0.8)';
        ctx.stroke();
        ctx.restore();
      }

      // Render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        if (p.decay > 0 && p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: 0.85,
      }}
    />
  );
}
