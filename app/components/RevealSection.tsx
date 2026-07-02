import Image from "next/image";

const REVEAL_BANK_ACCOUNT = "토스뱅크 1002-4710-6716 (펀더멘탈)";

const REVEAL_PRICE_TIERS = [
  { label: "현재 등록가", price: "145만원", deadline: "8/5까지", status: "현재 적용" },
];

const REVEAL_STEPS = [
  {
    label: "DISCOVER",
    title: "반복 패턴 발견",
    description:
      "관계, 감정, 선택에서 내가 반복해서 보이는 반응을 구체적으로 알아차립니다.",
  },
  {
    label: "REFRAME",
    title: "믿음과 태도 점검",
    description:
      "그 반응 아래에 있던 무의식 속 신념, 두려움, 자기 해석을 새롭게 바라봅니다.",
  },
  {
    label: "ALIGN",
    title: "비전과 행동 정렬",
    description:
      "내가 진짜 원하는 삶의 방향을 언어화하고, 그 방향에 맞는 다음 행동을 정리합니다.",
  },
];

const REVEAL_TRAINER = {
  name: "Nathan Neighbour",
  role: "GAP Community Trainer",
  summary:
    "Nathan Neighbour는 영성 개발과 인격 변화를 전문으로 하는 GAP Community 트레이너입니다. 예술, 커뮤니티, 리더십, 신학을 넘나드는 배경을 바탕으로 사람들이 자신의 고유함을 발견하고, 비전과 헌신을 다시 정렬하도록 돕습니다.",
  highlights: [
    "Certified transformational trainer & coach",
    "Author of Enhanced",
    "Founder of Humanity Church",
  ],
};

export default function RevealSection() {
  return (
    <section
      id="reveal"
      className="px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-[770px] mx-auto">
        {/* Eyebrow */}
        <span className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-gold tracking-[0.2em] uppercase block mb-4">
          REVEAL PROGRAM
        </span>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-dm-serif)] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-3">
          Reveal은 삶의 반복 패턴을 발견하고 다시 정렬하는 3일입니다
        </h2>

        {/* Date */}
        <p className="text-[14px] md:text-[16px] text-white/60 mb-6 md:mb-8">
          2026. 8. 7(금) – 8. 9(일) • 서울
        </p>

        {/* Gold gradient divider */}
        <div
          className="h-px w-full mb-8 md:mb-10"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold) 0%, transparent 100%)",
          }}
        />

        {/* Description */}
        <div className="flex flex-col gap-4 md:gap-5 mb-10 md:mb-12">
          <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed">
            Reveal은 강의를 듣고 끝나는 세미나가 아니라, 내가 실제 삶에서 왜
            같은 감정에 흔들리고, 비슷한 관계 문제를 반복하고, 중요한 순간에
            같은 선택을 하는지 직접 들여다보는 프로그램입니다.
          </p>
          <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed">
            3일 동안 체험형 세션, 소그룹 대화, 1:1 코칭을 통해 반복 패턴 아래의
            믿음과 태도를 발견하고, 내가 원하는 삶의 방향과 다음 행동을 다시
            정렬합니다.
          </p>
        </div>

        {/* What Reveal Does */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-5 md:mb-6">
            3일 동안 다루는 핵심
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {REVEAL_STEPS.map((step) => (
              <div
                key={step.label}
                className="bg-grey-7 border border-grey-border rounded-xl p-4 md:p-5"
              >
                <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-2">
                  {step.label}
                </span>
                <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Format Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {[
            { label: "Format", value: "체험형 3일 집중 과정" },
            { label: "Group", value: "소그룹 대화 (4–6명)" },
            { label: "Includes", value: "세션 + 1:1 코칭" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-grey-7 border border-grey-border rounded-xl p-4 md:p-5"
            >
              <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-2">
                {item.label}
              </span>
              <p className="text-[14px] md:text-[15px] text-white/90">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-grey-7 border border-gold/30 rounded-2xl p-5 md:p-7 mb-8 md:mb-10 shadow-[0_0_24px_rgba(201,189,138,0.06)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8 mb-6 md:mb-7">
            <div>
              <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-3">
                REGISTRATION PRICE
              </span>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white mb-2">
                Reveal 등록가 안내
              </h3>
              <p className="text-[13px] md:text-[14px] text-white/55 leading-relaxed">
                신청서를 제출하면 8월 5일까지 적용되는 등록가가 반영된 개인별 PayApp 결제 링크를 문자로 바로 보내드립니다.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-[13px] md:text-[14px] text-white/45 mb-1">
                현재 등록가 · 8/5까지
              </p>
              <p className="text-[30px] md:text-[36px] font-semibold text-gold-light leading-none">
                145만원
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {REVEAL_PRICE_TIERS.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl border px-4 py-3 ${
                  tier.status === "현재 적용"
                    ? "border-gold/40 bg-gold/10"
                    : "border-white/10 bg-black/20"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-[family-name:var(--font-dm-mono)] text-[11px] text-gold tracking-[0.12em] uppercase">
                    {tier.label}
                  </span>
                  <span className="text-[11px] text-white/40">{tier.status}</span>
                </div>
                <p className="text-[18px] md:text-[20px] font-semibold text-white">
                  {tier.price}
                </p>
                <p className="text-[12px] md:text-[13px] text-white/45 mt-1">
                  {tier.deadline}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-white/10">
            <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-2">
              BANK TRANSFER
            </span>
            <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed">
              계좌이체: {REVEAL_BANK_ACCOUNT}
            </p>
            <p className="text-[12px] md:text-[13px] text-white/45 mt-1">
              입금 후 문의하기를 통해 성함과 연락처를 남겨주세요.
            </p>
          </div>
        </div>

        {/* Reveal Trainer */}
        <div className="bg-grey-7 border border-grey-border rounded-2xl p-5 md:p-7 mb-10 md:mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 md:gap-8 items-center">
            <div className="relative mx-auto md:mx-0 w-[170px] h-[220px] md:w-[190px] md:h-[250px] border-[5px] border-white overflow-hidden bg-black">
              <Image
                src="/images/nathan-neighbour.jpg"
                alt="Nathan Neighbour"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 190px, 170px"
              />
            </div>

            <div>
              <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-3">
                TRAINER
              </span>
              <p className="text-[13px] md:text-[14px] text-white/45 mb-1">
                {REVEAL_TRAINER.role}
              </p>
              <h3 className="font-[family-name:var(--font-prata)] text-[26px] md:text-[32px] text-white mb-4">
                {REVEAL_TRAINER.name}
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-5">
                {REVEAL_TRAINER.summary}
              </p>
              <ul className="flex flex-col gap-2">
                {REVEAL_TRAINER.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[12px] md:text-[13px] text-white/65"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <a
            href="#cta-form"
            className="inline-flex items-center justify-center rounded-full bg-gold text-black px-8 py-3 text-[15px] md:text-[16px] font-medium transition-opacity hover:opacity-90"
          >
            신청서 작성하고 결제 링크 받기
          </a>
          <a
            href="#cta-form"
            className="inline-flex items-center justify-center rounded-full border border-gold text-gold px-8 py-3 text-[15px] md:text-[16px] font-medium transition-opacity hover:opacity-80"
          >
            Reveal 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
