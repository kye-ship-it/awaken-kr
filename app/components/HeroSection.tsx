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
          Awaken
        </span>
      </nav>

      {/* Hero Content - Mobile: px=27~57, Desktop: centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-7 md:px-10 lg:px-16 py-12 md:py-16 text-center">
        <div className="flex flex-col items-center gap-5 md:gap-7 max-w-[720px] mx-auto w-full">
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full border border-white bg-chalk px-5 py-1.5 text-[11px] md:text-[12.7px] font-medium text-black tracking-[-0.3px]">
            Vol.3 • 2026년 3월 • 서울
          </span>

          {/* Main Title - Mobile: 293px/393px centered */}
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-bold leading-[1.2] tracking-[-1.4px] text-gold-pale">
            Disney, Microsoft 리더들이
            <br className="md:hidden" />
            {" "}선택한 코칭이
            <br />
            서울에서 4일간 열립니다.
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] md:text-[22px] lg:text-[27.5px] font-semibold leading-[1.2] text-gold-warm tracking-[-0.55px]">
            말로는 다 설명되지 않는 4일간의 경험
            <br />
            도대체 무엇이 사람을 변화시키는지 궁금하다면,
          </p>

          {/* Body Paragraphs */}
          <div className="flex flex-col items-center gap-3 md:gap-4 mt-2 md:mt-4">
            <p className="text-[15px] md:text-[17px] font-semibold leading-[1.3] text-white/95 tracking-[-0.5px]">
              어웨이큰(Awaken)은 단순한 세미나가 아닙니다.
            </p>
            <p className="text-[15px] md:text-[17px] font-normal leading-[1.4] text-white/95 tracking-[-0.5px]">
              지인의 들뜬 목소리와 추천에도 불구하고, 여전히 어떤 프로그램인지,
              <br className="hidden md:block" />
              왜 필요한지 확신이 서지 않으실 겁니다.
            </p>
            <p className="text-[15px] md:text-[17px] font-normal leading-[1.4] text-white/95 tracking-[-0.5px]">
              당연합니다. 보이지 않는 마음을 다루는 일이기에
              <br className="hidden md:block" />
              직접 경험하기 전에는 알 수 없는 것들이 있습니다.
            </p>
            <p className="text-[15px] md:text-[17px] font-normal leading-[1.4] text-white/95 tracking-[-0.5px]">
              먼저, 이 프로그램이 당신에게 필요한지 &lsquo;확인&rsquo;부터
              해보세요.
            </p>
          </div>

          {/* CTA Button */}
          <a href="#cta-form" className="mt-4 md:mt-8 rounded-full bg-chalk px-8 py-3 text-[15px] md:text-[16px] font-medium text-black tracking-[-0.3px] transition-opacity hover:opacity-90 active:opacity-80">
            안내 코스(무료) 시작하기
          </a>

          {/* Event Info */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 text-[14px] md:text-[15px] text-white/70">
            <p className="flex items-center gap-2">
              <span className="text-gold-warm">&#128197;</span>
              <span>2026년 3월 19일(목) ~ 3월 22일(일)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold-warm">&#128205;</span>
              <span>모드라운지 신논현점</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold-warm">&#128279;</span>
              <a
                href="https://naver.me/52RwPYSD"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-white/30 hover:text-white transition-colors"
              >
                서울 강남구 강남대로114길 13 지하1층
              </a>
            </p>
          </div>

          {/* Scroll Hint */}
          <p className="mt-10 md:mt-16 text-[13px] md:text-[14px] text-[#9b9b9b]">
            스크롤하여 더 알아보기 ↓
          </p>
        </div>
      </div>
    </section>
  );
}
