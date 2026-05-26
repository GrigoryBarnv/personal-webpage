import { Link } from 'react-router-dom';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function Experience() {
  const { language } = useLanguage();
  const t = i18n[language];

  return (
    <section className="section experience-section fade-in">
      <div className="section-header experience-section__header">
        <h2>{t.experience.heading}</h2>
        <Link className="btn experience-section__resume-btn" to="/resume" aria-label={t.experience.viewResume}>
          {t.experience.viewResume}
        </Link>
      </div>

      <p className="experience-section__intro">{t.experience.intro}</p>

      <div className="experience-section__divider" aria-hidden="true" />

      <div className="experience-list">
        {experiences.map((item) => (
          <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
}
