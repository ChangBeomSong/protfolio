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
          <div className="contact-item">
            <GitFork size={22} />
            <div>
              <strong>GitHub</strong>
              <span>GitHub 주소 준비 중</span>
            </div>
            <span className="contact-status">PLACEHOLDER</span>
          </div>
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
