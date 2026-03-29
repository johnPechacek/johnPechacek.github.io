import { useState, useEffect } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null); // null = overview (top)

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const els = Array.from(article.querySelectorAll('h2, h3'));
    const extracted = els.map(el => ({
      id: el.id,
      text: el.textContent.trim(),
      level: parseInt(el.tagName[1]),
    }));
    setHeadings(extracted);

    if (!extracted.length) return;

    const HEADER_OFFSET = 56;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atBottom =
        scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActiveId(extracted[extracted.length - 1].id);
        return;
      }

      let active = null; // null = above first heading → overview
      for (const { id } of extracted) {
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
  }, []);

  // Build nested H2 → H3 structure
  const nested = [];
  let currentSection = null;
  for (const h of headings) {
    if (h.level === 2) {
      currentSection = { ...h, children: [] };
      nested.push(currentSection);
    } else if (h.level === 3 && currentSection) {
      currentSection.children.push(h);
    }
  }

  const activeSection = nested.find(
    h2 => h2.id === activeId || h2.children.some(h3 => h3.id === activeId)
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="toc" aria-label="Table of contents">
      <ul className="toc-list">
        <li className="toc-item">
          <button
            className={`toc-link toc-h2${activeId === null ? ' active' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="toc-text">overview</span>
          </button>
        </li>
        {nested.map(h2 => {
          const isActiveSection = activeSection?.id === h2.id;
          return (
            <li key={h2.id} className="toc-item">
              <button
                className={`toc-link toc-h2${isActiveSection ? ' active' : ''}`}
                onClick={() => scrollTo(h2.id)}
              >
                <span className="toc-text">{h2.text.toLowerCase()}</span>
              </button>
              {h2.children.length > 0 && (
                <ul className="toc-sub-list">
                  {h2.children.map(h3 => (
                    <li key={h3.id} className="toc-sub-item">
                      <button
                        className={`toc-link toc-h3${h3.id === activeId ? ' active' : ''}`}
                        onClick={() => scrollTo(h3.id)}
                      >
                        <span className="toc-text">{h3.text.toLowerCase()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
