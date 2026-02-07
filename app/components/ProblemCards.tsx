const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
    title: "반복되는 패턴",
    description:
      '"왜 나는 항상 비슷한 문제로 넘어지고, 비슷한 사람에게 상처받을까?"',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21" />
        <path d="M18 15l-2-2" />
        <path d="M15 18l-2-2" />
      </svg>
    ),
    title: "풀리지 않는 관계",
    description:
      "가족, 연인, 동료와의 대화가 겉돌거나 사랑하면서도 서로를 찌르고 있을 때.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "설명할 수 없는 공허함",
    description:
      "겉으로는 괜찮아 보이지만, 속으로는 이유 모를 불안과 우울감을 느낄 때.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
    title: "방향 상실",
    description:
      "열심히 살고는 있는데, 내가 진짜 원하는 게 무엇인지 모른 채 달려만 갈 때.",
  },
];

export default function ProblemCards() {
  return (
    <section
      className="px-5 md:px-8 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-20 md:pb-28 lg:pb-32"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 70% -10%, rgba(124, 87, 34, 0.25) 0%, rgba(73, 54, 28, 0.12) 50%, transparent 80%), #000",
      }}
    >
      <div className="max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative border border-grey-border bg-grey-7 flex flex-col items-center justify-center gap-[30px] px-6 py-10 md:px-8 md:py-12 lg:py-14 text-center min-h-[200px] md:min-h-[227px]"
            >
              {/* Icon in circle */}
              <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[59px] md:h-[59px] rounded-full border border-grey-border text-grey-light-8">
                {card.icon}
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3 className="text-[18px] md:text-[20px] lg:text-[21px] font-semibold text-gold tracking-[-0.3px]">
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[15px] font-normal text-grey-52 leading-[1.35]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
