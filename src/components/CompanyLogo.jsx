import { SiHubspot, SiHackerrank } from 'react-icons/si';
import { Building2, Briefcase, FlaskConical, Hospital, ShieldCheck } from 'lucide-react';

export default function CompanyLogo({ logo, company }) {
  const commonProps = { className: 'experience-logo__icon', 'aria-hidden': 'true' };

  const map = {
    hubspot: <SiHubspot {...commonProps} />,
    hackerrank: <SiHackerrank {...commonProps} />,
    baywa: <Building2 {...commonProps} />,
    instaff: <Briefcase {...commonProps} />,
    lab: <FlaskConical {...commonProps} />,
    uhohenheim: <ShieldCheck {...commonProps} />,
    hospital: <Hospital {...commonProps} />
  };

  return (
    <div className="experience-logo" aria-label={`${company} logo`}>
      {map[logo] || <Building2 {...commonProps} />}
    </div>
  );
}
