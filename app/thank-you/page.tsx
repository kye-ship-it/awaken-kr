"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    // Fire Purchase event when fbq is ready
    const check = setInterval(() => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Purchase", { value: 0.0, currency: "KRW" });
        clearInterval(check);
      }
    }, 200);

    // Auto-redirect countdown
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => {
      clearInterval(check);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[48px] mb-6">✉️</span>
      <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-white leading-snug mb-4">
        신청이 완료되었습니다.
      </h1>
      <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed whitespace-pre-line">
        {"제출해주신 연락처와 이메일로\n안내가 나갈 예정입니다."}
      </p>
      <p className="text-[20px] md:text-[22px] font-medium text-gold-light mt-6">
        감사합니다.
      </p>
      <p className="text-[13px] text-white/30 mt-10">
        {seconds}초 후 홈으로 이동합니다.
      </p>
    </div>
  );
}
