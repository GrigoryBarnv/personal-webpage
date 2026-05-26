import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { socialLinks } from '../data/profile';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = i18n[language];

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.projects, to: '/projects' },
    { label: t.nav.resume, to: '/resume' }
  ];

  const externalLinks = [
    { label: t.nav.github, href: socialLinks.github },
    { label: t.nav.linkedin, href: socialLinks.linkedin },
    { label: t.nav.chat, href: `mailto:${socialLinks.email}?subject=Portfolio%20Contact` }
  ];

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <a className="brand" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          @grigorybaranov
        </a>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={t.nav.toggleMenu}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          {externalLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
          <button className="lang-btn" onClick={toggleLanguage} aria-label="Toggle language">
            {language === 'en' ? 'DE' : 'EN'}
          </button>
          <button className="icon-btn" onClick={toggleDarkMode} aria-label={t.nav.toggleTheme}>
            {darkMode ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3.8" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M5.2 18.8l1.6-1.6M17.2 6.8l1.6-1.6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.5 14.8A8.6 8.6 0 1 1 9.2 4.5a7 7 0 0 0 10.3 10.3Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
