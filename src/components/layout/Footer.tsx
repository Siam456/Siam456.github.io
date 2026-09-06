import { Container } from "./Container";
import { SocialIcon } from "../ui/SocialIcon";
import { profile } from "../../lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-muted">
          © {year} {profile.name}.
        </p>
        <div className="flex items-center gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="text-muted transition-colors hover:text-primary"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
