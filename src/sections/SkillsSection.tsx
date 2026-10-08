import { Cloud, Database, Layout, Server } from "lucide-react";
export function SkillsSection() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 — SKILLS</span>
            <h2>프로젝트에서 사용한 기술.</h2>
          </div>
          <p>
            구현부터 배포까지,
            <br />
            역할에 따라 정리했습니다.
          </p>
        </div>
        <div className="skills-grid">
          {[
            [
              Server,
              "Backend",
              ["Java", "Spring Boot", "Spring MVC", "JPA", "MyBatis"],
            ],
            [
              Layout,
              "Frontend",
              ["React", "JavaScript", "Axios", "AJAX", "Thymeleaf", "JSP"],
            ],
            [Database, "Database", ["PostgreSQL", "Oracle"]],
            [Cloud, "DevOps & Tools", ["AWS EC2", "Jenkins", "Nginx"]],
          ].map(([Icon, title, items]) => {
            const I = Icon as typeof Server;
            return (
              <div className="skill-card" key={title as string}>
                <I size={24} strokeWidth={1.5} />
                <h3>{title as string}</h3>
                <ul>
                  {(items as string[]).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
