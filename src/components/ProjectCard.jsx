import { ExternalLink } from 'lucide-react';
import TechBadge from './TechBadge';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const t = i18n[language];
  const title = language === 'de' && project.titleDe ? project.titleDe : project.title;
  const description = language === 'de' && project.descriptionDe ? project.descriptionDe : project.description;
  const hasProjectUrl = project.projectUrl && project.projectUrl !== '#';
  const hasDemoUrl = project.demoUrl && project.demoUrl !== '#';

  return (
    <article className="project-card project-card--portfolio">
      <div className="project-card__top">
        <span className="project-card__year">{project.year}</span>
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      <div className="project-card__tech">
        {project.tech.map((techKey) => (
          <TechBadge key={`${project.title}-${techKey}`} techKey={techKey} />
        ))}
      </div>

      {(hasProjectUrl || hasDemoUrl) && (
        <div className="project-card__actions">
          {hasProjectUrl && (
            <a
              className="project-card__btn"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.card.viewProject}: ${title}`}
            >
              {t.card.viewProject}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {hasDemoUrl && (
            <a
              className="project-card__btn project-card__btn--secondary"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.card.demo}: ${title}`}
            >
              {t.card.demo}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
