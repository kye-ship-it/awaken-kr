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
            PROGRAM SUMMARY
          </span>
          <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-semibold leading-tight text-white mb-3 md:mb-4">
            Reveal 2026 요약
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 leading-relaxed">
            일정, 진행 방식, 트레이너, 비용을 한 번에 확인하세요.
            더 깊은 여정이 필요한 분들께는 Reveal 이후 다음 단계를 별도로 안내드립니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 max-w-[620px] mx-auto">
          {/* Reveal Card */}
          <div className="bg-grey-7 border border-grey-border rounded-2xl p-6 md:p-8 flex flex-col">
            <h3 className="font-[family-name:var(--font-dm-serif)] text-[28px] md:text-[32px] text-white mb-2">
              Reveal
            </h3>
            <p className="text-[17px] md:text-[19px] text-gold-light font-medium mb-4">
              패턴 발견 · 믿음 점검 · 비전 정렬
            </p>
            <span className="inline-flex self-start items-center rounded-full bg-white/[0.06] border border-grey-border px-4 py-1.5 text-[12px] md:text-[13px] text-white/70 mb-5">
              2026. 8. 7 – 9 • 서울
            </span>
            <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed mb-3">
              강의형 세미나가 아니라, 체험과 대화, 소그룹 나눔, 1:1 코칭을 통해 내가 왜 같은 방식으로 반응하고 선택하는지 직접 알아차리는 과정입니다.
            </p>
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] md:text-[12px] text-gold tracking-[0.12em] uppercase mb-4">
              Trainer: Nathan Neighbour
            </p>
            <div className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 mb-6">
              <p className="text-[12px] md:text-[13px] text-white/50 line-through mb-1">
                정가 145만원
              </p>
              <p className="text-[17px] md:text-[19px] font-semibold text-gold-light">
                얼리버드 95만원 <span className="text-[12px] md:text-[13px] font-normal text-white/55">5/31까지</span>
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "반복되는 감정·관계 패턴 발견",
                "소그룹 대화와 체험형 세션",
                "1:1 코칭을 통한 개인화된 인사이트",
                "비전과 다음 행동 정렬",
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
        </div>

        {/* Bottom link */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href="#faq"
            className="text-[14px] md:text-[15px] text-white/50 hover:text-white/70 transition-colors"
          >
Reveal 이후의 여정이 궁금하다면? →
          </a>
        </div>
      </div>
    </section>
  );
}
