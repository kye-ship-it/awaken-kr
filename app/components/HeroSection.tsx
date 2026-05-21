import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image with mask */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 75% 50%, transparent 0%, rgba(0,0,0,0.7) 60%, #000 80%)",
          }}
        />
      </div>

      {/* Navbar - Figma: height 80px, px=20 */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md h-[80px] flex items-center px-5">
        <span className="font-[family-name:var(--font-dm-serif)] text-[28px] md:text-[36px] lg:text-[40px] text-white tracking-[-2px]">
          GAP Korea
        </span>
      </nav>

      {/* Hero Content - Mobile: px=27~57, Desktop: centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-7 md:px-10 lg:px-16 py-12 md:py-16 text-center">
        <div className="flex flex-col items-center gap-5 md:gap-7 max-w-[720px] lg:max-w-[900px] mx-auto w-full">
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full border border-white bg-chalk px-5 py-1.5 text-[11px] md:text-[12.7px] font-medium text-black tracking-[-0.3px]">
            Reveal 2026 • 서울
          </span>

          {/* Main Title */}
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] tracking-[-1.4px] text-gold-pale break-keep whitespace-pre-line">
            {"반복되는 삶의 패턴을 발견하고,\n내가 원하는 방향으로 다시 정렬하는 3일"}
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[22px] lg:text-[27.5px] font-semibold leading-[1.2] text-gold-warm tracking-[-0.55px]">
            Reveal은 강의만 듣는 세미나가 아니라,
            <br />
            체험·대화·코칭을 통해 자신을 실제로 마주하는 프로그램입니다.
          </p>

          <p className="max-w-[680px] text-[14px] md:text-[16px] text-white/65 leading-relaxed break-keep">
            관계, 감정, 선택에서 반복되는 반응을 살펴보고 내가 붙잡고 있던 믿음과 태도를 알아차린 뒤, 삶의 비전과 행동을 다시 맞춰갑니다.
          </p>

          {/* CTA Button */}
          <a href="#reveal" className="mt-4 md:mt-8 rounded-full bg-chalk px-8 py-3 text-[15px] md:text-[16px] font-medium text-black tracking-[-0.3px] transition-opacity hover:opacity-90 active:opacity-80">
            Reveal이 무엇인지 보기
          </a>

          {/* Event Info */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 text-[14px] md:text-[15px] text-white/70">
            <p className="flex items-center gap-2">
              <span className="text-gold-warm">&#128197;</span>
              <span>Reveal — 2026. 8. 8 – 10</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold-warm">&#128205;</span>
              <span>서울</span>
            </p>
          </div>

          {/* Scroll Hint */}
          <p className="mt-10 md:mt-16 text-[13px] md:text-[14px] text-grey-light-9">
            스크롤하여 더 알아보기 ↓
          </p>
        </div>
      </div>
    </section>
  );
}
