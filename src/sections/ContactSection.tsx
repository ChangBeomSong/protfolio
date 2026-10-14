import { ArrowUpRight, GitFork, Mail } from "lucide-react";
export function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h2>
            다음 이야기를
            <br />
            함께 나누고 싶습니다<span className="blue">.</span>
          </h2>
          <p>송창범 · Developer</p>
        </div>
        <div className="contact-links">
          <a className="contact-item" href="https://github.com/ChangBeomSong" target="_blank" rel="noopener noreferrer" aria-label="송창범 GitHub 프로필 새 탭에서 열기">
            <GitFork size={22} />
            <div>
              <strong>GitHub</strong>
              <span>github.com/ChangBeomSong</span>
            </div>
            <ArrowUpRight size={18} />
          </a>
          <a className="contact-item" href="mailto:thdckdqja226@naver.com">
            <Mail size={22} />
            <div>
              <strong>Email</strong>
              <span>thdckdqja226@naver.com</span>
            </div>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
