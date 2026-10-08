import { ChevronDown } from "lucide-react";
export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-label">
          <span /> DEVELOPER PORTFOLIO <span className="hero-year">2026</span>
        </div>
        <h1>
          서비스의 <em>구현부터 배포까지</em>
          <br />
          경험한 개발자
          <br />
          <span className="name">송창범</span>입니다
          <span className="blue">.</span>
        </h1>
        <div className="hero-bottom">
          <div>
            <p>
              사용자 화면과 관리자 시스템을 만들고,
              <br />
              서비스가 실행되는 환경까지 연결했습니다.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">
                프로젝트 보기
              </a>
              <a href="#about" className="button secondary">
                소개 보기
              </a>
            </div>
          </div>
          <div className="hero-index">
            <span>01 / IMPLEMENTATION</span>
            <span>02 / INTEGRATION</span>
            <span>03 / DEPLOYMENT</span>
          </div>
        </div>
        <div className="hero-foot">
          <span>JAVA · SPRING · REACT · AWS</span>
          <a href="#about">
            SCROLL TO EXPLORE <ChevronDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
