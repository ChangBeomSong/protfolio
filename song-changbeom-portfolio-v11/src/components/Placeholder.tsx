import { Monitor } from "lucide-react";
export function Placeholder({
  label,
  small = false,
}: {
  label: string;
  small?: boolean;
}) {
  return (
    <div className={`placeholder ${small ? "small" : ""}`}>
      <div className="placeholder-top">
        <span />
        <span />
        <span />
        <p>{label}</p>
      </div>
      <div className="placeholder-center">
        <Monitor size={small ? 28 : 40} strokeWidth={1} />
        <strong>{label}</strong>
        <span>PROJECT SCREENSHOT</span>
        <p>프로젝트 화면 이미지 준비 중</p>
      </div>
      <span className="placeholder-corner">IMAGE PLACEHOLDER</span>
    </div>
  );
}
