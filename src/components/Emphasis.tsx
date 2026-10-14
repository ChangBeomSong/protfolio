import type { ReactNode } from "react";
const phrases = [
  ["사용자·관리자 인사관리", "role"], ["프로젝트 배포", "role"],
  ["Naver Pay API 결제 연동", "role"], ["서버 승인 API 연동", "key"],
  ["부서 선택 값을 Axios 조회 요청에 전달", "key"], ["상태 변경으로 퇴사 처리", "key"],
  ["퇴사 상태와 퇴사일", "key"], ["변경 이력을 보존", "key"],
  ["승인 성공 후", "key"], ["결제·예약 상태 갱신", "key"],
  ["개인 DB", "key"], ["공용 DB", "key"], ["현재 조직도", "key"],
  ["팀에서 기능과 화면을 직접 구현", "key"], ["삭제 대신 상태 변경", "key"]
];
export function Emphasis({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let offset = 0;
  let count = 0;
  while (offset < text.length && count < 2) {
    let next = -1;
    let selected: string[] | undefined;
    for (const phrase of phrases) {
      const index = text.indexOf(phrase[0], offset);
      if (index >= 0 && (next < 0 || index < next)) { next = index; selected = phrase; }
    }
    if (!selected) break;
    nodes.push(text.slice(offset, next));
    nodes.push(<strong className={selected[1] === "role" ? "emphasis-role" : "emphasis-key"} key={next}>{selected[0]}</strong>);
    offset = next + selected[0].length;
    count++;
  }
  nodes.push(text.slice(offset));
  return <>{nodes}</>;
}
