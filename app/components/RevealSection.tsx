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

        {/* Trainer notice */}
        <div className="bg-grey-7 border border-grey-border rounded-xl p-5 md:p-6 mb-10 md:mb-12">
          <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed">
            트레이너는 추후 공개됩니다. 관심 등록을 하시면 가장 먼저
            안내받으실 수 있습니다.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#cta-form"
            className="inline-flex items-center justify-center rounded-full border border-gold text-gold px-8 py-3 text-[15px] md:text-[16px] font-medium transition-opacity hover:opacity-80"
          >
            Reveal 관심 등록하기
          </a>
        </div>
      </div>
    </section>
  );
}
