import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../styles/work-dropdown.scss';

export default function WorkDropdown({ caseStudies, isActive, currentPath = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target) &&
        menuRef.current && !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuStyle({
        position: 'fixed',
        top: rect.bottom,
        left: rect.left,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isOpen]);

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="work-dropdown" ref={triggerRef}>
        <button className={`work-dropdown-trigger ${isActive ? 'active' : ''}`}>
          my work
        </button>
      </div>
    );
  }

  return (
    <div className="work-dropdown" ref={triggerRef}>
      <button
        className={`work-dropdown-trigger ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => {
          if (!isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setMenuStyle({ position: 'fixed', top: rect.bottom, left: rect.left });
          }
          setIsOpen(prev => !prev);
        }}
      >
        my work
      </button>
      {isOpen && createPortal(
        <div className="work-dropdown-menu" ref={menuRef} style={menuStyle}>
          {caseStudies.map((study) => {
            const href = `/case-studies/${study.slug}`;
            const isCurrent = currentPath === href || currentPath === `${href}/`;
            return (
              <a
                key={study.slug}
                href={href}
                className={`work-dropdown-item ${isCurrent ? 'current' : ''}`}
              >
                <span className="work-dropdown-check">
                  {isCurrent && <img src="/icons/np-check-icon.svg" alt="" width="12" height="10" />}
                </span>
                {study.title.toLowerCase()}
              </a>
            );
          })}
        </div>,
        document.body
      )}
    </div>
  );
}
