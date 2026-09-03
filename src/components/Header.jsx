import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import WorkDropdown from './WorkDropdown.jsx';

export default function Header({ caseStudies, currentPath = '' }) {
  const [mounted, setMounted] = useState(false);
  const [path, setPath] = useState(currentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tocHeadings, setTocHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const updatePath = () => {
      setPath(window.location.pathname);
      setMenuOpen(false);
    };
    document.addEventListener('astro:after-swap', updatePath);
    return () => document.removeEventListener('astro:after-swap', updatePath);
  }, []);

  // Extract H2 headings for mobile TOC
  useEffect(() => {
    const extractHeadings = () => {
      const article = document.querySelector('article');
      if (!article) {
        setTocHeadings([]);
        return;
      }
      const els = Array.from(article.querySelectorAll('h2'));
      setTocHeadings(els.map(el => ({ id: el.id, text: el.textContent.trim() })));
    };
    document.addEventListener('astro:page-load', extractHeadings);
    extractHeadings();
    return () => document.removeEventListener('astro:page-load', extractHeadings);
  }, []);

  // Scroll spy for mobile TOC active state
  useEffect(() => {
    if (!tocHeadings.length) return;
    const HEADER_OFFSET = 56;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      if (atBottom) {
        setActiveId(tocHeadings[tocHeadings.length - 1].id);
        return;
      }
      let active = null;
      for (const { id } of tocHeadings) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        if (top <= scrollY + 2) active = id;
      }
      setActiveId(active);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocHeadings]);

  const isAboutActive = path === '/';
  const isResumeActive = path === '/resume';
  const isWorkActive = path.startsWith('/case-studies');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const mobileMenu = (
    <div className={`mobile-menu${menuOpen ? ' mobile-menu-open' : ''}`} aria-hidden={!menuOpen}>
      <ul className="mobile-menu-list">
        {caseStudies.map(study => {
          const href = `/case-studies/${study.slug}`;
          const isCurrent = path === href || path === `${href}/`;
          return (
            <li key={study.slug} className="mobile-menu-group">
              <a
                href={href}
                className={`mobile-menu-item${isCurrent ? ' current' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu-check">
                  {isCurrent && <img src="/icons/np-check-icon.svg" alt="" width="12" height="10" />}
                </span>
                {study.title.toLowerCase()}
              </a>
              {isCurrent && tocHeadings.length > 0 && (
                <ul className="mobile-toc-list">
                  <li className="mobile-toc-item">
                    <button
                      className={`mobile-toc-link${activeId === null ? ' active' : ''}`}
                      onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
                    >
                      <span className="toc-text">overview</span>
                    </button>
                  </li>
                  {tocHeadings.map(h => (
                    <li key={h.id} className="mobile-toc-item">
                      <button
                        className={`mobile-toc-link${h.id === activeId ? ' active' : ''}`}
                        onClick={() => scrollTo(h.id)}
                      >
                        <span className="toc-text">{h.text.toLowerCase()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
        <li className="mobile-menu-group">
          <a
            href="/"
            className={`mobile-menu-item${isAboutActive ? ' current' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-menu-check">
              {isAboutActive && <img src="/icons/np-check-icon.svg" alt="" width="12" height="10" />}
            </span>
            about me
          </a>
        </li>
        <li className="mobile-menu-group">
          <a
            href="/resume"
            className={`mobile-menu-item${isResumeActive ? ' current' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-menu-check">
              {isResumeActive && <img src="/icons/np-check-icon.svg" alt="" width="12" height="10" />}
            </span>
            my career
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <header className="site-header">
        <a href="/" className="site-name">John Pechacek</a>
        <nav className="desktop-nav">
          <a href="/" className={isAboutActive ? 'active' : ''}>about me</a>
          <WorkDropdown caseStudies={caseStudies} isActive={isWorkActive} currentPath={path} />
          <a href="/resume" className={isResumeActive ? 'active' : ''}>my career</a>
        </nav>
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-icon${menuOpen ? ' hamburger-icon-x' : ''}`}>
            <span className="hamburger-line burger-line-1" />
            <span className="hamburger-line burger-line-2" />
            <span className="hamburger-line burger-line-3" />
          </span>
        </button>
      </header>
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
