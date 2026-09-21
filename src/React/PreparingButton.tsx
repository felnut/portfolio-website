import { useEffect, useRef, useState } from "react";

// 공개 GitHub 링크가 없는 프로젝트 카드에서 쓰는 버튼 — 누르면 짧게
// 토스트 안내만 뜨고 사라진다(800ms 표시 + 500ms 페이드아웃). 이유는
// 프로젝트마다 다를 수 있어(아직 안 올림/비공개 저장소 등) message로
// 받는다.
export default function PreparingButton({
  className,
  message = "아직 GitHub 링크가 준비되지 않았습니다!",
}: {
  className?: string;
  message?: string;
}) {
  const [display, setDisplay] = useState(false);
  const [visible, setVisible] = useState(false);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const removeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast() {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (removeTimer.current) clearTimeout(removeTimer.current);

    setDisplay(true);
    setVisible(true);

    hideTimer.current = setTimeout(() => setVisible(false), 800);
  }

  useEffect(() => {
    if (visible || !display) return;

    removeTimer.current = setTimeout(() => setDisplay(false), 500);

    return () => {
      if (removeTimer.current) clearTimeout(removeTimer.current);
    };
  }, [visible, display]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (removeTimer.current) clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={showToast}
        aria-label="GitHub"
        className={`${className} opacity-50`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7"
        >
          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
        </svg>
      </button>

      {display && (
        <div
          className="pointer-events-none fixed inset-x-0 bottom-8 z-9999 flex justify-center"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div
            role="alert"
            className={`rounded-lg bg-gray-800/90 px-10 py-5 text-center text-lg font-bold text-white shadow-xl transition-all duration-500 ${
              visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
