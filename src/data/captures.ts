export type Capture = {
  file: string;
  title: string;
  project?: string;
  width?: number;
  height?: number;
};
export const hrCaptures: Record<string, Capture[]> = {
  "User HR System": [
    { file: "user-directory", title: "내 정보와 조직도 · 부서별 구성원 조회" },
    { file: "user-profile", title: "구성원 상세 정보" },
    { file: "user-member-list", title: "재직 현황별 구성원 목록" },
  ],
  "Admin HR System": [
    { file: "admin-employees", title: "사원 목록 · 검색" },
    { file: "admin-register", title: "사원 등록" },
    { file: "admin-profile", title: "사원 상세 정보" },
    { file: "admin-edit", title: "사원 정보 수정" },
    { file: "admin-organization", title: "조직도 · 부서별 사원 조회" },
    { file: "admin-department", title: "부서 관리 · 추가" },
    { file: "admin-statistics", title: "인사 정보 통계" },
  ],
};
export const foodCaptures: Record<string, Capture[]> = {
  Restaurant: [
    {
      file: "restaurant-detail-1",
      title: "맛집 상세 · 기본 정보",
      project: "matchimnae",
      width: 705,
      height: 664,
    },
    {
      file: "restaurant-detail-2",
      title: "맛집 상세 · 리뷰",
      project: "matchimnae",
      width: 747,
      height: 742,
    },
    {
      file: "restaurant-detail-3",
      title: "맛집 상세 · 리뷰 페이지 전환",
      project: "matchimnae",
      width: 727,
      height: 739,
    },
    {
      file: "ranking-1",
      title: "맛집 랭킹 · 평점순",
      project: "matchimnae",
      width: 468,
      height: 832,
    },
    {
      file: "ranking-2",
      title: "맛집 랭킹 · 목록 탐색 1",
      project: "matchimnae",
      width: 466,
      height: 884,
    },
    {
      file: "ranking-3",
      title: "맛집 랭킹 · 목록 탐색 2",
      project: "matchimnae",
      width: 459,
      height: 900,
    },
  ],
  Stay: [
    {
      file: "stay-detail-1",
      title: "숙소 상세 · 기본 정보",
      project: "matchimnae",
      width: 910,
      height: 869,
    },
    {
      file: "stay-detail-2",
      title: "숙소 상세 · 리뷰",
      project: "matchimnae",
      width: 695,
      height: 675,
    },
  ],
  Payment: [
    {
      file: "payment-summary",
      title: "예약 확인 · 결제 금액",
      project: "matchimnae",
      width: 410,
      height: 614,
    },
    {
      file: "payment-points",
      title: "포인트 사용 · 결제 금액 반영",
      project: "matchimnae",
      width: 559,
      height: 818,
    },
    {
      file: "payment-complete",
      title: "Naver Pay 결제 완료 · 결과 확인",
      project: "matchimnae",
      width: 542,
      height: 834,
    },
  ],
};
