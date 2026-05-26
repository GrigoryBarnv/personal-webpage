import ResumePreview from '../components/ResumePreview';
import { useLanguage } from '../context/LanguageContext';
import { i18n } from '../data/i18n';

const educationEn = [
  'University of Hohenheim: B.Sc. Agricultural Biology, focus on Data Analysis and Food Informatics',
  'Overall grade: 2.1, Bachelor thesis: 1.7',
  'Technical University of Dresden: M.Sc. Computational Modeling and Simulation, Track Applied Artificial Intelligence',
  'Current status: 2nd semester',
  'Engagement: Student council participation (Fachschaftsrat)'
];

const educationDe = [
  'Universitaet Hohenheim: B.Sc. Agrarbiologie, Schwerpunkt Datenanalyse und Lebensmittelinformatik',
  'Gesamtnote: 2,1; Bachelorarbeit: 1,7',
  'Technische Universitaet Dresden: M.Sc. Computational Modeling and Simulation, Track Applied Artificial Intelligence',
  'Aktueller Stand: 2. Fachsemester',
  'Engagement: Beteiligung im Fachschaftsrat'
];

const volunteerEn = [
  'State Hospital No. 109, Moscow (Jan 2020 - Apr 2020)',
  'Managed and digitized patient records and supported medical documentation processes.'
];

const volunteerDe = [
  'Staatliches Krankenhaus Nr. 109, Moskau (Jan 2020 - Apr 2020)',
  'Verwaltung und digitale Erfassung von Patientendaten sowie Unterstuetzung der medizinischen Dokumentation.'
];

const skillsAndCertsEn = [
  'Certifications: CareerFoundry (Full-Stack Web Development), AI and Data Science, Fundamentals of Cryptography',
  'Technical knowledge: Web development, server administration, IoT, Windows, Linux',
  'Technologies: Python, JavaScript, C++ (basic), SQL, Docker, R, Node.js, React',
  'Interests: Travel, spearfishing, video editing, yoga',
  'Languages: German (C1), English (C1), Spanish (B2), Russian (native)'
];

const skillsAndCertsDe = [
  'Zertifikate: CareerFoundry (Full-Stack Web Development), AI and Data Science, Grundlagen der Kryptographie',
  'Technische Kenntnisse: Webentwicklung, Serveradministration, IoT, Windows, Linux',
  'Technologien: Python, JavaScript, C++ (Grundkenntnisse), SQL, Docker, R, Node.js, React',
  'Interessen: Reisen, Speerfischen, Videobearbeitung, Yoga',
  'Sprachen: Deutsch (C1), Englisch (C1), Spanisch (B2), Russisch (Muttersprache)'
];

const workEn = [
  {
    title: 'BayWa Biogasanlage',
    period: 'Jul 2022 - Oct 2022 | Brandis, Saxony',
    lines: [
      'Sampling and Data Management Staff',
      'Sampling and analysis, data collection, documentation, and measurement data management.',
      'Tools: MS Office, Nextcloud'
    ]
  },
  {
    title: 'InStaff (Event and Staffing Agency)',
    period: 'Dec 2022 - Dec 2024 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'Short-term Operations Staff',
      'Supported event organization and on-site operations.',
      'Skills: Teamwork, structured working style, customer support'
    ]
  },
  {
    title: 'Food Chemistry and Analytical Chemistry Department',
    period: 'Apr 2024 - Sep 2024 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'Research Assistant (Hiwi)',
      'Extraction plus qualitative and quantitative analysis of wheat proteins.',
      'Data evaluation and visualization creation with Python and R.'
    ]
  },
  {
    title: 'Food Informatics Department',
    period: 'Feb 2025 - Oct 2025 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'System Administrator',
      'Administration of Linux systems and Docker environments.',
      'Developed a full-stack web application (backend, database, API).',
      'Stack: Linux (Ubuntu), Docker, Python (Flask), SQL, Arduino (C++), JavaScript, Git'
    ]
  }
];

const workDe = [
  {
    title: 'BayWa Biogasanlage',
    period: 'Jul 2022 - Okt 2022 | Brandis, Sachsen',
    lines: [
      'Mitarbeiter Probenahme und Datenmanagement',
      'Entnahme und Analyse von Stichproben, Datenerfassung, Dokumentation und Verwaltung von Messdaten.',
      'Tools: MS Office, Nextcloud'
    ]
  },
  {
    title: 'InStaff (Event- und Personalagentur)',
    period: 'Dez 2022 - Dez 2024 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'Mitarbeiter in kurzfristiger Beschaeftigung',
      'Unterstuetzung bei der Organisation und Durchfuehrung von Veranstaltungen.',
      'Faehigkeiten: Teamarbeit, strukturierte Arbeitsweise, Kundenbetreuung'
    ]
  },
  {
    title: 'Fachgebiet Lebensmittelchemie und Analytische Chemie',
    period: 'Apr 2024 - Sep 2024 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'Wissenschaftliche Hilfskraft (Hiwi)',
      'Extraktion sowie qualitative und quantitative Analyse von Weizenproteinen.',
      'Auswertung der Daten und Erstellung von Visualisierungen mit Python und R.'
    ]
  },
  {
    title: 'Fachgebiet Lebensmittelinformatik',
    period: 'Feb 2025 - Okt 2025 | Stuttgart, Baden-Wuerttemberg',
    lines: [
      'Systemadministrator',
      'Administration und Betrieb von Linux-Systemen sowie Docker-Umgebungen.',
      'Entwicklung einer Full-Stack-Webanwendung (Backend, Datenbank, API).',
      'Stack: Linux (Ubuntu), Docker, Python (Flask), SQL, Arduino (C++), JavaScript, Git'
    ]
  }
];

export default function Resume() {
  const { language } = useLanguage();
  const t = i18n[language];

  const education = language === 'de' ? educationDe : educationEn;
  const volunteer = language === 'de' ? volunteerDe : volunteerEn;
  const skillsAndCerts = language === 'de' ? skillsAndCertsDe : skillsAndCertsEn;
  const work = language === 'de' ? workDe : workEn;

  return (
    <section className="section resume-page fade-in">
      <div className="resume-head">
        <div className="resume-icon">CV</div>
        <h1>{t.resume.heading}</h1>
        <p>{t.resume.headText}</p>
        <span className="tag">{t.resume.updated}: 08/09/2024</span>
        <div className="resume-actions">
          <a className="btn" href="/Lebenslauf_Baranov.pdf" target="_blank" rel="noreferrer">{t.resume.viewFull}</a>
          <a className="btn" href="/Lebenslauf_Baranov.pdf" download>{t.resume.download}</a>
        </div>
      </div>

      <ResumePreview />

      <section className="resume-block">
        <h3>{t.resume.education}</h3>
        <ul>
          {education.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="resume-block">
        <h3>{t.resume.volunteer}</h3>
        <ul>
          {volunteer.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="resume-block">
        <h3>{t.resume.certs}</h3>
        <ul>
          {skillsAndCerts.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="resume-block">
        <h3>{t.resume.work}</h3>
        {work.map((job) => (
          <article key={job.title} className="project-card">
            <h4>{job.title}</h4>
            <p><strong>{job.period}</strong></p>
            {job.lines.map((line) => <p key={line}>{line}</p>)}
          </article>
        ))}
      </section>

      <section className="resume-block">
        <h3>{t.resume.contact}</h3>
        <p>Dresden, Plauen</p>
        <p><a href="mailto:grigorybaranov2@gmail.com">grigorybaranov2@gmail.com</a></p>
        <p><a href="tel:+491628002170">0162 800 21 70</a></p>
      </section>
    </section>
  );
}

