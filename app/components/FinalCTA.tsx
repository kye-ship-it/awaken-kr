export default function FinalCTA() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-[28px] md:text-[34px] lg:text-[40px] text-white mb-3 md:mb-4">
            당신의 다음 한 걸음
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 leading-relaxed">
            지금 바로 시작하지 않아도 괜찮습니다. 먼저 알아보는 것부터.
          </p>
        </div>

        {/* Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Reveal Pathway */}
          <div className="bg-grey-7 border border-grey-border rounded-2xl p-6 md:p-8 flex flex-col">
            <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-white/40 tracking-[0.15em] uppercase block mb-4">
              3-DAY PROGRAM
            </span>
            <h3 className="font-[family-name:var(--font-dm-serif)] text-[24px] md:text-[28px] text-white mb-2">
              Reveal
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/60 mb-6 flex-1">
              나를 마주하는 3일
            </p>
            <a
              href="#cta-form"
              className="text-[14px] md:text-[15px] text-gold hover:text-gold-light transition-colors"
            >
              관심 등록 →
            </a>
          </div>

          {/* Awaken Pathway */}
          <div className="bg-grey-7 border border-gold/30 rounded-2xl p-6 md:p-8 flex flex-col shadow-[0_0_20px_rgba(201,189,138,0.06)]">
            <span className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-white/40 tracking-[0.15em] uppercase block mb-4">
              4-DAY PROGRAM
            </span>
            <h3 className="font-[family-name:var(--font-dm-serif)] text-[24px] md:text-[28px] text-white mb-2">
              Awaken
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/60 mb-6 flex-1">
              한계를 넘어서는 4일
            </p>
            <a
              href="#cta-form"
              className="text-[14px] md:text-[15px] text-gold hover:text-gold-light transition-colors"
            >
              안내 코스 시작하기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
