import CompanyLogo from './CompanyLogo';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function ExperienceItem({ item }) {
  const { language } = useLanguage();
  const t = i18n[language];

  const role = language === 'de' && item.roleDe ? item.roleDe : item.role;
  const type = language === 'de' && item.typeDe ? item.typeDe : item.type;
  const duration = language === 'de' && item.durationDe ? item.durationDe : item.duration;
  const description = language === 'de' && item.descriptionDe ? item.descriptionDe : item.description;

  return (
    <article className="experience-item">
      <div className="experience-item__period-wrap">
        <p className="experience-period">{item.period}</p>
      </div>

      <div className="experience-item__details">
        <div className="experience-item__content">
          <p className="experience-item__meta">
            {type} - {duration}
          </p>
          <p className="experience-item__role">
            {role} {t.experience.at}{' '}
            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
              {item.company}
            </a>
          </p>
          {description ? <p className="experience-item__description">{description}</p> : null}
        </div>
        <CompanyLogo logo={item.logo} company={item.company} />
      </div>
    </article>
  );
}
