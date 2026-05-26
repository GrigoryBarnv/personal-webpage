import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

const options = [
  { value: 'year', labelKey: 'sortYear' },
  { value: 'favorites', labelKey: 'sortFav' }
];

export default function ProjectSortDropdown({ value, onChange, labels }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const selected = options.find((option) => option.value === value) ?? options[0];

  return (
    <div className="project-sort" ref={rootRef}>
      <label className="project-toolbar__label" id="project-sort-label">
        {labels.sortBy}
      </label>
      <button
        ref={buttonRef}
        type="button"
        className="project-sort__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="project-sort-label"
        onClick={() => setOpen((state) => !state)}
      >
        <span>{labels[selected.labelKey]}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>

      {open ? (
        <ul className="project-sort__menu" role="listbox" aria-label="Sort projects">
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  className={`project-sort__option ${isActive ? 'active' : ''}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span>{labels[option.labelKey]}</span>
                  {isActive ? <Check size={16} aria-hidden="true" /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
