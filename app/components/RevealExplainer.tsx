const revealLenses = [
  {
    label: "RESULT",
    title: "결과를 직시합니다",
    description:
      "내가 원한다고 말해온 것과 실제 삶에 반복해서 나타난 결과 사이의 간극을 봅니다. 결과는 비난의 근거가 아니라, 내 안에서 실제로 작동해온 의도를 보여주는 단서입니다.",
  },
  {
    label: "HIDDEN INTENTION",
    title: "숨은 의도를 발견합니다",
    description:
      "표면적으로는 변화, 관계 회복, 성장, 도전을 원한다고 말하지만, 더 깊은 곳에서는 상처받지 않기, 틀리지 않기, 통제권을 잃지 않기 같은 의도가 작동할 수 있습니다.",
  },
  {
    label: "COST",
    title: "그 선택의 대가를 봅니다",
    description:
      "숨은 의도는 나를 보호해왔지만, 동시에 관계의 단절, 반복되는 후회, 정체, 고립 같은 대가를 만들었을 수 있습니다. Reveal은 그 대가를 정직하게 보게 합니다.",
  },
];

const driverCards = [
  {
    title: "옳고 싶은 마음",
    description:
      "내가 틀렸을 가능성을 피하려다, 익숙한 자기 이야기 안에 계속 머물 수 있습니다.",
  },
  {
    title: "편하고 싶은 마음",
    description:
      "불편한 대화와 시도를 피하면서, 정말 원하는 변화도 함께 미루게 될 수 있습니다.",
  },
  {
    title: "통제하고 싶은 마음",
    description:
      "상황을 완전히 확실하게 만들고 싶어서, 관계와 선택 앞에서 계속 거리를 둘 수 있습니다.",
  },
  {
    title: "좋아 보이고 싶은 마음",
    description:
      "괜찮은 사람처럼 보이려는 마음 때문에, 진짜 마음과 필요를 숨기게 될 수 있습니다.",
  },
];

const outcomes = [
  "내가 왜 같은 문제 앞에서 반복해서 멈추는지 더 정확히 이해합니다.",
  "의지력 부족이나 성격 문제로만 보였던 행동을 더 깊은 구조로 볼 수 있습니다.",
  "관계, 일, 선택에서 자동으로 나오던 반응을 알아차리는 힘이 생깁니다.",
  "내가 지키고 있던 이득과 치르고 있던 대가를 보고, 다른 선택의 가능성을 엽니다.",
];

