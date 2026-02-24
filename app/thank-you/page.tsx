"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

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
