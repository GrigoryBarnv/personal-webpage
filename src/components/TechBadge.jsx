import {
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiVercel,
  SiReact,
  SiFlask,
  SiMui,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiVscodium,
  SiGooglechrome,
  SiCss,
  SiD3,
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiArduino,
  SiSqlite,
  SiPostgresql,
  SiApachekafka,
  SiSpring,
  SiOpenjdk,
  SiScikitlearn,
  SiGithub
} from 'react-icons/si';

const techMap = {
  nextjs: { label: 'next.js', icon: SiNextdotjs, color: '#111111', textColor: '#ffffff' },
  javascript: { label: 'javascript', icon: SiJavascript, color: '#f7df1e', textColor: '#111111' },
  tailwindcss: { label: 'tailwindcss', icon: SiTailwindcss, color: '#38bdf8', textColor: '#ffffff' },
  vercel: { label: 'vercel', icon: SiVercel, color: '#111111', textColor: '#ffffff' },
  react: { label: 'react', icon: SiReact, color: '#61dafb', textColor: '#111111' },
  flask: { label: 'flask', icon: SiFlask, color: '#111111', textColor: '#ffffff' },
  materialui: { label: 'Material-UI', icon: SiMui, color: '#007fff', textColor: '#ffffff' },
  chakraui: { label: 'Chakra UI', icon: SiChakraui, color: '#319795', textColor: '#ffffff' },
  expressjs: { label: 'Express.js', icon: SiExpress, color: '#444444', textColor: '#ffffff' },
  mongodb: { label: 'MongoDB', icon: SiMongodb, color: '#47a248', textColor: '#ffffff' },
  typescript: { label: 'TypeScript', icon: SiTypescript, color: '#3178c6', textColor: '#ffffff' },
  vscode: { label: 'VS Code Extension', icon: SiVscodium, color: '#007acc', textColor: '#ffffff' },
  chrome: { label: 'Chrome Extensions', icon: SiGooglechrome, color: '#ea4335', textColor: '#ffffff' },
  css: { label: 'CSS', icon: SiCss, color: '#1572b6', textColor: '#ffffff' },
  d3: { label: 'd3', icon: SiD3, color: '#f9a03c', textColor: '#ffffff' },

  html: { label: 'HTML', icon: SiHtml5, color: '#e34f26', textColor: '#ffffff' },
  'rest-api': { label: 'REST API', icon: SiGithub, color: '#475569', textColor: '#ffffff' },
  python: { label: 'Python', icon: SiPython, color: '#3776ab', textColor: '#ffffff' },
  pandas: { label: 'pandas', icon: SiPandas, color: '#150458', textColor: '#ffffff' },
  numpy: { label: 'NumPy', icon: SiNumpy, color: '#013243', textColor: '#ffffff' },
  'scikit-learn': { label: 'scikit-learn', icon: SiScikitlearn, color: '#f7931e', textColor: '#ffffff' },
  jupyter: { label: 'Jupyter', icon: SiJupyter, color: '#f37626', textColor: '#ffffff' },
  arduino: { label: 'Arduino', icon: SiArduino, color: '#00979d', textColor: '#ffffff' },
  xgboost: { label: 'XGBoost', icon: SiGithub, color: '#ec4899', textColor: '#ffffff' },
  vite: { label: 'Vite', icon: SiVercel, color: '#646cff', textColor: '#ffffff' },
  sqlite: { label: 'SQLite', icon: SiSqlite, color: '#003b57', textColor: '#ffffff' },
  java: { label: 'Java', icon: SiOpenjdk, color: '#ea2d2e', textColor: '#ffffff' },
  'spring-boot': { label: 'Spring Boot', icon: SiSpring, color: '#6db33f', textColor: '#ffffff' },
  postgresql: { label: 'PostgreSQL', icon: SiPostgresql, color: '#336791', textColor: '#ffffff' },
  kafka: { label: 'Kafka', icon: SiApachekafka, color: '#231f20', textColor: '#ffffff' },
  'gemini-api': { label: 'Gemini API', icon: SiGithub, color: '#8b5cf6', textColor: '#ffffff' },
  cli: { label: 'CLI', icon: SiGithub, color: '#334155', textColor: '#ffffff' }
};

export default function TechBadge({ techKey }) {
  const tech = techMap[techKey];
  if (!tech) {
    return (
      <span className="tech-badge" aria-label={`Technology: ${techKey}`}>
        <span className="tech-badge__left">•</span>
        <span className="tech-badge__right" style={{ backgroundColor: '#6b7280', color: '#ffffff' }}>
          {techKey}
        </span>
      </span>
    );
  }

  const Icon = tech.icon;
  return (
    <span className="tech-badge" aria-label={`Technology: ${tech.label}`}>
      <span className="tech-badge__left">
        <Icon aria-hidden="true" />
      </span>
      <span
        className="tech-badge__right"
        style={{ backgroundColor: tech.color, color: tech.textColor }}
      >
        {tech.label}
      </span>
    </span>
  );
}
