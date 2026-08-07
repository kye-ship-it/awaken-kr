import Image from "next/image";

export default function FounderSection() {
  const credentials = [
    {
      label: "25+년 경력",
      desc: "1998년부터 축적된 독보적인 트레이닝 노하우",
    },
    {
      label: "20,000+시간 코칭 경력",
      desc: "압도적인 임계점을 넘은 2만 시간 이상의 현장 코칭 경력",
    },
    {
      label: "Global Corporate Coach",
      desc: "Disney, ESPN, Microsoft, BMW, United Airlines 등 포춘 500대 기업 조직 문화 및 리더십 코칭",
    },
    {
      label: "Novus Global Associate Partner",
      desc: "세계적 코칭 펌 Novus Global의 'Train the Trainer' 인스티튜트 리드",
    },
    {
      label: "Author",
      desc: "리더십 베스트셀러 <The Art of Feeding Heroes> 저자",
    },
  ];

  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="w-full max-w-[1090px] flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
        {/* Left: Photo */}
        <div className="shrink-0 flex flex-col items-center">
          {/* Photo - Figma: x=223, width=256, height=302 */}
          <div className="relative w-[200px] md:w-[230px] lg:w-[256px] h-[236px] md:h-[272px] lg:h-[302px] border-[4px] md:border-[5px] lg:border-[6px] border-white overflow-hidden">
            <Image
              src="/images/jean-marie-jobs.png"
              alt="Jean-Marie Jobs"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(201, 189, 138, 0.15) 100%)",
              }}
            />
          </div>

          {/* Name */}
          <h3 className="mt-5 font-[family-name:var(--font-prata)] text-[22px] md:text-[25px] text-white text-center">
            Jean-Marie Jobs
          </h3>
          <p className="mt-1 text-[13px] md:text-[14.5px] text-white/50 text-center">
            GAP Community Founder
          </p>
        </div>

        {/* Right: Credentials */}
        <div className="flex flex-col">
          {/* Credentials */}
          <ul className="flex flex-col gap-3">
            {credentials.map((item) => (
              <li key={item.label} className="flex gap-2">
                <span className="shrink-0 text-white/60">•</span>
                <div>
                  <span className="text-[16px] md:text-[18px] text-white font-medium">
                    {item.label}
                  </span>
                  <span className="text-[13px] md:text-[14px] text-[#7f7f7f] ml-1.5">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full max-w-[1090px] mt-10 md:mt-14 border-t border-white/20" />

      {/* POWERED BY GAP Community - Centered */}
      <div className="w-full max-w-[1090px] mt-10 md:mt-14 flex flex-col items-center text-center">
        <p className="text-[13px] md:text-[14.5px] text-white/50 uppercase tracking-wider">
          Powered by
        </p>
        <p className="mt-1 font-[family-name:var(--font-prata)] text-[23px] md:text-[27px] text-white">
          GAP Community
        </p>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-[17px] md:text-[20px] text-[#868686] leading-relaxed max-w-[870px]">
          Awaken은 일회성 이벤트가 아닙니다. 1998년 설립되어 20년 넘게 증명된
          GAP Community의 &lsquo;변혁적 리더십(Transformational
          Leadership)&rsquo; 정수를 그대로 이식했습니다.
        </p>

        {/* Vertical line separator */}
        <div className="w-px h-[88px] bg-white/20 mt-8 md:mt-10" />

        {/* Info Boxes */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1090px]">
          <div className="flex flex-col gap-2">
            <span className="text-[15px] md:text-[16px] font-semibold text-[#414141]">
              Global Footprint
            </span>
            <p className="text-[14px] md:text-[15px] text-white leading-relaxed">
              미국, 캐나다, 네덜란드, 중동, 아프리카 등 3개 대륙, 7개국 이상에서 진행
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[15px] md:text-[16px] font-semibold text-[#414141]">
              Proven Impact
            </span>
            <p className="text-[14px] md:text-[15px] text-white leading-relaxed">
              수천 명의 삶을 재건한 검증된 커리큘럼과 임상 데이터
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
