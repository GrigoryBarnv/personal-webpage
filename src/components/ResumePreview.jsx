import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';
import { resumePdfPreviewUrl, resumePdfUrl } from '../data/resumeAsset';

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
          src={resumePdfPreviewUrl}
          title="Resume PDF Preview"
        />
      </div>
      <code>{resumePdfUrl}</code>
    </section>
  );
}
