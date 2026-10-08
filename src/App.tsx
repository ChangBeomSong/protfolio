import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <>
      <a className="skip" href="#about">
        본문으로 이동
      </a>
      <header className="header">
        <div className="nav-wrap">
          <a href="#home" className="brand" aria-label="송창범 홈">
            <span className="brand-mark">
              S<span>.</span>
            </span>
            <span>송창범</span>
          </a>
          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav className={menu ? "visible" : ""} aria-label="메인 메뉴">
            {["Home", "About", "Projects", "Skills", "Contact"].map((n) => (
              <a
                key={n}
                className={active === n.toLowerCase() ? "active" : ""}
                href={"#" + n.toLowerCase()}
                onClick={() => setMenu(false)}
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer>
        <div className="container">
          <span>© 2026 송창범</span>
          <span>PORTFOLIO · FIRST PROTOTYPE</span>
          <a href="#home">
            맨 위로 <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </>
  );
}
