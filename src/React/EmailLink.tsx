import { useEffect, useState } from "react";

const EMAIL_ADDRESS = "dev@felnut.com";

function computeEmailLink(): string {
  const width = window.innerWidth;
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isMobileDevice = width <= 768 || isTouchDevice;

  if (isMobileDevice) {
    return `mailto:${EMAIL_ADDRESS}`;
  }

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("edg")) {
    return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL_ADDRESS}`;
  }
  if (userAgent.includes("firefox")) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
  }
  if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    const isMacOS = userAgent.includes("mac");
    const isIOS = userAgent.includes("iphone") || userAgent.includes("ipad");
    return isMacOS || isIOS
      ? `mailto:${EMAIL_ADDRESS}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
  }
  if (
    userAgent.includes("opera") ||
    userAgent.includes("opr") ||
    userAgent.includes("brave") ||
    userAgent.includes("vivaldi") ||
    userAgent.includes("whale") ||
    userAgent.includes("chrome")
  ) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
  }
  if (userAgent.includes("trident") || userAgent.includes("msie")) {
    return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL_ADDRESS}`;
  }
  return `mailto:${EMAIL_ADDRESS}`;
}

function useEmailLink(): string {
  const [emailLink, setEmailLink] = useState(`mailto:${EMAIL_ADDRESS}`);

  useEffect(() => {
    const update = () => setEmailLink(computeEmailLink());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return emailLink;
}

// 데스크톱에서는 브라우저별로 Gmail/Outlook 웹 작성 화면을, 모바일/터치
// 기기에서는 mailto:를 연다 — 새 창을 띄웠다가 기본 메일 앱이 없어 빈
// 화면만 뜨는 걸 피하기 위한 기존 사이트의 스마트 분기 로직을 그대로 이식.
export default function EmailLink({
  className,
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  const emailLink = useEmailLink();

  return (
    <a
      href={emailLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
