import { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeOrder } from '../data/themes';

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { themes, activeTheme, themeKey, setThemeKey } = useTheme();
  const themeList = useMemo(() => themeOrder.map((key) => themes[key]), [themes]);

  return (
    <aside className={`theme-switcher ${open ? 'open' : ''}`}>
      <button className="theme-main-btn" aria-label="Open theme picker" onClick={() => setOpen((v) => !v)}>
        <span className="theme-main-icon">{activeTheme.icon}</span>
      </button>
      <small className="theme-name">{activeTheme.name}</small>

      <div className="theme-orbit" role="listbox" aria-label="Theme selector">
        {themeList.map((theme, idx) => {
          const startDeg = 135;
          const endDeg = 225;
          const step = (endDeg - startDeg) / (themeList.length - 1);
          const angle = (startDeg + idx * step) * (Math.PI / 180);
          const x = Math.cos(angle) * 112;
          const y = Math.sin(angle) * 112;

          return (
            <button
              key={theme.key}
              className={`theme-dot ${themeKey === theme.key ? 'active' : ''}`}
              title={theme.name}
              aria-label={theme.name}
              onClick={() => {
                setThemeKey(theme.key);
                setOpen(false);
              }}
              style={{
                '--x': `${x}px`,
                '--y': `${y}px`,
                '--dot-accent': theme.accent
              }}
            >
              <span className="theme-dot-icon">{theme.icon}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}