const testimonials = [
  {
    quote:
      "리셋하고 싶거나, 인생의 방향성을 새롭게 잡고 싶은 사람에게 강력 추천합니다.",
    name: "Esther Mun",
    role: "40대, 디자인 회사 대표 (Awaken 1기)",
  },
  {
    quote:
      "내 인생의 열정을 신앙적 관점과 관계적 관점에서 다시 찾게 되었어요.",
    name: "Paul Jung",
    role: "40대, 컨설팅 회사 대표 (Awaken 1기)",
  },
  {
    quote:
      "내가 이 세상에서 살아가는 비전이 결국에는 다른 누군가에게 선한 영향을 끼치는 것이라는 걸 스스로 찾게 되었어요.",
    name: "Hannes Lee",
    role: "40대, 스타트업 CMO (Awaken 1기)",
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32">
      <div className="mb-8 md:mb-12 text-center">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-grey-mid mb-3 md:mb-4">
          먼저 이 여정을 경험한 사람들의 이야기
        </p>
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-white leading-tight">
          처음엔 반신반의했습니다.
        </h2>
      </div>

      <div className="flex flex-col gap-3 max-w-[600px] lg:max-w-[1312px] mx-auto lg:flex-row">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#121212] border border-white/[0.16] rounded-lg p-6 flex flex-col justify-between lg:flex-1"
          >
            <p className="text-[17px] md:text-[19px] lg:text-[20px] text-white tracking-[-0.4px] leading-[28px] md:leading-[30px] mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-grey-border pt-4">
              <p className="font-medium text-[16px] text-white">{t.name}</p>
              <p className="text-[14px] text-grey-52 mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Awaken Introduction Video */}
      <div className="mt-12 md:mt-16 max-w-[800px] mx-auto w-full">
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/xxABMhtoBUI"
          title="Awaken 소개 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
