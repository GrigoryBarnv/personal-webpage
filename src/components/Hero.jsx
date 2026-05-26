import { stats } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

export default function Hero() {
  const { language } = useLanguage();
  const t = i18n[language];

  return (
    <section className="hero section fade-in">
      <h1>
        {t.hero.line1}
        <br />
        {t.hero.line2a} <span>{t.hero.line2b}</span> ✨
      </h1>

      <div className="stat-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-badge">
            <span>{stat.icon === 'users' ? '👥' : '⭐'}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <p>
        {t.hero.p1} <a href="#">{t.hero.p2}</a>, {t.hero.p3} <a href="#">{t.hero.p4}</a>, {t.hero.p5}
      </p>

      <p>{t.hero.p6}</p>
    </section>
  );
}

