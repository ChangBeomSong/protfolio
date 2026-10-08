import { Monitor, X } from "lucide-react";
import { useRef } from "react";
import type { Capture } from "../data/captures";
import { asset } from "../lib/asset";
export function Screenshot({
  capture,
  featured = false,
}: {
  capture: Capture;
  featured?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <figure
      className={`capture ${featured ? "capture-featured" : ""} ${capture.project === "matchimnae" ? "capture-food" : ""}`}
    >
      <button
        className="capture-button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`${capture.title} 화면 크게 보기`}
      >
        <img
          src={asset(
            `images/${capture.project || "corework"}/${capture.file}.png`,
          )}
          alt={`${capture.project === "matchimnae" ? "맛침내" : "COREWORK"} ${capture.title} 시연 화면`}
          loading={featured ? "eager" : "lazy"}
          width={capture.width || 2558}
          height={capture.height || 946}
        />
        <span className="capture-expand">
          <Monitor size={14} /> 크게 보기
        </span>
      </button>
      <figcaption>
        <span>{capture.title}</span>
        <small>
          {capture.project === "matchimnae" ? "맛침내" : "COREWORK"} · 직접
          담당한 기능
        </small>
      </figcaption>
      <dialog
        ref={dialog}
        className="capture-dialog"
        aria-label={`${capture.title} 확대 화면`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="capture-dialog-head">
          <strong>{capture.title}</strong>
          <button
            onClick={() => dialog.current?.close()}
            aria-label="확대 화면 닫기"
          >
            <X size={22} />
          </button>
        </div>
        <div className="capture-dialog-body">
          <img
            src={asset(
              `images/${capture.project || "corework"}/${capture.file}.png`,
            )}
            alt={`${capture.project === "matchimnae" ? "맛침내" : "COREWORK"} ${capture.title} 확대 화면`}
          />
        </div>
        <p className="capture-dialog-note">
          화면이 넓을 때는 좌우로 스크롤해서 확인할 수 있습니다.
        </p>
      </dialog>
    </figure>
  );
}
