const hiddenDrivers = [
  {
    name: "Being Right",
    desire: "내가 옳다는 것을 지키고 싶을 때",
    cost: "새로운 가능성보다 익숙한 자기 서사를 반복하게 됩니다.",
  },
  {
    name: "Being Comfortable",
    desire: "불편함과 고통을 피하고 싶을 때",
    cost: "진짜 원하는 변화 앞에서 계속 미루거나 멈추게 됩니다.",
  },
  {
    name: "Being in Control",
    desire: "불확실한 상황을 통제하고 싶을 때",
    cost: "관계와 선택에서 열린 대화보다 안전한 거리두기를 택하게 됩니다.",
  },
  {
    name: "Looking Good",
    desire: "무능하거나 부족해 보이고 싶지 않을 때",
    cost: "진짜 마음을 말하기보다 괜찮은 척, 아는 척, 강한 척하게 됩니다.",
  },
];

const revealProcess = [
  {
    step: "01",
    title: "결과를 직시합니다",
    description:
      "내가 원한다고 말한 것과 실제 삶에 나타난 결과 사이의 차이를 봅니다. 결과는 비난이 아니라, 나의 진짜 의도를 보여주는 거울입니다.",
  },
  {
    step: "02",
    title: "숨은 의도를 발견합니다",
    description:
      "표면 의도 아래에서 나를 보호하던 의도를 찾습니다. 옳고 싶음, 편하고 싶음, 통제하고 싶음, 좋아 보이고 싶음이 어떻게 작동하는지 알아차립니다.",
  },
  {
    step: "03",
    title: "대가를 계산합니다",
    description:
      "그 숨은 의도를 지키기 위해 내가 치르고 있던 대가를 봅니다. 고립, 후회, 정체, 반복되는 갈등을 계속 선택할 것인지 묻습니다.",
  },
  {
    step: "04",
    title: "다른 선택이 가능해집니다",
    description:
      "문제의 원인을 의지력 부족으로 몰아가지 않고, 내가 무엇을 선택해왔는지 보게 됩니다. 보이면 선택할 수 있고, 선택하면 방향이 바뀝니다.",
  },
];

const outcomes = [
  "내가 왜 같은 문제 앞에서 멈추는지 더 정확히 이해합니다.",
  "표면적으로 원하는 것과 실제로 선택해온 것 사이의 간극을 봅니다.",
  "반복되는 관계 갈등과 감정 반응을 자기비난이 아니라 관찰의 대상으로 다룰 수 있습니다.",
  "변화를 막던 숨은 이득과 그 대가를 보고, 계속 지불할지 새롭게 선택할지 결정합니다.",
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
            Reveal은 “어떻게 하면 바뀔 수 있을까?”보다 먼저,
            “나는 왜 지금까지 같은 결과를 반복해왔을까?”를 정직하게 보는 프로그램입니다.
            내가 말로 원하는 것과 실제 삶에 나타난 결과 사이의 간극을 보고,
            그 아래에 있던 숨은 의도를 발견하도록 돕습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 items-stretch mb-8 md:mb-10">
          <div className="bg-grey-7 border border-gold/25 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-4">
                CORE FRAMEWORK
              </p>
              <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight text-gold-light mb-5">
                결과는 거짓말하지 않습니다. 결과는 내 의도를 보여주는 거울입니다.
              </h3>
              <p className="text-[14px] md:text-[16px] text-white/65 leading-relaxed mb-5">
                GAP의 프레임워크는 결과를 단순한 운이나 환경 탓으로 보지 않습니다.
                내가 얻고 있는 결과 안에는, 내가 의식하지 못한 의도와 선택이 드러납니다.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="font-[family-name:var(--font-dm-mono)] text-[12px] md:text-[13px] text-white/45 tracking-[0.12em] uppercase mb-2">
                  R = I × M
                </p>
                <p className="text-[15px] md:text-[17px] text-white/82 leading-relaxed">
                  결과(Result)는 의도(Intention)와 방법(Method)의 곱입니다.
                  방법을 더 찾기 전에, 먼저 내 진짜 의도를 봅니다.
                </p>
              </div>
            </div>
            <a
              href="#cta-form"
              className="inline-flex self-start mt-8 rounded-full bg-chalk px-6 py-2.5 text-[14px] md:text-[15px] font-medium text-black transition-opacity hover:opacity-90"
            >
              내 상황에 Reveal이 맞는지 확인하기
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="bg-grey-7 border border-grey-border rounded-2xl p-5 md:p-6">
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.13em] uppercase mb-2">
                SURFACE VS HIDDEN INTENTION
              </p>
              <h3 className="text-[18px] md:text-[21px] font-semibold text-white mb-2">
                원한다고 말하는 것과 실제로 선택하는 것이 다를 수 있습니다
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                표면적으로는 관계 회복, 성장, 변화, 도전을 원한다고 말하지만,
                내면에서는 거절당하지 않기, 틀리지 않기, 통제권을 잃지 않기 같은 숨은 의도가 더 강하게 작동할 수 있습니다.
              </p>
            </div>

            <div className="bg-grey-7 border border-grey-border rounded-2xl p-5 md:p-6">
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.13em] uppercase mb-2">
                DRIFT
              </p>
              <h3 className="text-[18px] md:text-[21px] font-semibold text-white mb-2">
                의지력이 약해서가 아니라, 의도가 서로 충돌해서 멈춥니다
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                표면 의도와 숨은 의도가 충돌하면 행동은 흐려지고, 삶은 표류합니다.
                Reveal은 그 표류를 비난하지 않고, 무엇이 나를 뒤로 끌어당기고 있었는지 보게 합니다.
              </p>
            </div>

            <div className="bg-grey-7 border border-grey-border rounded-2xl p-5 md:p-6">
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.13em] uppercase mb-2">
                CHOOSE
              </p>
              <h3 className="text-[18px] md:text-[21px] font-semibold text-white mb-2">
                보이면, 선택할 수 있습니다
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                숨은 의도를 없애라고 몰아붙이는 것이 아닙니다.
                그 의도가 주는 이득과 내가 치르는 대가를 본 뒤, 계속 선택할지 다르게 선택할지 결정하는 과정입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 md:mb-10">
          <div className="text-center mb-6 md:mb-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              HIDDEN DRIVERS
            </p>
            <h3 className="text-[22px] md:text-[28px] font-semibold text-white leading-tight">
              Reveal에서 살펴보는 숨은 의도들
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {hiddenDrivers.map((driver) => (
              <div
                key={driver.name}
                className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-5 md:p-6"
              >
                <h4 className="font-[family-name:var(--font-dm-mono)] text-[13px] md:text-[14px] text-gold-light tracking-[0.08em] mb-2">
                  {driver.name}
                </h4>
                <p className="text-[16px] md:text-[18px] font-semibold text-white mb-2">
                  {driver.desire}
                </p>
                <p className="text-[13px] md:text-[14px] text-white/58 leading-relaxed">
                  {driver.cost}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0e0e0e] border border-grey-border rounded-2xl p-6 md:p-8 mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                PROCESS
              </p>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight">
                Reveal에서 일어나는 변화의 흐름
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {revealProcess.map((item) => (
                <div key={item.step} className="grid grid-cols-[44px_1fr] gap-4">
                  <span className="font-[family-name:var(--font-dm-mono)] text-[13px] text-gold/80 pt-1">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-[17px] md:text-[19px] font-semibold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-white/62 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-grey-7 border border-gold/20 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                WHAT YOU GET
              </p>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white leading-tight">
                참여자가 얻는 것
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
