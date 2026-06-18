"use client";

import { useState } from "react";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/11286016/43zeoru/";
const CONSENT_VERSION = "reveal-lead-consent-2026-06-16";

function generateId(name: string, phone: string): string {
  const input = `${name}:${phone}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash).toString(36);
}

const programOptions = [
  { value: "reveal", label: "Reveal" },
];

function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

function getTrackingParams() {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
  };
}

export default function CTAForm() {
  const [formData, setFormData] = useState({
    program: "reveal",
    name: "",
    phone: "",
    email: "",
    referrer: "",
    privacyConsent: false,
    marketingConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleChange = (field: "name" | "phone" | "email" | "referrer") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleConsentChange = (field: "privacyConsent" | "marketingConsent") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.checked }));
  };

  const handleProgramSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, program: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = normalizePhone(formData.phone);
    const email = formData.email.trim().toLowerCase();
    const referrer = formData.referrer.trim();

    if (!name || !phone || !email) {
      setFormError("이름, 연락처, 이메일을 입력해 주세요.");
      return;
    }

    if (!formData.privacyConsent) {
      setFormError("개인정보 수집 및 이용 동의가 필요합니다.");
      return;
    }

    if (
      !formData.marketingConsent &&
      !window.confirm(
        "마케팅 정보 수신에 동의하지 않으면 Reveal 상세 안내 코스, 모집 일정, 혜택 및 후속 안내를 이메일/SMS로 받을 수 없습니다.\n\n그래도 신청하시겠습니까?"
      )
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFormError("");
    try {
      const timestamp = new Date().toISOString();
      const payload = {
        lead_id: generateId(name, phone),
        submitted_at: timestamp,
        program: formData.program,
        name,
        phone,
        email,
        referrer,
        source: "reveal-lp",
        ...getTrackingParams(),
        privacy_consent: formData.privacyConsent,
        marketing_consent: formData.marketingConsent,
        consent_timestamp: timestamp,
        consent_version: CONSENT_VERSION,
      };

      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
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
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight mb-3 md:mb-4">
          &lsquo;<span className="font-semibold">안내 코스</span>&rsquo;를
          먼저 받아보세요.
        </h2>
        <p className="text-[14px] md:text-[15px] text-white/50 mb-4 md:mb-5">
          2026년 8월 Reveal 프로그램의 상세 안내를 보내드립니다.
        </p>
        <p className="text-[17px] md:text-[19px] lg:text-[21px] font-semibold text-gold-light mb-4 md:mb-5">
          프라이빗한 안내 코스를 통해 Reveal에 당신을 정중히
          초대합니다.
        </p>
        <p className="text-[14px] md:text-[15px] lg:text-[17px] text-white/50 leading-relaxed whitespace-pre-line">
          {`GAP의 프로그램은 공개적으로 회원을 모집하지 않는 초대 기반(Invitation-only) 프로그램입니다.\n또한 비영리 목적의 프로그램입니다. (추천인이 있는 경우, 우선 배정 혜택이 적용됩니다.)`}
        </p>
      </div>

      <div className="max-w-[646px] mx-auto bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8 lg:p-10">
        <h3 className="text-[21px] md:text-[23px] lg:text-[25px] font-semibold text-white text-center mb-6 md:mb-8">
          관심 등록 및 안내 신청
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Program Interest Selector */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-[13px] md:text-[14px] text-grey-light-9">
              관심 프로그램
            </label>
            <div className="flex flex-wrap gap-2">
              {programOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleProgramSelect(opt.value)}
                  className={`rounded-full px-4 py-2 text-[13px] md:text-[14px] border transition-colors cursor-pointer ${
                    formData.program === opt.value
                      ? "border-gold bg-gold/15 text-gold"
                      : "border-grey-border bg-grey-dark text-white/60 hover:border-white/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="text-[12px] text-grey-light-8">
              현재 공개 안내는 Reveal 중심으로 진행됩니다
            </p>
          </div>

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

          <div className="rounded-xl border border-gold/35 bg-gold/10 px-4 py-3 text-[13px] md:text-[14px] text-gold-light leading-relaxed">
            Reveal 상세 안내 코스는 이메일과 SMS로 순차 발송됩니다.
            아래 [마케팅 정보 수신 동의]를 체크해야 안내 자료, 모집 일정, 혜택 및 후속 안내를 정상적으로 받아보실 수 있습니다.
          </div>

          <div className="flex flex-col gap-3">
            <ConsentCheckbox
              id="privacy-consent"
              checked={formData.privacyConsent}
              onChange={handleConsentChange("privacyConsent")}
              label="[필수] Reveal 안내 신청을 위한 개인정보 수집 및 이용에 동의합니다."
              detail="수집 항목: 이름, 연락처, 이메일, 추천인. 이용 목적: Reveal 안내 및 신청 관리. 보유 기간: 프로그램 종료 후 1년 또는 동의 철회 시까지. 동의를 거부할 수 있으나, 미동의 시 안내 신청이 제한됩니다."
            />
            <ConsentCheckbox
              id="marketing-consent"
              checked={formData.marketingConsent}
              onChange={handleConsentChange("marketingConsent")}
              label="[선택] 마케팅 정보 수신 동의: Reveal 상세 안내 코스, 모집 일정, 혜택 및 후속 안내를 이메일/SMS로 받는 데 동의합니다."
              detail="수신 항목: Reveal 안내 코스, 프로그램 일정, 혜택, 후속 안내, 관련 커뮤니티 소식. 수신 방법: 이메일, 문자메시지. 보유 기간: 동의 철회 시까지. 동의하지 않아도 기본 신청은 가능하지만, Reveal 상세 안내 코스와 후속 안내는 이메일/SMS로 발송되지 않습니다."
              badge="안내 코스 수신에 필요"
              note="동의하지 않아도 신청은 가능하지만, Reveal 상세 안내 코스와 후속 안내는 이메일/SMS로 발송되지 않습니다."
            />
          </div>

          {formError && (
            <p className="text-center text-red-400 text-[14px]">
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto bg-chalk text-black rounded-full px-5 py-2.5 font-medium text-[15px] md:text-[16px] mt-2 hover:bg-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "전송 중..." : "Reveal 안내 코스(무료) 시작하기"}
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

function ConsentCheckbox({
  id,
  checked,
  onChange,
  label,
  detail,
  badge,
  note,
}: {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  detail: string;
  badge?: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-grey-border bg-grey-dark/50 px-3 py-3">
      <label htmlFor={id} className="flex items-start gap-3 text-[13px] md:text-[14px] text-grey-light-9 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
        />
        <span className="flex flex-col gap-1 leading-relaxed">
          <span>{label}</span>
          {badge && (
            <span className="w-fit rounded-full border border-gold/35 bg-gold/10 px-2 py-0.5 text-[11px] font-medium text-gold-light">
              {badge}
            </span>
          )}
        </span>
      </label>
      {note && (
        <p className="ml-7 mt-2 text-[12px] md:text-[13px] text-gold-light leading-relaxed">
          {note}
        </p>
      )}
      <details className="ml-7 mt-2 text-[12px] md:text-[13px] text-grey-light-8">
        <summary className="cursor-pointer text-white/45 hover:text-white/65">
          자세히 보기
        </summary>
        <p className="mt-2 leading-relaxed">{detail}</p>
      </details>
    </div>
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
