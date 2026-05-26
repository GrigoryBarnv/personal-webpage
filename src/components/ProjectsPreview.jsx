import { projects } from '../data/projects';
import { socialLinks } from '../data/profile';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function ProjectsPreview() {
  const { language } = useLanguage();
  const t = i18n[language];
  const previewProjects = projects.slice(0, 6);

  return (
    <section className="section projects-preview-section fade-in section-container">
      <div className="section-header projects-section__header">
        <h2>{t.projects.heading}</h2>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn projects-section__view-all"
          aria-label={t.projects.viewAll}
        >
          {t.projects.viewAll}
        </a>
      </div>

      <div className="project-grid projects-grid--portfolio">
        {previewProjects.map((project) => (
          <ProjectCard key={`preview-${project.title}`} project={project} />
        ))}
      </div>
    </section>
  );
}
