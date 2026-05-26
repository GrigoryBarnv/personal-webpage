import { socialLinks } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function Footer() {
  const { language } = useLanguage();
  const t = i18n[language];

  return (
    <footer className="footer">
      <p>
        {t.footer.findMe} <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a> {language === 'de' ? 'und' : 'and'}{' '}
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}
