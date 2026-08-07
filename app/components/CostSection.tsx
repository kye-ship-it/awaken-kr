export default function CostSection() {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-16 py-20 md:py-28 lg:py-32 text-center">
      <div className="max-w-[817px] mx-auto">
        <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium leading-snug text-white">
          하지만 4일이라는 시간, 적지 않은 비용...
        </h2>
        <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold leading-snug text-white mt-1 md:mt-2">
          덜컥 결정하기엔 부담스러우시죠?
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal text-grey-mid leading-relaxed mt-8 md:mt-10 whitespace-pre-line">
          {"어웨이큰은 4일간(오전 10시 ~ 오후 10시) 몰입하여 진행되는 고강도 프로그램입니다.\n가볍게 참여할 수 있는 과정이 아니기에, 무작정 등록하기보다 프로그램의 실체를 정확히 아는 것이 먼저입니다."}
        </p>
      </div>
    </section>
  );
}
