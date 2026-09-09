import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { SocialIcon } from "../ui/SocialIcon";
import { profile } from "../../lib/data";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Working on a difficult"
      titleMuted="AI system?"
      description="I'm interested in agent platforms, real-time AI, security automation, and backend architecture where reliability matters."
    >
      <div className="flex flex-col items-start gap-8 border-t border-line py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">{profile.email}</p>
          <p className="mt-1 text-sm text-muted">{profile.phone}</p>
          <a
            href={`https://wa.me/880${profile.whatsapp.replace(/^0/, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <FaWhatsapp className="h-4 w-4" /> WhatsApp · {profile.whatsapp}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button href={`mailto:${profile.email}`}>
            Start a conversation <FiArrowUpRight className="h-4 w-4" />
          </Button>
          {profile.socials
            .filter((s) => s.icon !== "mail")
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                <SocialIcon icon={social.icon} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </Section>
  );
}
