import { Emphasis } from "../components/Emphasis";
import { Screenshot } from "../components/Screenshot";
import { Tags } from "../components/Tags";
import { foodCaptures, hrCaptures, type Capture } from "../data/captures";
import { coreRoles, coreSkills, foodRoles, foodSkills } from "../data/projects";

type Feature = { title: string; tools: string; behavior: string; implementation: string; captures: Capture[] };
const coreFeatures: Feature[] = [
  {title: "사용자 인사 · 조직 조회", tools: "React · Axios · Spring Boot · JPA", behavior: "내 정보와 조직도를 확인하고, 부서를 선택해 구성원 목록과 상세 정보를 조회합니다.", implementation: "사용자 인사관리 화면의 기능과 프론트엔드를 담당했습니다. React에서 부서 선택 값을 Axios 조회 요청에 전달하고, 응답 데이터를 구성원 목록 상태에 반영했습니다. 이름·사번·부서·직급 검색과 직급별 목록 그룹화를 제공하며, 선택한 사원의 프로필·부서·상태를 상세 화면에서 확인하도록 구성했습니다. 사원·부서·직급·상태 데이터는 인사 조회 API를 통해 화면에 연결했습니다.", captures: hrCaptures["User HR System"]},
  {title: "관리자 사원 관리", tools: "Spring Boot · Thymeleaf · JPA", behavior: "사원 목록·검색, 신규 사원 등록, 상세 조회와 정보 수정 화면을 제공합니다.", implementation: "관리자 인사관리의 사원 관련 기능과 화면을 담당했습니다. Spring Boot에서 조회한 사원 목록을 모델에 담아 Thymeleaf로 렌더링했습니다. 목록에서 사원을 확인한 뒤 등록·상세·수정 화면으로 이어지도록 구성했고, 사원·부서·직급·상태 정보를 관리 화면에 연결했습니다. 등록·수정 처리와 화면 구성을 함께 담당했습니다.", captures: hrCaptures["Admin HR System"].slice(0,4)},
  {title: "관리자 조직 관리", tools: "Spring Boot · Thymeleaf · JPA", behavior: "조직도를 조회하고 부서별 사원을 확인하며, 부서를 관리합니다.", implementation: "부서의 상하위 관계를 조직도 형태로 보여주고, 부서 선택과 구성원 조회를 연결했습니다. 부서 조회·등록·수정·삭제 기능과 관리 화면을 담당했습니다. 조직 트리와 선택 부서의 사원 목록을 연결해 부서 구조와 구성원을 함께 확인하도록 구성했습니다.", captures: hrCaptures["Admin HR System"].slice(4,6)},
  {title: "관리자 인사 통계", tools: "Thymeleaf · JPA · Chart.js", behavior: "재직·휴직·퇴사 현황과 관리자·리더·일반 권한별 인원 현황을 확인합니다.", implementation: "인사관리 메뉴 안에서 통계 카드와 차트를 제공했습니다. 서버의 집계 데이터를 화면에 전달해 인사 현황을 한눈에 확인하도록 구성했습니다. 사용자 화면에는 직급별 통계를 포함하지 않았습니다.", captures: hrCaptures["Admin HR System"].slice(6)},
];
const foodFeatures: Feature[] = [
  {title: "맛집 상세 · 랭킹", tools: "Spring MVC · JSP · MyBatis · AJAX", behavior: "맛집 기본 정보와 리뷰를 확인하고, 랭킹 목록에서 맛집을 탐색합니다.", implementation: "맛집 상세 페이지와 랭킹 페이지의 기능·화면을 담당했습니다. 기본 정보, 리뷰와 목록 탐색을 구성했습니다. 랭킹에서는 AJAX 더보기로 목록을 이어서 탐색하도록 구현했습니다. 상세 화면에서는 리뷰와 평균 별점 등 장소 정보를 확인하도록 구성했습니다. 랭킹 결과 검증 중 발생한 데이터 불일치는 아래 문제 해결 사례로 구분했습니다.", captures: foodCaptures.Restaurant},
  {title: "숙소 상세", tools: "Spring MVC · JSP · MyBatis · JavaScript", behavior: "숙소 기본 정보와 리뷰를 상세 화면에서 확인합니다.", implementation: "숙소 상세 페이지를 담당했습니다. 숙소 기본 정보와 리뷰를 상세 화면에 구성했습니다. 정보와 이미지·평점을 확인한 뒤 예약 흐름으로 이동하는 접점을 맡았습니다. 지도 탐색과 예약 처리 전체를 제 담당으로 포함하지 않았습니다.", captures: foodCaptures.Stay},
  {title: "Naver Pay 결제 연동", tools: "Naver Pay API · JavaScript · AJAX", behavior: "예약·결제 금액을 확인하고 Naver Pay를 통해 결제를 진행합니다.", implementation: "Naver Pay API 결제 연동을 담당했습니다. 예약번호로 예약·장소·결제 정보를 조회해 확인 화면에 표시했습니다. Naver Pay 호출과 결과 화면뿐 아니라 서버 승인 API 연동 흐름을 담당했습니다. 승인 성공 후 포인트 사용 처리, 최종 금액 반영, 결제·예약 상태 갱신을 연결하고, 실패 시 성공 처리로 넘어가지 않도록 결과를 구분했습니다. 예약 생성과 포인트 적립 기능은 다른 팀원의 담당입니다.", captures: foodCaptures.Payment},
];
function FeatureCard({feature}: {feature: Feature}) {
  return <article className="feature-card">
    <div className="feature-intro"><h5>{feature.title}</h5><span>{feature.tools}</span></div>
    <p className="feature-behavior"><Emphasis text={feature.behavior}/></p>
    <p className="feature-implementation"><b>내 구현</b> <Emphasis text={feature.implementation}/></p>
    <div className="compact-gallery">{feature.captures.slice(0,2).map(c=><Screenshot key={c.file} capture={c}/>)}</div>
    {feature.captures.length > 2 && <details className="extra-captures"><summary>관련 화면 {feature.captures.length-2}개 더 보기</summary><div className="compact-gallery">{feature.captures.slice(2).map(c=><Screenshot key={c.file} capture={c}/>)}</div></details>}
  </article>;
}
function ScopeMetric({food=false}: {food?:boolean}) {
 return <div className="scope-metric"><div className="scope-value"><strong>{food ? "5개" : "인사·배포"}</strong><span>{food ? "직접 담당한 기능" : "직접 담당한 핵심 영역"}</span></div><div><h4>{food ? "상세·랭킹·결제부터 오류 화면까지" : "사용자·관리자 인사관리와 서비스 배포"}</h4><p>{food ? "맛집 상세 · 맛집 랭킹 · 숙소 상세 · Naver Pay 결제 · 404 오류 페이지" : "사원·조직 조회 / 사원·부서 관리 / 인사 통계의 기능과 화면을 구현하고, AWS EC2·Jenkins·Nginx 배포와 Docker 활용을 담당했습니다."}</p><small className="scope-percentage">{food ? "문서 기능 항목 기준 약 18% 담당" : "문서 업무 분류 기준 약 17% 참여 · 공동 배포 포함"} · 개발량·시간 기준은 아닙니다.</small><small>7인 팀 프로젝트 · 부팀장</small></div></div>;
}
function PaymentFlow() {
 const steps = [
  ["예약 조회", "예약번호로 예약·장소·결제 정보를 확인합니다."],
  ["결제 요청", "포인트와 금액을 확인하고 Naver Pay 결제 흐름으로 연결합니다."],
  ["서버 승인", "반환된 결제 식별자로 승인 API를 호출하고 성공 여부를 구분합니다."],
  ["DB 반영", "승인 성공 후 포인트 사용·최종 금액·결제 및 예약 상태를 갱신합니다."],
  ["결과 표시", "승인 및 처리 결과를 성공·실패로 구분해 화면에 전달합니다."]
 ];
 return <article className="payment-flow"><span className="eyebrow">FEATURE SPOTLIGHT · 대표 구현</span><h4>Naver Pay 결제 — 화면 요청부터 서버 승인까지</h4><p><Emphasis text="결제 확인 화면과 API 연동을 중심으로, 승인 결과가 서비스의 결제·예약 상태로 이어지는 처리 흐름을 담당했습니다."/></p><ol>{steps.map(([title,desc],i)=><li key={title}><span>0{i+1}</span><div><h5>{title}</h5><p>{desc}</p></div></li>)}</ol><div className="payment-checks"><h5>구현 시 고려한 점</h5><p><Emphasis text="예약 정보가 없으면 승인 처리를 진행하지 않고, 이미 승인된 예약은 별도로 처리합니다. 승인 API 실패와 DB 갱신 실패를 결과에서 구분합니다."/></p></div><small>예약 생성·포인트 적립은 다른 팀원의 담당이며, 위 내용은 저장소 코드에서 확인한 처리 흐름입니다.</small></article>;
}
function Context({food=false}: {food?:boolean}) {
 return <div className="project-context">
   <div><span className="eyebrow">PROJECT PURPOSE</span><h4>{food ? "맛집과 숙소 정보를 한 서비스에서" : "업무와 교육평가를 하나의 서비스로"}</h4><p>{food ? "검색 포털·블로그·지도·리뷰로 나뉜 정보를 반복해서 탐색하는 불편함을 줄이기 위해, 맛집·숙소·축제 정보를 한 서비스에 모으는 것을 목표로 기획했습니다. 저는 정보 탐색을 위한 상세·랭킹 화면과 결제 연동을 맡았습니다." : "근태·전자결재·급여 등 업무 시스템의 분산과 사내 지식 탐색·온보딩의 어려움을 문제로 정의하고, 업무와 교육·AI 지원을 한 플랫폼에서 연결하는 것을 목표로 기획했습니다. 저는 사원·조직 정보를 조회하는 사용자 화면과 인사 운영을 위한 관리자 화면, 배포를 맡았습니다."}</p></div>
   <div><span className="eyebrow">REFERENCE & IMPLEMENTATION</span><h4>서비스를 참고하고, 기능은 직접 구현</h4><p>{food ? "네이버·카카오 지도, 트립어드바이저, 클룩 등의 정보 배치와 탐색·결제 흐름을 참고했습니다." : "다우오피스, 네이버웍스, flex, JANDI 등의 업무 흐름과 UI를 참고했습니다."} 레퍼런스의 코드를 가져와 리뉴얼한 프로젝트가 아니라, 팀에서 기능과 화면을 직접 구현했습니다. 아래에서는 전체 서비스와 제 담당 범위를 구분합니다.</p></div>
 </div>;
}
export function ProjectsSection() {
return <section className="projects section" id="projects"><div className="container">
 <div className="section-heading"><div><span className="eyebrow">PROJECTS</span><h2>만든 이유부터,<br/>직접 구현한 과정까지.</h2></div><p>서비스의 목표 · 담당 기능 · 구현 방식<br/>팀 전체의 작업과 개인 역할을 구분합니다.</p></div>
 <article className="project featured">
  <div className="project-heading"><span className="project-no">PROJECT 01</span><div className="badges"><span className="badge blue-badge">MAIN PROJECT</span><span className="badge">TEAM PROJECT</span></div></div>
  <div className="featured-layout"><div className="project-copy"><h3>COREWORK<span className="blue">.</span></h3><p className="project-subtitle">AI 통합 스마트 그룹웨어 &amp;<br/>교육평가 시스템</p><div className="project-meta-badges" aria-label="프로젝트 기간 및 역할"><div className="meta-period"><span>개발 기간</span><strong>5월 1일 – 6월 5일</strong><em>약 5주 · 기획부터 테스트·배포까지</em></div><div className="meta-team"><span>팀 규모</span><strong>7명</strong></div><div className="meta-role"><span>담당 역할</span><strong>부팀장</strong></div></div><p className="project-description"><Emphasis text="사용자·관리자 인사관리의 기능과 프론트엔드, 프로젝트 배포를 담당했습니다."/></p><div className="project-actions"><a className="text-link" href="#corework-detail">담당 기능과 구현 과정 보기 →</a><a className="repository-link" href="https://github.com/youngeunsong/ict06_team1_finalPJ/tree/dev" target="_blank" rel="noopener noreferrer" aria-label="COREWORK 팀 프로젝트 GitHub 새 탭에서 열기">GitHub 저장소 <span>↗</span></a></div></div><Screenshot capture={{file:"admin-employees", title:"관리자 사원 관리"}} featured/></div>
  <Context/><ScopeMetric/>
  <div className="role-block"><div className="role-heading"><span className="eyebrow">MY ROLE</span><h4>직접 담당한 5개 영역</h4><p><Emphasis text="사용자·관리자 기능과 배포를 구분했습니다."/></p></div><ol className="role-list">{coreRoles.map((r,i)=><li key={r}><span>0{i+1}</span>{r}</li>)}</ol></div>
  <div className="tech-row"><span>TECH STACK</span><Tags items={coreSkills}/></div>
  <div id="corework-detail" className="project-details"><div className="details-heading"><h4>담당 기능 · 구현 방식</h4><span>캡처를 누르면 확대됩니다.</span></div><div className="feature-grid">{coreFeatures.map(f=><FeatureCard key={f.title} feature={f}/>)}</div>
   <article className="deployment-story"><span className="eyebrow">DEPLOYMENT</span><h4>코드가 실제 서비스로 실행되기까지</h4><p><Emphasis text="AWS EC2에서 Jenkins 빌드·배포와 Nginx 연결을 담당했습니다. React 빌드 결과와 Spring Boot 애플리케이션을 배포하고, PostgreSQL 데이터베이스를 연결했습니다."/></p><ol className="deployment-flow"><li>Jenkins 빌드</li><li>React · Spring Boot 배포</li><li>Nginx 연결</li><li>서비스 실행 확인</li></ol></article>
   <div className="troubleshooting"><span className="eyebrow">DESIGN IMPROVEMENT · 인사 데이터 보존</span><h4>퇴사 처리 방식 개선 — 삭제에서 상태 관리로</h4>
<p className="case-learning"><Emphasis text="퇴사자의 정보를 보존하면서 현재 조직 운영에 필요한 구성원 목록을 제공하도록, 사원 삭제 대신 상태 변경으로 퇴사 처리를 구성했습니다."/></p>
<div className="issue-grid">
<article><h5>초기 구상과 설계상의 문제</h5><p><b>초기 구상</b> 퇴사한 사원을 삭제해 현재 사원 목록에서 제거하는 방식을 고려했습니다.</p><p><b>검토</b> 사원 정보를 제거하면 과거 인사 변경 이력을 지속적으로 조회하기 어려워지고, 퇴사자 조회와 퇴사 인원 집계 대상도 사라질 수 있습니다. 현재 구성원에게 보여줄 정보와 관리자가 보존해야 할 정보를 구분할 필요가 있었습니다.</p></article>
<article><h5>상태 변경과 조회 범위 분리</h5><p><b>내 구현</b> <strong className="emphasis-key">사원 데이터를 유지한 채 상태를 ‘퇴사’로 변경</strong>하고 퇴사일을 저장하도록 구성했습니다. 상태가 변경되면 <strong className="emphasis-key">이전·새 상태, 변경 시각과 처리 관리자</strong> 정보를 이력으로 기록합니다.</p><p><b>조회 처리</b> <strong className="emphasis-key">현재 조직도와 구성원 조회에서는 퇴사자를 제외</strong>하고, 관리자 화면에서는 상태 조건으로 퇴사자를 조회하고 인사 통계에 집계할 수 있도록 처리했습니다.</p></article>
</div>
<ol className="deployment-flow"><li>관리자 상태 변경</li><li>퇴사일·변경 이력 기록</li><li>현재 조직도에서 제외</li><li>관리자 조회·통계에 보존</li></ol>
<p className="case-learning"><b>설계 결과</b> 현재 구성원 목록과 과거 인사 기록의 조회 목적을 구분했습니다. 실제 삭제 오류를 해결한 사례가 아니라, 데이터 보존 필요성을 고려해 처리 방식을 개선한 사례입니다.</p>
<p className="case-learning"><b>남은 개선점</b> 현재 버전에는 퇴사 상태와 인증 차단이 연결되어 있지 않습니다. 로그인·토큰 재발급과 기존 토큰·세션 요청에서도 퇴사 상태를 확인하도록 보완할 필요가 있습니다.</p>
</div>

  </div>
 </article>
 <article className="project secondary-project"><div className="project-heading"><span className="project-no">PROJECT 02</span><span className="badge">TEAM PROJECT</span></div><div className="secondary-layout"><Screenshot capture={foodCaptures.Restaurant[0]} featured/><div className="project-copy"><h3>맛침내<span className="blue">.</span></h3><p className="project-subtitle">맛집·여행 정보 서비스</p><div className="project-meta-badges" aria-label="프로젝트 기간 및 역할"><div className="meta-period"><span>개발 기간</span><strong>3월 3일 – 3월 31일</strong><em>약 4주 · 기획부터 통합 테스트까지</em></div><div className="meta-team"><span>팀 규모</span><strong>7명</strong></div><div className="meta-role"><span>담당 역할</span><strong>부팀장</strong></div></div><p className="project-description">맛집 상세·랭킹, 숙소 상세, Naver Pay API 결제 연동과 404 오류 페이지를 담당했습니다.</p><div className="project-actions"><a className="repository-link" href="https://github.com/youngeunsong/ict06_mid_pj/tree/dev" target="_blank" rel="noopener noreferrer" aria-label="맛침내 팀 프로젝트 GitHub 새 탭에서 열기">GitHub 저장소 <span>↗</span></a></div><span className="eyebrow role-label">MY ROLE · 담당 기능 5개</span><ul className="food-roles">{foodRoles.map(r=><li key={r}>{r}</li>)}</ul></div></div><Context food/><ScopeMetric food/><div className="tech-row"><span>TECH STACK</span><Tags items={foodSkills}/></div><div className="project-details"><div className="details-heading"><h4>담당 기능 · 구현 방식</h4><span>동일한 기능의 캡처를 묶었습니다.</span></div><PaymentFlow/><div className="feature-grid">{foodFeatures.map(f=><FeatureCard key={f.title} feature={f}/>)}<div className="error404-pair supplementary-features">
<article className="feature-card"><div className="feature-intro"><h5>404 안내 · 캐릭터 클릭</h5><span>JSP · CSS · JavaScript</span></div><p className="feature-behavior">페이지를 찾을 수 없는 상황을 안내하고 홈·이전 페이지로 이동하는 버튼을 제공합니다.</p><p className="feature-implementation"><b>내 구현</b> 클릭 횟수에 따라 말풍선이 바뀌는 작은 상호작용을 추가했습니다.</p><div className="error404-preview"><Screenshot capture={{file:"error404-default",title:"404 기본 화면 · 이동 버튼",project:"matchimnae",width:1327,height:892}}/></div><details className="extra-captures"><summary>캐릭터 클릭 말풍선 화면 2개 더 보기</summary><div className="compact-gallery">{[{file:"error404-bubble-5",title:"반복 클릭 · 첫 번째 말풍선",project:"matchimnae",width:1224,height:845},{file:"error404-bubble-10",title:"반복 클릭 · 두 번째 말풍선",project:"matchimnae",width:1223,height:860}].map(c=><Screenshot key={c.file} capture={c}/>)}</div></details></article>
<article className="feature-card"><div className="feature-intro"><h5>404 보조 기능 · 별 찾기</h5><span>JavaScript · 클릭 이벤트 · 수집 상태 관리</span></div><p className="feature-behavior">지도 영역을 클릭하면 숨겨진 별 6개를 찾는 이벤트가 시작됩니다.</p><p className="feature-implementation"><b>내 구현</b> 별의 수집 상태와 개수를 관리하고, 6개 수집 시 완료 메시지를 표시합니다.</p><div className="error404-preview"><Screenshot capture={{file:"error404-playing",title:"별 찾기 진행 · 수집 개수 표시",project:"matchimnae",width:1281,height:914}}/></div><details className="extra-captures"><summary>별 6개 수집 완료 화면 더 보기</summary><div className="error404-preview"><Screenshot capture={{file:"error404-complete",title:"별 6개 수집 완료",project:"matchimnae",width:1213,height:838}}/></div></details></article>
<p className="capture-source-note">원본 JSP를 로컬 HTML로 변환해 실행한 캡처입니다.</p></div></div>
<div className="troubleshooting"><span className="eyebrow">TROUBLESHOOTING · 데이터와 협업</span><h4>랭킹 결과 불일치와 통합 전 검증 방식</h4><div className="issue-grid">
<article><h5>랭킹 기준의 모호함</h5><p><b>증상</b> 랭킹 기준이 명확하지 않아 목록 순서가 기대와 다르게 표시되는 문제가 있었습니다.</p><p><b>구분</b> 정렬 로직 문제와 테스트 데이터 차이를 별도로 확인할 필요가 있었습니다.</p><p><b>정리</b> 랭킹 결과의 기대 순서와 조회 조건을 명확하게 정의해야 한다는 점을 확인했습니다. 이 문제는 아래의 테스트 데이터 불일치와 구분해 다뤘습니다.</p></article>
<article><h5>개인 DB와 공용 DB의 데이터 차이</h5><p><b>배경</b> 팀원별 개인 DB로 테스트하다 보니 데이터가 달라, 로컬에서 확인한 결과와 실제 통합 데이터의 결과가 어긋나는 경우가 있었습니다.</p><p><b>대응</b> 개발 중에는 로컬 DB를 사용하되, 공유 전 <strong className="emphasis-key">최신 코드를 pull로 반영하고 공용 DB에서 다시 테스트</strong>한 뒤 변경 사항을 통합하는 방식으로 검증했습니다.</p><p><b>결과</b> 최신 코드와 공용 데이터 기준으로 통합 전 결과를 확인해, 개인 DB에서만 정상으로 보이던 데이터 불일치 문제에 대응했습니다.</p></article>
</div><p className="case-learning">배운 점: 코드가 같아도 데이터가 다르면 검증 결과가 달라질 수 있습니다. 개별 개발 확인과 공용 데이터 기반 통합 확인을 구분하는 것이 중요했습니다.</p></div>
</div></article>
</div></section>;
}
