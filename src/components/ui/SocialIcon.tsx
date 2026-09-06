import { FiGithub, FiLinkedin, FiMail, FiGlobe, FiPhone } from "react-icons/fi";
import type { SocialLink } from "../../lib/types";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  globe: FiGlobe,
  phone: FiPhone,
};

interface SocialIconProps {
  icon: SocialLink["icon"];
  className?: string;
}

export function SocialIcon({ icon, className = "h-5 w-5" }: SocialIconProps) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
