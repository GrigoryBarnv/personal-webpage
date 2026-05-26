import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

const CONTACT_EMAIL = 'grigorybaranov2@gmail.com';

export default function Contact() {
  const { language } = useLanguage();
  const t = i18n[language];
  const [email, setEmail] = useState('');
  const [social, setSocial] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !message.trim()) {
      setError(t.contact.error);
      return;
    }

    setError('');
    const subject = encodeURIComponent(t.contact.subject);
    const body = encodeURIComponent(
      `Email: ${email}\nSocial: ${social || '-'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section fade-in section-container">
      <h2>{t.contact.heading}</h2>
      <p className="contact-section__intro">
        {t.contact.intro}{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>!
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="contact-email">{t.contact.emailLabel}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="xyz@y.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
        />

        <label htmlFor="contact-social">{t.contact.socialLabel}</label>
        <input
          id="contact-social"
          name="social"
          type="text"
          placeholder={t.contact.socialPlaceholder}
          value={social}
          onChange={(e) => setSocial(e.target.value)}
        />

        <label htmlFor="contact-message">{t.contact.messageLabel}</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder={t.contact.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          aria-required="true"
        />

        {error ? (
          <p className="contact-form__error" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="contact-form__submit" aria-label={t.contact.submit}>
          {t.contact.submit}
        </button>
      </form>
    </section>
  );
}
