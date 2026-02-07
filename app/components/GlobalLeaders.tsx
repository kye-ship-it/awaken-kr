import Image from "next/image";

export default function GlobalLeaders() {
  const leaders = [
    { name: "Rob Steffens", desc: "전 Marvel Entertainment 공동 사장 (마블 시네마틱 유니버스의 전성기 주도)" },
    { name: "Jamie Kern Lima", desc: "L'Oréal에 1.4조 원($1.2B) 엑시트 신화 (IT Cosmetics 창업자, 포브스 선정 자수성가 여성 부호)" },
    { name: "Daniel Moore", desc: "Rockefeller Group CEO (미국 부의 상징, 록펠러 가문의 현직 최고 경영자)" },
    { name: "Mark Miller", desc: "Chick-fil-A 부사장 (연 매출 20조 원 기업의 문화를 만든 40년 경력의 리더)" },
    { name: "Andrew Yang", desc: "2020 미국 민주당 대선 경선 후보 (미국 정계에 돌풍을 일으킨 기업가)" },
    { name: "David Boxenbaum", desc: "Maroon 5 발굴 및 프로듀싱 (세계적 밴드를 탄생시킨 음악 산업의 거물)" },
    { name: "Connor McDavid", desc: "NHL 최연소 주장 및 MVP (북미 아이스하키 역사상 최고의 슈퍼스타)" },
    { name: "Patrick Lencioni", desc: "<팀이 빠지기 쉬운 5가지 함정> 저자 (아마존 최장기 경영 베스트셀러 작가)" },
    { name: "Dr. Henry Cloud", desc: "<Boundaries> 저자 (전 세계 2,000만 부 판매, 임상 심리학의 대가)" },
    { name: "Bob Goff", desc: "<Love Does> 저자 (뉴욕타임스 베스트셀러, 미국 외교관 출신 연설가)" },
  ];

  return (
    <section
      className="relative flex flex-col items-center px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201, 189, 138, 0.25) 0%, transparent 70%), #000",
      }}
    >
      {/* Section Label */}
      <p className="text-[16px] md:text-[20px] text-center">
        <span className="text-[#858585]">TRUSTED BY GLOBAL LEADERS</span>
        <span className="text-white/40 mx-2">|</span>
        <span className="text-white">
          이 탁월함의 기준을 공유하는 리더들
        </span>
      </p>

      {/* Gradient Subtitle */}
      <p
        className="mt-4 md:mt-6 text-[24px] md:text-[30px] lg:text-[36px] font-semibold text-center leading-snug max-w-[918px]"
        style={{
          background: "linear-gradient(135deg, #6d6758, #d3c6ab, #a69c86)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Jean-Marie Jobs와 그녀가 속한 글로벌 코칭 펌(Novus Global)의 방법론은
        이미 세계 최고의 리더들이 검증하고 선택했습니다.
      </p>

      {/* Avatar Circles - Figma: 5 circles, 84px each, centered */}
      {/* Figma: avatars at x=556,617,678,739,800 → 23px overlap at 84px size */}
      <div className="mt-10 md:mt-14 flex -space-x-4 md:-space-x-5 lg:-space-x-[23px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="relative w-[56px] h-[56px] md:w-[70px] md:h-[70px] lg:w-[84px] lg:h-[84px] rounded-full border-2 border-black overflow-hidden"
          >
            <Image
              src={`/images/avatar-${i}.png`}
              alt=""
              fill
              className="object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Leader List */}
      <ul className="mt-10 md:mt-12 w-full max-w-[918px] list-disc pl-5 flex flex-col gap-2.5 md:gap-3">
        {leaders.map((leader) => (
          <li key={leader.name} className="text-[16px] md:text-[18px] leading-relaxed text-white/60">
            <span className="text-white font-medium">{leader.name}</span>
            <span className="text-white/75 ml-1">: {leader.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
