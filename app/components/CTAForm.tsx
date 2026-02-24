"use client";

import { useState } from "react";


function generateId(name: string, phone: string): string {
  const input = `${name}:${phone}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash).toString(36);
}

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    referrer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const id = generateId(formData.name, formData.phone);
      const timestamp = new Date().toISOString();
      await fetch("https://hooks.zapier.com/hooks/catch/14332708/ug158id/", {
        method: "POST",
        body: JSON.stringify({ ...formData, id, timestamp }),
      });
      window.location.href = "/thank-you";
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-form" className="px-6 md:px-8 lg:px-16 pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-32 flex flex-col items-center">
      <div className="max-w-[770px] mx-auto text-center mb-10 md:mb-14">
        <p className="text-[22px] md:text-[25px] lg:text-[28px] text-white/50 mb-2 md:mb-3">
          궁금함은 있지만, 아직 확신이 없다면
        </p>
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight mb-4 md:mb-5">
          &lsquo;<span className="font-semibold">안내 코스</span>&rsquo;를
          먼저 받아보세요.
        </h2>
        <p className="text-[17px] md:text-[19px] lg:text-[21px] font-semibold text-gold-light mb-4 md:mb-5">
          프라이빗한 안내 코스를 통해 &lsquo;Awaken&rsquo;의 제한된
          좌석에 당신을 정중히 초대합니다.
        </p>
        <p className="text-[14px] md:text-[15px] lg:text-[17px] text-white/50 leading-relaxed whitespace-pre-line">
          {`Awaken은 공개적으로 회원을 모집하지 않는 초대 기반(Invitation-only) 프로그램입니다.\n또한 비영리 목적의 프로그램입니다. (추천인이 있는 경우, 우선 배정 혜택이 적용됩니다.)`}
        </p>
      </div>

      <div className="max-w-[646px] mx-auto bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8 lg:p-10">
        <h3 className="text-[21px] md:text-[23px] lg:text-[25px] font-semibold text-white text-center mb-6 md:mb-8">
          안내 코스 신청하기
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FormField label="이름" name="name" placeholder="김한국" value={formData.name} onChange={handleChange("name")} />
          <FormField
            label="연락처 (자료 발송 및 안내용)"
            name="phone"
            placeholder="01012345678"
            type="tel"
            value={formData.phone}
            onChange={handleChange("phone")}
          />
          <FormField
            label="이메일 (상세 안내 수신용)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          <div>
            <FormField
              label="추천해주신 분의 이름(선택)"
              name="referrer"
              placeholder="홍길동"
              value={formData.referrer}
              onChange={handleChange("referrer")}
            />
            <p className="flex items-center gap-1 mt-1.5 text-[12px] md:text-[13px] text-grey-light-8">
              <span className="text-grey-light-8">ⓘ</span>
              추천인의 성함을 정확히 기재해 주세요. 추천인이 없을 경우
              &lsquo;없음&rsquo;으로 기재
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto bg-chalk text-black rounded-full px-5 py-2.5 font-medium text-[15px] md:text-[16px] mt-2 hover:bg-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "전송 중..." : "안내 코스(무료) 시작하기"}
          </button>

          {submitStatus === "error" && (
            <p className="text-center text-red-400 text-[14px] mt-2">
              전송에 실패했습니다. 다시 시도해 주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-medium text-[13px] md:text-[14px] text-grey-light-9">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-grey-dark rounded-xl px-3 py-2 text-[15px] md:text-[16px] text-white placeholder:text-chalk/30 outline-none border border-transparent focus:border-grey-border transition-colors"
      />
    </div>
  );
}
