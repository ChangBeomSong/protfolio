import { Cloud, Code2, Layers } from "lucide-react";
import { asset } from "../lib/asset";
export function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="container section-grid">
        <div className="section-title">
          <span className="eyebrow">01 — ABOUT</span>
          <h2>
            화면 너머의 흐름까지
            <br />
            생각합니다.
          </h2>
          <figure className="about-profile">
            <img
              src={asset("images/song-changbeom.jpg")}
              alt="개발자 송창범의 프로필 사진"
              width={945}
              height={1260}
              loading="lazy"
            />
            <figcaption>
              <strong>송창범</strong>
              <span>Developer</span>
            </figcaption>
          </figure>
        </div>
        <div className="about-content">
          <p className="lead">
            기능을 구현하고, 연결하고,
            <br />
            실제 서비스 환경에 배포하는 경험을 쌓았습니다.
          </p>
          <p>
            두 번의 팀 프로젝트에서 맡은 기능을 직접 구현했습니다.
            COREWORK에서는 사용자·관리자 인사관리와 프로젝트 배포를,
            맛침내에서는 상세·랭킹 페이지와 결제 연동을 담당했습니다.
          </p>
          <div className="about-notes">
            <div>
              <Code2 size={20} />
              <strong>기능 구현</strong>
              <span>사용자와 관리자를 위한 화면</span>
            </div>
            <div>
              <Layers size={20} />
              <strong>서비스 연결</strong>
              <span>데이터 조회부터 API 연동까지</span>
            </div>
            <div>
              <Cloud size={20} />
              <strong>배포 경험</strong>
              <span>서비스 실행 환경 구성</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
