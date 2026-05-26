import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { themes } from '../data/themes';

const THEME_KEY = 'portfolio-theme';
const DARK_KEY = 'portfolio-dark-mode';

const ThemeContext = createContext(null);

function applyThemeVars(theme) {
  const root = document.documentElement;
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-dark', theme.accentDark);
  root.style.setProperty('--accent-soft', theme.accentSoft);
  root.style.setProperty('--text-accent', theme.textAccent);
  root.style.setProperty('--border-accent', theme.borderAccent);
}

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem(THEME_KEY) || 'default');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem(DARK_KEY) === '1');

  const activeTheme = themes[themeKey] || themes.default;

  useEffect(() => {
    applyThemeVars(activeTheme);
    localStorage.setItem(THEME_KEY, activeTheme.key);
  }, [activeTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem(DARK_KEY, darkMode ? '1' : '0');
  }, [darkMode]);

  const value = useMemo(() => ({
    themes,
    activeTheme,
    themeKey: activeTheme.key,
    setThemeKey,
    darkMode,
    toggleDarkMode: () => setDarkMode((v) => !v)
  }), [activeTheme, darkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}