import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Recommendations } from "./components/sections/Recommendations";
import { Impact } from "./components/sections/Impact";
import { Writing } from "./components/pages/Writing";
import { WritingDetail } from "./components/pages/WritingDetail";

type Page = "home" | "writing" | "article";

function App() {
  const getPage = (): Page => window.location.pathname.startsWith("/writing/") ? "article" : window.location.pathname === "/writing" ? "writing" : "home";
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const syncPage = () => setPage(getPage());
    window.addEventListener("popstate", syncPage);
    return () => window.removeEventListener("popstate", syncPage);
  }, []);

  const navigate = (nextPage: "home" | "writing") => {
    const path = nextPage === "writing" ? "/writing" : "/";
    window.history.pushState({}, "", path);
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (slug: string) => {
    window.history.pushState({}, "", `/writing/${slug}`);
    setPage("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar page={page === "home" ? "home" : "writing"} onNavigate={navigate} />
      {page === "home" ? <main>
        <Hero />
        <Impact />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Recommendations />
        <Contact />
      </main> : page === "writing" ? <Writing onOpenArticle={openArticle} /> : <WritingDetail slug={window.location.pathname.split("/").pop() ?? "hello-world"} onBack={() => navigate("writing")} />}
      <Footer />
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
