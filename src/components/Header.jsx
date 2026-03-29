import { useState, useEffect } from 'react';
import WorkDropdown from './WorkDropdown.jsx';

export default function Header({ caseStudies, currentPath = '' }) {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    document.addEventListener('astro:after-swap', updatePath);
    return () => document.removeEventListener('astro:after-swap', updatePath);
  }, []);

  const isAboutActive = path === '/';
  const isResumeActive = path === '/resume';
  const isWorkActive = path.startsWith('/case-studies');

  return (
    <header className="site-header">
        <a href="/" className="site-name">John Pechacek</a>
        <nav>
          <a href="/" className={isAboutActive ? 'active' : ''}>
            about me
          </a>
          <WorkDropdown caseStudies={caseStudies} isActive={isWorkActive} currentPath={path} />
          <a href="/resume" className={isResumeActive ? 'active' : ''}>
            resume
          </a>
        </nav>
    </header>
  );
}
