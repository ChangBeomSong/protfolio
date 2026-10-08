import { ArrowUpRight } from "lucide-react";
import { Details } from "../components/Details";
import { Screenshot } from "../components/Screenshot";
import { Tags } from "../components/Tags";
import { foodCaptures, hrCaptures } from "../data/captures";
import {
  coreDetails,
  coreRoles,
  coreSkills,
  foodDetails,
  foodRoles,
  foodSkills,
} from "../data/projects";
export function ProjectsSection() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 — SELECTED PROJECTS</span>
            <h2>
              팀과 함께 만든 서비스,
              <br />그 안에서 맡은 역할.
            </h2>
          </div>
          <p>
            팀 프로젝트 전체와
            <br />
            직접 담당한 기능을 구분해 소개합니다.
          </p>
        </div>
        <article className="project featured">
          <div className="project-heading">
            <span className="project-no">PROJECT 01</span>
            <div className="badges">
              <span className="badge blue-badge">MAIN PROJECT</span>
              <span className="badge">TEAM PROJECT</span>
            </div>
          </div>
          <div className="featured-layout">
            <div className="project-copy">
              <h3>
                COREWORK<span className="blue">.</span>
              </h3>
              <p className="project-subtitle">
                AI 통합 스마트 그룹웨어 &amp;
                <br />
                교육평가 시스템
              </p>
              <p className="project-description">
                기업의 업무와 교육평가를 통합한 팀 프로젝트입니다. 인사관리
                기능과 프로젝트 배포를 담당했습니다.
              </p>
              <a className="text-link" href="#corework-detail">
                담당 영역 살펴보기 <ArrowUpRight size={17} />
              </a>
            </div>
            <Screenshot
              capture={{ file: "admin-employees", title: "관리자 사원 관리" }}
              featured
            />
          </div>
          <div className="role-block">
            <div className="role-heading">
              <span className="eyebrow">MY ROLE</span>
              <h4>직접 담당한 영역</h4>
              <p>팀 프로젝트 중 송창범의 담당 기능</p>
            </div>
            <ol className="role-list">
              {coreRoles.map((r, i) => (
                <li key={r}>
                  <span>0{i + 1}</span>
                  {r}
                </li>
              ))}
            </ol>
          </div>
          <div className="tech-row">
            <span>TECH STACK</span>
            <Tags items={coreSkills} />
          </div>
          <div id="corework-detail" className="project-details">
            <div className="details-heading">
              <h4>Inside COREWORK</h4>
              <span>기능과 배포 과정 살펴보기</span>
            </div>
            <Details items={coreDetails} captures={hrCaptures} />
          </div>
        </article>
        <article className="project secondary-project">
          <div className="project-heading">
            <span className="project-no">PROJECT 02</span>
            <span className="badge">TEAM PROJECT</span>
          </div>
          <div className="secondary-layout">
            <Screenshot capture={foodCaptures.Restaurant[0]} featured />
            <div className="project-copy">
              <h3>
                맛침내<span className="blue">.</span>
              </h3>
              <p className="project-subtitle">맛집·여행 정보 서비스</p>
              <p className="project-description">
                맛집과 여행 정보를 탐색하는 팀 프로젝트입니다. 맛집·숙소
                페이지와 Naver Pay API 결제를 담당했습니다.
              </p>
              <span className="eyebrow role-label">MY ROLE</span>
              <ul className="food-roles">
                {foodRoles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tech-row">
            <span>TECH STACK</span>
            <Tags items={foodSkills} />
          </div>
          <div className="project-details">
            <div className="details-heading">
              <h4>Inside 맛침내</h4>
              <span>직접 구현한 기능 살펴보기</span>
            </div>
            <Details items={foodDetails} captures={foodCaptures} />
          </div>
        </article>
      </div>
    </section>
  );
}
