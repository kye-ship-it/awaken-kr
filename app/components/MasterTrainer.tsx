import Image from "next/image";

export default function MasterTrainer() {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-16 pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
      {/* Section Title - Figma: x=559, width=327 */}
      <p className="text-[17px] md:text-[20px] text-white text-center">
        초대된 소수만을 위한, 검증된 마스터의 안내
      </p>

      {/* Gradient Subtitle - Figma: x=355, width=735 */}
      <p
        className="mt-4 md:mt-6 text-[24px] md:text-[30px] lg:text-[36px] font-semibold text-center leading-snug max-w-[735px]"
        style={{
          background: "linear-gradient(135deg, #6d6758, #d3c6ab, #a69c86)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        단순한 강사가 아닌, 글로벌 리더십의 정점(Mastery)에 있는 인물이 당신을
        가이드합니다.
      </p>

      {/* Photo + Name - Figma: photo x=581, width=277, height=371 */}
      <div className="mt-10 md:mt-14 flex flex-col items-center">
        <div className="relative w-[220px] md:w-[250px] lg:w-[277px] h-[295px] md:h-[335px] lg:h-[371px] border-[5px] md:border-[6px] lg:border-[7px] border-white overflow-hidden">
          <Image
            src="/images/amy-maxwell.png"
            alt="Amy Maxwell"
            fill
            className="object-cover"
          />
        </div>

        {/* Name - Figma: centered below photo */}
        <p className="mt-6 text-[13px] md:text-[14.5px] text-white/50">
          GAP Community Master Trainer
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-prata)] text-[28px] md:text-[33px] text-white">
          Amy Maxwell
        </h3>
      </div>

      {/* Stats Row */}
      <div className="mt-10 md:mt-12 w-full max-w-[1090px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center md:border-r md:border-white/20 px-4">
          <span className="font-[family-name:var(--font-prata)] text-[22px] md:text-[24px] text-white">
            8,000+
          </span>
          <span className="mt-1 text-[15px] md:text-[17px] text-white/80">
            시간 트레이닝 경험
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center md:border-r md:border-white/20 px-4">
          <span className="text-[16px] md:text-[19px] font-semibold text-white">
            개인 · 조직 성장 촉진 전문가
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <span className="text-[16px] md:text-[19px] font-semibold text-white">
            GAP Community 마스터 트레이너
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-10 md:mt-14 w-full max-w-[1090px] border-t border-b border-dashed border-white/20 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:border-r md:border-dashed md:border-white/20 md:pr-8">
            {/* Training & Cultural Expertise */}
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-2">
                글로벌 트레이닝 &amp; 문화적 전문성
              </h4>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#7f7f7f] leading-relaxed">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>미국 및 국제 기업 교육 경험</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>캐나다·필리핀·아이티·아프리카 등 다문화 현장 활동</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>기업·비영리·인도주의 단체 대상 교육 콘텐츠 개발 &amp; 공동 집필</span>
                </li>
              </ul>
            </div>

            {/* Leadership & Facilitation */}
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-2">
                리더십 &amp; 퍼실리테이션
              </h4>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#7f7f7f] leading-relaxed">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>17년 이상 트레이닝 &amp; 퍼실리테이션 경력</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>포춘 500대 기업부터 소규모 비즈니스까지</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>팀 참여도 향상 · 리더십 강화 · 맞춤형 교육 설계</span>
                </li>
              </ul>
            </div>

            {/* Education & Background */}
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-2">
                학력 &amp; 배경
              </h4>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#7f7f7f] leading-relaxed">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>UC DAVIS 학사(BA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Georgetown University Transformational Leadership Training (대학원 과정)</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>워싱턴 D.C. 인근 거주</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:pl-8">
            {/* Core Values */}
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-2">
                핵심 가치 (Core Values)
              </h4>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#7f7f7f] leading-relaxed">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Sparking Life | 삶을 깨우기</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Sparking Hope | 희망을 점화하기</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>Sparking Joy | 기쁨을 불러오기</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-2">
                비전
              </h4>
              <ul className="flex flex-col gap-1.5 text-[14px] text-[#7f7f7f] leading-relaxed">
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>개인의 고유한 영향력과 가능성 발견</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>진정성 있는 도전과 비전을 통한 성장</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0">•</span>
                  <span>인격 개발 · 용서 · 기쁨을 공동체로 확산</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
