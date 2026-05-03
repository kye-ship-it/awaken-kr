import Image from "next/image";

const REVEAL_EARLY_BIRD_PAYMENT_URL = "https://www.payapp.kr/L/z4d9o3";

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
          나를 마주하는 3일
        </h2>

        {/* Date */}
        <p className="text-[14px] md:text-[16px] text-white/60 mb-6 md:mb-8">
          2026. 8. 8(금) – 8. 10(일) • 서울
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
            Reveal은 당신의 삶에 반복되는 패턴 — 자신, 타인, 상황에 대한
            태도와 믿음 — 을 탐색하는 3일간의 여정입니다. 체험과 대화를 통해
            자신만의 비전을 발견하고, 그 비전에 맞게 살아가는 첫걸음을
            내딛습니다.
          </p>
          <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed">
            소그룹 안에서 안전하게 자기 자신을 탐색하며, 1:1 세션을 통해
            개인화된 인사이트를 얻습니다.
          </p>
        </div>

        {/* Format Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {[
            { label: "Format", value: "3일 집중 과정" },
            { label: "Group", value: "소그룹 (4–6명)" },
            { label: "Includes", value: "그룹 세션 + 1:1 코칭" },
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
            <div>
              <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase block mb-3">
                EARLY BIRD
              </span>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white mb-2">
                Reveal 얼리버드 등록
              </h3>
              <p className="text-[13px] md:text-[14px] text-white/55 leading-relaxed">
                2026년 5월 31일까지 얼리버드 혜택이 적용됩니다.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-[13px] md:text-[14px] text-white/45 line-through mb-1">
                정가 145만원
              </p>
              <p className="text-[30px] md:text-[36px] font-semibold text-gold-light leading-none">
                95만원
              </p>
              <p className="text-[12px] md:text-[13px] text-white/45 mt-2">
                5/31까지
              </p>
            </div>
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
            href={REVEAL_EARLY_BIRD_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold text-black px-8 py-3 text-[15px] md:text-[16px] font-medium transition-opacity hover:opacity-90"
          >
            얼리버드 95만원 결제하기
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
