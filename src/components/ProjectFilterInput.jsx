import { Search, X } from 'lucide-react';

export default function ProjectFilterInput({ value, onChange, labels }) {
  return (
    <div className="project-filter">
      <label className="project-toolbar__label" htmlFor="project-tech-filter">
        {labels.filterByTech}
      </label>
      <div className="project-filter__input-wrap">
        <Search size={18} aria-hidden="true" className="project-filter__search-icon" />
        <input
          id="project-tech-filter"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={labels.placeholder}
          aria-label="Filter projects by technology"
        />
        {value.trim() ? (
          <button
            type="button"
            className="project-filter__clear"
            onClick={() => onChange('')}
            aria-label="Clear technology filter"
          >
            <X size={16} aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
