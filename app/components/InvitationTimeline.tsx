const timelineItems = [
  {
    day: "즉시 도착",
    emoji: "📩",
    title: "The Welcome",
    description: "어웨이큰으로의 초대",
  },
  {
    day: "D+1",
    emoji: "📘",
    title: "The Blueprint",
    description:
      "\u2018\u200B4일간 무엇을 하는가?\u2019 프로그램 상세 소개와 원리",
  },
  {
    day: "D+3",
    emoji: "🧠",
    title: "The Insight",
    description:
      "단순한 감정이 아닙니다. 뇌과학과 심리학으로 본 변화의 메커니즘",
  },
  {
    day: "D+5",
    emoji: "💡",
    title: "The Trivia",
    description: "우리가 몰랐던 마음의 흥미로운 뒷이야기",
  },
  {
    day: "D+7",
    emoji: "🗣️",
    title: "The Real Voice",
    description:
      "\u2018저도 의심했습니다.\u2019 수료생들이 털어놓는 가감 없는 인터뷰",
  },
  {
    day: "D+9",
    emoji: "📮",
    title: "Why Awaken?",
    description:
      "왜 결국 어웨이큰이어야 하는가? 당신이 합류해야 할 진짜 이유",
  },
];

export default function InvitationTimeline() {
  return (
    <section
      id="awaken"
      className="relative px-7 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(255,196,35,0.05) 30%, rgba(255,196,35,0.05) 70%, transparent 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Awaken Program Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-gold tracking-[0.2em] uppercase block mb-3">
            AWAKEN PROGRAM
          </span>
          <p className="text-[14px] md:text-[16px] text-white/60">
            4기 • 2026. 11. 5(수) – 11. 8(토)
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-white/50 mb-5 md:mb-6 whitespace-pre-line">
            {"그래서 준비했습니다.\n한 번에 쏟아지는 정보가 아닌,\n마음의 준비를 마칠 때까지"}
          </p>
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-snug text-white mb-4 md:mb-5">
            당신의 속도에 맞춰 도착하는
            <br />
            <span className="font-semibold">
              &lsquo;안내 코스&rsquo;
            </span>
            입니다.
          </h2>
          <p className="text-[14px] md:text-[17px] lg:text-[20px] leading-relaxed text-gold-light/50">
            코스가 시작되면, 오늘부터 이 순서대로
            <br className="md:hidden" />
            {" "}&lsquo;초대장&rsquo;이 도착합니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div
            className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--color-gold) 0px, var(--color-gold) 4px, transparent 4px, transparent 12px)",
            }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex gap-4 md:gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-[47px] md:w-[55px] flex flex-col items-center">
                  <div className="w-[11px] h-[11px] rounded-full bg-gold border-2 border-gold shadow-[0_0_8px_rgba(201,189,138,0.4)]" />
                </div>

                {/* Content */}
                <div className="flex-1 -mt-1">
                  {/* Day label */}
                  <span className="font-[family-name:var(--font-dm-mono)] text-[13px] md:text-[15.4px] text-grey-light-8 uppercase tracking-[0.15em] block mb-3">
                    {item.day}
                  </span>

                  {/* Card */}
                  <div className="border border-grey-border bg-grey-7 p-5 md:p-6">
                    {/* Emoji */}
                    <span className="text-[32px] md:text-[38px] block mb-3">
                      {item.emoji}
                    </span>

                    {/* English title */}
                    <h3 className="font-[family-name:var(--font-dm-serif)] text-[18px] md:text-[22px] text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Korean description */}
                    <p className="text-[14px] md:text-[16.5px] leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
