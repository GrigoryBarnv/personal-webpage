import { useTheme } from '../context/ThemeContext';

export default function FloatingWidget() {
  const { activeTheme } = useTheme();

  return (
    <aside className="floating-widget" aria-label="Quick tools">
      <div className="widget-item">
        <button className="circle-btn">?</button>
        <small>128</small>
      </div>
      <div className="widget-item">
        <button className="circle-btn">??</button>
        <small>{activeTheme.name}</small>
      </div>
      <div className="widget-item">
        <button className="circle-btn">?</button>
        <small>My AI</small>
      </div>
    </aside>
  );
}