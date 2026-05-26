import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectSortDropdown from '../components/ProjectSortDropdown';
import ProjectFilterInput from '../components/ProjectFilterInput';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function Projects() {
  const { language } = useLanguage();
  const t = i18n[language];
  const [sortBy, setSortBy] = useState('year');
  const [techFilter, setTechFilter] = useState('');

  const visibleProjects = useMemo(() => {
    let result = [...projects];

    if (techFilter.trim()) {
      const query = techFilter.trim().toLowerCase();
      result = result.filter((project) =>
        project.tech.some((tech) => String(tech).toLowerCase().includes(query))
      );
    }

    if (sortBy === 'year') {
      result.sort((a, b) => Number(b.year) - Number(a.year));
    }

    if (sortBy === 'favorites') {
      result.sort((a, b) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)));
    }

    return result;
  }, [sortBy, techFilter]);

  const resetFilters = () => {
    setSortBy('year');
    setTechFilter('');
  };

  return (
    <section className="section projects-page fade-in">
      <header className="projects-page__hero">
        <h1>{t.projects.heading}</h1>
        <p>{t.projects.subtitle}</p>
      </header>

      <div className="projects-page__toolbar">
        <ProjectSortDropdown
          value={sortBy}
          onChange={setSortBy}
          labels={{
            sortBy: t.projects.sortBy,
            sortYear: t.projects.sortYear,
            sortFav: t.projects.sortFav
          }}
        />
        <ProjectFilterInput
          value={techFilter}
          onChange={setTechFilter}
          labels={{
            filterByTech: t.projects.filterByTech,
            placeholder: t.projects.filterPlaceholder
          }}
        />
      </div>
      <div className="projects-page__divider" />
      <p className="projects-page__count">
        {t.projects.showing} {visibleProjects.length} {t.projects.projectsWord}
      </p>

      {visibleProjects.length ? (
        <div className="project-grid projects-grid--portfolio" id="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="projects-page__empty">
          <h3>{t.projects.noProjects}</h3>
          <p>{t.projects.tryDifferent}</p>
          <button type="button" className="btn" onClick={resetFilters} aria-label="Reset project filters">
            {t.projects.resetFilters}
          </button>
        </div>
      )}
    </section>
  );
}
