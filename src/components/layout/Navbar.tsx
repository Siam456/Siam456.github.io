import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Container } from "./Container";
import { profile } from "../../lib/data";

interface NavbarProps {
  page: "home" | "writing";
  onNavigate: (page: "home" | "writing") => void;
}

export function Navbar({ page, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, destination: "home" | "writing") => {
    event.preventDefault();
    setOpen(false);
    onNavigate(destination);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          onClick={(event) => navigateTo(event, "home")}
          className="font-display text-base font-bold text-primary"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="/" onClick={(event) => navigateTo(event, "home")} className={`text-sm font-medium transition-colors ${page === "home" ? "text-primary" : "text-muted hover:text-ink"}`}>Home</a>
          <a href="/writing" onClick={(event) => navigateTo(event, "writing")} className={`text-sm font-medium transition-colors ${page === "writing" ? "text-primary" : "text-muted hover:text-ink"}`}>Writing</a>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid h-9 w-11 place-items-center rounded-md border border-primary/25 bg-secondary text-secondary-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label={dark ? "Use light theme" : "Use dark theme"}
            title={dark ? "Use light theme" : "Use dark theme"}
          >
            {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={() => setDark((value) => !value)} className="grid h-9 w-11 place-items-center rounded-md border border-primary/25 bg-secondary text-secondary-foreground" aria-label={dark ? "Use light theme" : "Use dark theme"}>
            {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => setOpen((prev) => !prev)} className="grid h-9 w-9 place-items-center text-ink" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" onClick={(event) => navigateTo(event, "home")} className={`text-sm font-medium ${page === "home" ? "text-primary" : "text-muted hover:text-ink"}`}>Home</a>
            <a href="/writing" onClick={(event) => navigateTo(event, "writing")} className={`text-sm font-medium ${page === "writing" ? "text-primary" : "text-muted hover:text-ink"}`}>Writing</a>
          </div>
        </nav>
      )}
    </header>
  );
}
