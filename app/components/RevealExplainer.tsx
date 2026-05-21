const benefits = [
  {
    label: "SELF-AWARENESS",
    title: "내가 반복하는 반응을 더 선명하게 보게 됩니다",
    description:
      "비슷한 상황에서 왜 늘 같은 감정이 올라오는지, 왜 말하고 나서 후회하는지, 왜 중요한 순간에 멈추는지 스스로 관찰할 수 있게 됩니다.",
  },
  {
    label: "RELATIONSHIPS",
    title: "관계에서 반복되는 갈등의 패턴을 알아차립니다",
    description:
      "가족, 연인, 동료와의 관계에서 내가 방어하거나 피하거나 증명하려는 순간을 발견하고, 이전과 다른 방식으로 대화할 가능성을 봅니다.",
  },
  {
    label: "DIRECTION",
    title: "막연한 변화 욕구가 더 구체적인 방향으로 정리됩니다",
    description:
      "‘이대로는 아닌 것 같다’는 감각을 넘어서, 내가 무엇을 원하고 어떤 선택을 시작해야 하는지 더 분명한 언어로 정리합니다.",
  },
];

const situations = [
  "겉으로는 괜찮은데 속으로는 같은 불안과 무기력이 반복되는 분",
  "관계에서 비슷한 갈등을 반복하지만 원인을 정확히 설명하기 어려운 분",
  "열심히 살고 있는데 내가 진짜 원하는 방향으로 가고 있는지 헷갈리는 분",
  "변하고 싶은 마음은 있는데 막상 행동하려 하면 자꾸 멈추거나 미루게 되는 분",
];

const outcomes = [
  "내 삶의 반복 패턴을 더 명확하게 설명할 수 있습니다.",
  "문제를 단순히 성격, 의지력, 환경 탓으로만 보지 않게 됩니다.",
  "관계와 선택 앞에서 자동반응 대신 새로운 선택지를 떠올릴 수 있습니다.",
  "지금까지 치르고 있던 감정적 대가를 보고, 앞으로의 방향을 다시 선택할 수 있습니다.",
];

const notThis = [
  "정답을 주입하는 강의",
  "억지로 감정을 끌어내는 훈련",
  "단기간에 인생이 완전히 바뀐다고 약속하는 프로그램",
];

const insteadThis = [
  "내 삶을 안전하게 들여다보는 체험형 과정",
  "소그룹 대화와 코칭을 통한 자기 발견",
  "반복되는 결과 뒤의 이유를 발견하고 새로운 선택을 준비하는 시간",
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
        <div className="max-w-[840px] mx-auto text-center mb-12 md:mb-16">
          <span className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-gold tracking-[0.2em] uppercase block mb-4">
            WHAT IS REVEAL
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight text-white mb-5 md:mb-6">
            Reveal은 어떤 프로그램인가요?
          </h2>
          <p className="text-[16px] md:text-[19px] text-white/70 leading-relaxed break-keep">
            Reveal은 나를 고치거나 바꾸라고 몰아붙이는 시간이 아닙니다.
            내 삶에서 반복되는 감정, 관계, 선택의 패턴을 안전하게 들여다보고,
            “왜 나는 비슷한 결과를 반복해왔을까?”라는 질문에 더 정직하게 가까워지는 3일간의 체험형 프로그램입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 items-stretch mb-8 md:mb-10">
          <div className="bg-grey-7 border border-gold/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-4">
                CORE PROMISE
              </p>
              <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight text-gold-light mb-5">
                이유를 알게 되면, 같은 방식으로만 살지 않아도 됩니다.
              </h3>
              <p className="text-[14px] md:text-[16px] text-white/65 leading-relaxed mb-5">
                사람은 변하고 싶어도 익숙한 방식으로 돌아갑니다. Reveal은 그 익숙한 방식이 어디서 반복되는지,
                그리고 그것이 내 삶에 어떤 대가를 만들고 있었는지 보게 합니다.
              </p>
              <p className="text-[14px] md:text-[16px] text-white/65 leading-relaxed">
                핵심 경험을 미리 설명으로 소비시키기보다, 참여자가 직접 발견하도록 설계되어 있습니다.
                이 페이지에서는 프로그램의 방향과 기대할 수 있는 변화를 중심으로 안내합니다.
              </p>
            </div>
            <a
              href="#cta-form"
              className="inline-flex self-start mt-8 rounded-full bg-chalk px-6 py-2.5 text-[14px] md:text-[15px] font-medium text-black transition-opacity hover:opacity-90"
            >
              내 상황에 Reveal이 맞는지 확인하기
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              FOR WHOM
            </p>
            <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight mb-5">
              이런 분께 특히 의미가 있습니다
            </h3>
            <ul className="grid grid-cols-1 gap-3 md:gap-4">
              {situations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] md:text-[15px] text-white/70 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              EXPERIENCE
            </p>
            <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight mb-5">
              어떤 방식으로 진행되나요?
            </h3>
            <p className="text-[14px] md:text-[15px] text-white/62 leading-relaxed mb-4">
              Reveal은 단순 강의보다 참여형 경험에 가깝습니다. 개인 성찰, 소그룹 대화, 코칭을 통해
              스스로의 삶을 더 깊이 바라보도록 안내합니다.
            </p>
            <p className="text-[14px] md:text-[15px] text-white/62 leading-relaxed">
              구체적인 세션의 흐름과 질문은 현장에서 직접 경험하는 것이 중요하기 때문에,
              이 페이지에서는 세부 진행을 모두 공개하기보다 참여자가 얻게 될 변화와 방향을 중심으로 설명합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="bg-grey-7 border border-grey-border rounded-2xl p-6 md:p-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              NOT THIS
            </p>
            <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight mb-5">
              Reveal은 이런 프로그램이 아닙니다
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {notThis.map((item) => (
                <li key={item} className="text-[14px] md:text-[15px] text-white/55 leading-relaxed">
                  — {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-grey-7 border border-gold/20 rounded-2xl p-6 md:p-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              INSTEAD
            </p>
            <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight mb-5">
              대신 이런 경험에 가깝습니다
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {insteadThis.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] md:text-[15px] text-white/72 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                WHAT YOU GET
              </p>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight">
                참여자가 기대할 수 있는 변화
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
