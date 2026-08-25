import { useMemo, useRef } from 'react';
import './Hero.css';
import ThemeToggle from '../ThemeToggle';
import useTypewriter from '../hooks/useTypewriter';
import { roles, techStack } from '../data/portfolio';

function Hero() {
  const marqueeItems = useMemo(
    () => [...techStack, ...techStack, ...techStack, ...techStack],
    []
  );
  const displayText = useTypewriter(roles, 90, 1200);
    const photoRef = useRef(null);

  // mouse-tilt interaction on the profile photo
    const handleMouseMove = (e) => {
      const el = photoRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 14;
      const rotateY = (x / rect.width) * 14;
      el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

  const handleMouseLeave = () => {
    const el = photoRef.current;
    if (!el) return;
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <>
      <section className="hero">
        <div className="hero-theme-toggle">
          <ThemeToggle />
        </div>

        <div className="hero-photo" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img ref={photoRef} src="/profile.jpg" alt="Jade Guevarra" />
        </div>

        <div className="hero-info">
          <h1 className="hero-name">Jade Benson C. Guevarra</h1>

          <p className="hero-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Malolos City, Bulacan, Central Luzon, Philippines
          </p>

          <p className="hero-title">
            <span className="hero-static">IT Student •</span>{' '}
            <span className="typed-text">{displayText}</span>
            <span className="cursor">&nbsp;</span>
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn-solid">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a href="mailto:guevarrajade01@gmail.com" className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              Send Email
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Dice0127" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/github-icon.png" alt="GitHub" className="icon-invert" />
            </a>
            <a href="https://www.linkedin.com/in/jade-guevarra-791724424/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="#fff" d="M7.12 9.5H4.42V19.5H7.12V9.5ZM5.77 8.35C6.68 8.35 7.42 7.61 7.42 6.7C7.42 5.78 6.68 5.05 5.77 5.05C4.86 5.05 4.12 5.78 4.12 6.7C4.12 7.61 4.86 8.35 5.77 8.35ZM19.5 19.5V13.9C19.5 11.15 18.31 9.5 15.85 9.5C14.31 9.5 13.36 10.34 12.94 11.13H12.9V9.5H10.2V19.5H12.9V14.6C12.9 13.4 13.12 12.24 14.6 12.24C16.06 12.24 16.08 13.6 16.08 14.68V19.5H19.5Z"/>
              </svg>
            </a>
            <a href="mailto:guevarrajade01@gmail.com" aria-label="Gmail">
              <img src="/gmail-icon.png" alt="Gmail" />
            </a>
          </div>
        </div>
      </section>

      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {marqueeItems.map((t, i) => (
            <div className="tech-pill" key={`${t.name}-${i}`} aria-hidden={i >= techStack.length || undefined}>
              <span
                className="tech-icon-badge"
                style={{ background: t.solid ? '#ffffff' : 'transparent' }}
              >
                <img src={t.icon} alt={t.name} className="tech-icon" />
              </span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
