export default function ProgramOverview() {
  return (
    <section
      id="programs"
      className="px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-gold tracking-[0.2em] uppercase block mb-3">
            PROGRAMS
          </span>
          <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-semibold leading-tight text-white mb-3 md:mb-4">
            당신의 변화를 위한 두 가지 여정
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 leading-relaxed">
            GAP Community Korea가 준비한 두 프로그램 중, 지금 나에게 맞는
            여정을 선택하세요.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Reveal Card */}
          <div className="bg-grey-7 border border-grey-border rounded-2xl p-6 md:p-8 flex flex-col">
            <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] md:text-[32px] text-white mb-2">
              Reveal
            </h3>
            <p className="text-[17px] md:text-[19px] text-gold-light font-medium mb-4">
              나를 마주하는 3일
            </p>
            <span className="inline-flex self-start items-center rounded-full bg-white/[0.06] border border-grey-border px-4 py-1.5 text-[12px] md:text-[13px] text-white/70 mb-5">
              2026. 8. 8 – 10 • 서울
            </span>
            <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-6">
              삶 속 반복되는 패턴을 탐색하고, 나만의 비전을 발견하는 3일
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "3일 집중 프로그램",
                "소그룹 대화 (4–6명)",
                "1:1 코칭 세션",
                "자기 인식과 패턴 발견",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#reveal"
              className="inline-flex items-center justify-center rounded-full border border-gold text-gold px-6 py-2.5 text-[14px] md:text-[15px] font-medium transition-opacity hover:opacity-80"
            >
              Reveal 알아보기
            </a>
          </div>

          {/* Awaken Card */}
          <div className="bg-grey-7 border border-grey-border rounded-2xl p-6 md:p-8 flex flex-col">
            <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] md:text-[32px] text-white mb-2">
              Awaken
            </h3>
            <p className="text-[17px] md:text-[19px] text-gold-light font-medium mb-4">
              한계를 넘어서는 4일
            </p>
            <span className="inline-flex self-start items-center rounded-full bg-white/[0.06] border border-grey-border px-4 py-1.5 text-[12px] md:text-[13px] text-white/70 mb-5">
              4기 • 2026. 11. 5 – 8 • 서울
            </span>
            <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-6">
              보이지 않던 믿음과 한계를 넘어, 새로운 미래를 여는 4일
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "4일간 깊은 몰입 (오전 10시 ~ 오후 10시)",
                "세계적 마스터 트레이너 직접 진행",
                "인터랙티브 강의 + 소그룹 워크샵",
                "실질적 삶의 변화 경험",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-white/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#awaken"
              className="inline-flex items-center justify-center rounded-full bg-gold text-black px-6 py-2.5 text-[14px] md:text-[15px] font-medium transition-opacity hover:opacity-90"
            >
              Awaken 알아보기
            </a>
          </div>
        </div>

        {/* Bottom link */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href="#faq"
            className="text-[14px] md:text-[15px] text-white/50 hover:text-white/70 transition-colors"
          >
            어떤 프로그램이 나에게 맞을까? →
          </a>
        </div>
      </div>
    </section>
  );
}
