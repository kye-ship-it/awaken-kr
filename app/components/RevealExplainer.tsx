const benefits = [
  {
    label: "내 반응을 이해합니다",
    title: "왜 같은 감정에 반복해서 흔들리는지 보입니다",
    description:
      "불안, 회피, 분노, 무기력처럼 익숙한 반응을 단순한 성격 문제로 넘기지 않고, 그 반응이 어떤 믿음과 경험에서 나오는지 알아차립니다.",
  },
  {
    label: "관계 패턴을 봅니다",
    title: "비슷한 사람·비슷한 갈등이 반복되는 이유를 찾습니다",
    description:
      "가족, 연인, 동료와의 관계에서 내가 반복하는 방어, 기대, 실망의 방식을 살펴보고 더 자유로운 선택지를 발견합니다.",
  },
  {
    label: "선택의 기준을 회복합니다",
    title: "남의 기준이 아니라 내 비전에 맞게 선택하게 됩니다",
    description:
      "해야 할 일, 기대받는 역할, 익숙한 성공 기준에 끌려가기보다 내가 정말 원하는 삶의 방향을 언어화하고 다음 행동을 정리합니다.",
  },
];

const outcomes = [
  "내가 반복하는 감정·관계·선택 패턴을 더 선명하게 설명할 수 있습니다.",
  "문제가 생겼을 때 남 탓이나 자책으로만 빠지지 않고, 내 반응을 관찰할 수 있습니다.",
  "막연한 변화 욕구를 구체적인 비전과 다음 행동으로 바꿉니다.",
  "혼자 생각만 할 때는 보이지 않던 blind spot을 소그룹과 코칭 안에서 발견합니다.",
];

export default function RevealExplainer() {
  return (
    <section
      id="what-is-reveal"
      className="px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201, 189, 138, 0.13) 0%, rgba(201, 189, 138, 0.04) 45%, transparent 78%), #000",
      }}
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[820px] mx-auto text-center mb-12 md:mb-16">
          <span className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-gold tracking-[0.2em] uppercase block mb-4">
            WHAT IS REVEAL
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight text-white mb-5 md:mb-6">
            Reveal은 어떤 프로그램인가요?
          </h2>
          <p className="text-[16px] md:text-[19px] text-white/70 leading-relaxed break-keep">
            Reveal은 “나를 바꿔야 한다”고 밀어붙이는 프로그램이 아닙니다.
            내 삶에서 반복되는 반응과 관계 패턴을 발견하고, 그 아래에 있던 믿음과 태도를 다시 바라보며,
            내가 원하는 방향으로 삶을 정렬하도록 돕는 3일간의 체험형 프로그램입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 items-stretch mb-8 md:mb-10">
          <div className="bg-grey-7 border border-gold/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-4">
                CORE PROMISE
              </p>
              <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight text-gold-light mb-5">
                내가 왜 이렇게 살아왔는지 보이면, 앞으로 어떻게 살아갈지도 선택할 수 있습니다.
              </h3>
              <p className="text-[14px] md:text-[16px] text-white/65 leading-relaxed">
                많은 변화가 실패하는 이유는 의지가 부족해서가 아니라, 내가 어떤 패턴 안에서 움직이는지 모르기 때문입니다.
                Reveal은 그 패턴을 안전한 환경에서 드러내고, 새로운 선택을 가능하게 만드는 데 초점을 둡니다.
              </p>
            </div>
            <a
              href="#cta-form"
              className="inline-flex self-start mt-8 rounded-full bg-chalk px-6 py-2.5 text-[14px] md:text-[15px] font-medium text-black transition-opacity hover:opacity-90"
            >
              내가 얻을 수 있는 변화 상담하기
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="bg-grey-7 border border-grey-border rounded-2xl p-5 md:p-6"
              >
                <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.13em] uppercase mb-2">
                  {benefit.label}
                </p>
                <h3 className="text-[18px] md:text-[21px] font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                AFTER 3 DAYS
              </p>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight">
                참여 후 기대할 수 있는 것
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 md:gap-4">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-[14px] md:text-[15px] text-white/72 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
