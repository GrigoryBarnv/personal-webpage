import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function ResumePreview() {
  const { language } = useLanguage();
  const t = i18n[language];

  return (
    <section className="resume-preview fade-in">
      <h3>{t.resume.previewHeading}</h3>
      <p>{t.resume.previewText}</p>
      <div className="pdf-placeholder">
        <iframe
          className="pdf-frame"
          src="/Lebenslauf_Baranov.pdf#view=FitH"
          title="Resume PDF Preview"
        />
      </div>
      <code>/Lebenslauf_Baranov.pdf</code>
    </section>
  );
}