export default function RevealExplainer() {
  return (
    <section
      id="what-is-reveal"
      className="relative overflow-hidden px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36"
      style={{
        background:
          "radial-gradient(ellipse 80% 45% at 50% 0%, rgba(201, 189, 138, 0.16) 0%, rgba(201, 189, 138, 0.055) 42%, transparent 78%), linear-gradient(180deg, #000 0%, #070604 48%, #000 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-[1060px] mx-auto">
        <div className="max-w-[780px] mx-auto text-center mb-16 md:mb-20">
          <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.18em] uppercase mb-5">
            WHAT IS REVEAL
          </span>
          <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.12] tracking-[-0.04em] text-white mb-6 md:mb-7 break-keep">
            Reveal은 어떤 프로그램인가요?
          </h2>
          <p className="text-[17px] md:text-[20px] text-white/72 leading-[1.85] tracking-[-0.01em] break-keep">
            Reveal은 내가 원한다고 믿는 삶과, 실제로 반복해온 결과 사이의 간극을 직면하는 3일입니다.
            “왜 나는 원하는데도 같은 자리에서 멈출까?”라는 질문을 통해,
            표면의 바람 아래에서 실제로 나를 움직여온 숨은 의도를 발견하도록 돕습니다.
          </p>
        </div>

        <div className="mb-16 md:mb-20 rounded-[32px] border border-gold/20 bg-white/[0.035] p-6 md:p-9 lg:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-4">
                CORE IDEA
              </p>
              <h3 className="text-[25px] md:text-[34px] font-semibold leading-[1.18] tracking-[-0.035em] text-gold-light mb-5 break-keep">
                문제는 방법을 몰랐던 게 아닐 수 있습니다.
              </h3>
              <p className="text-[15px] md:text-[17px] text-white/66 leading-[1.85] break-keep">
                많은 사람은 더 좋은 방법, 더 강한 동기부여, 더 많은 조언을 찾습니다.
                하지만 어떤 문제는 방법이 부족해서가 아니라, 내 안의 의도가 서로 충돌하기 때문에 반복됩니다.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-8">
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-white/42 tracking-[0.12em] uppercase mb-4">
                Reveal’s Question
              </p>
              <p className="text-[24px] md:text-[32px] text-white leading-[1.25] font-semibold tracking-[-0.03em] mb-5 break-keep">
                “당신의 진짜 의도는 무엇입니까?”
              </p>
              <p className="text-[14px] md:text-[15px] text-white/56 leading-[1.8] break-keep">
                이 질문은 현장의 경험을 대체하지 않도록 자세한 진행 방식은 공개하지 않습니다.
                대신 Reveal이 무엇을 바라보는 프로그램인지, 참여자가 어떤 변화를 기대할 수 있는지에 집중합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mb-16 md:mb-20">
          <div className="mb-8 md:mb-10 text-center">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              HOW REVEAL LOOKS
            </p>
            <h3 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.035em] text-white break-keep">
              Reveal이 바라보는 세 가지 지점
            </h3>
          </div>

          <div className="relative flex flex-col gap-5 md:gap-6">
            <div className="absolute left-[20px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-gold/0 via-gold/35 to-gold/0 md:block" />
            {revealLenses.map((item, index) => (
              <div
                key={item.label}
                className="relative rounded-[28px] border border-white/10 bg-white/[0.035] p-5 md:pl-16 md:pr-8 md:py-7 transition-colors hover:bg-white/[0.05]"
              >
                <div className="hidden md:flex absolute left-[8px] top-8 h-6 w-6 items-center justify-center rounded-full border border-gold/35 bg-black text-[11px] text-gold">
                  {index + 1}
                </div>
                <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.14em] uppercase mb-2">
                  {item.label}
                </p>
                <h4 className="text-[19px] md:text-[23px] font-semibold text-white mb-2.5 tracking-[-0.025em]">
                  {item.title}
                </h4>
                <p className="text-[14px] md:text-[16px] text-white/62 leading-[1.8] break-keep">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-20 rounded-[32px] border border-white/10 bg-[#0b0b0b]/80 p-6 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 md:gap-10">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                HIDDEN PAYOFF
              </p>
              <h3 className="text-[24px] md:text-[32px] font-semibold text-white leading-[1.2] tracking-[-0.035em] mb-5 break-keep">
                숨은 의도에는 반드시 ‘이득’이 있습니다
              </h3>
              <div className="flex flex-col gap-4 text-[15px] md:text-[17px] text-white/64 leading-[1.85] break-keep">
                <p>
                  어떤 행동은 나를 힘들게 만들지만, 동시에 나를 보호해주기도 합니다.
                  그래서 단순히 “그만해야지”라고 결심해도 쉽게 바뀌지 않습니다.
                </p>
                <p>
                  Reveal은 그 이득을 비난하지 않습니다. 오히려 그 이득을 정직하게 보고,
                  그것을 지키기 위해 내가 무엇을 잃고 있었는지까지 함께 보도록 돕습니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {driverCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 md:p-6"
                >
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-gold-light mb-2 tracking-[-0.02em]">
                    {item.title}
                  </h4>
                  <p className="text-[13px] md:text-[14px] text-white/58 leading-[1.75] break-keep">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mb-16 md:mb-20 rounded-[32px] border border-gold/20 bg-gradient-to-b from-gold/10 to-white/[0.025] p-6 md:p-9 lg:p-10">
          <div className="mb-6 md:mb-8">
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
              CASE SNAPSHOT
            </p>
            <h3 className="text-[24px] md:text-[32px] font-semibold text-white leading-[1.22] tracking-[-0.035em] break-keep">
              변화는 ‘더 좋은 방법’보다 ‘진짜 의도’를 볼 때 시작됩니다
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-7 items-stretch mb-6 md:mb-8">
            <div className="rounded-[24px] border border-white/10 bg-black/25 p-5 md:p-6">
              <p className="text-[12px] font-[family-name:var(--font-dm-mono)] text-white/40 tracking-[0.14em] uppercase mb-3">
                Surface
              </p>
              <p className="text-[15px] md:text-[17px] text-white/72 leading-[1.8] break-keep">
                오랫동안 단절된 가족 관계를 회복하고 싶다고 말했지만,
                실제로는 몇 달 동안 아무 행동도 하지 못했습니다.
              </p>
            </div>
            <div className="hidden md:flex items-center text-gold/50 text-[28px]">→</div>
            <div className="rounded-[24px] border border-white/10 bg-black/25 p-5 md:p-6">
              <p className="text-[12px] font-[family-name:var(--font-dm-mono)] text-white/40 tracking-[0.14em] uppercase mb-3">
                Hidden
              </p>
              <p className="text-[15px] md:text-[17px] text-white/72 leading-[1.8] break-keep">
                더 깊은 곳에는 다시 거절당하지 않으려는 마음과,
                상처를 준 상대가 괴로워하길 바라는 마음이 함께 있었습니다.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] bg-black/25 px-5 py-5 md:px-7 md:py-6">
            <p className="text-[15px] md:text-[17px] text-white/66 leading-[1.9] break-keep">
              Reveal의 핵심은 이런 내면을 폭로하거나 판단하는 것이 아닙니다.
              “내가 무엇을 지키고 있었고, 그 대가로 무엇을 잃고 있었는가”를 보게 하는 것입니다.
              그 지점이 보이면, 사람은 이전과 다른 선택 앞에 설 수 있습니다.
            </p>
            <p className="mt-4 text-white/42 text-[13px] md:text-[14px] leading-relaxed break-keep">
              ※ 실제 프로그램의 구체적인 질문과 진행 방식은 현장에서 직접 경험할 수 있도록 공개하지 않습니다.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-10">
            <div>
              <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.15em] uppercase mb-3">
                WHAT YOU GET
              </p>
              <h3 className="text-[24px] md:text-[30px] font-semibold text-white leading-[1.2] tracking-[-0.035em] break-keep">
                참여자가 얻는 변화
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 md:gap-4">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl bg-black/20 px-4 py-3.5 text-[14px] md:text-[15px] text-white/72 leading-[1.75] break-keep"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="text-[14px] md:text-[15px] text-white/55 leading-[1.75] break-keep">
              내 상황에 Reveal이 맞는지 먼저 확인하고 싶다면, 안내 코스를 통해 더 자세히 상담받을 수 있습니다.
            </p>
            <a
              href="#cta-form"
              className="inline-flex justify-center rounded-full bg-chalk px-6 py-3 text-[14px] md:text-[15px] font-medium text-black transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Reveal 안내 코스 시작하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
