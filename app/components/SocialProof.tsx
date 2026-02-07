export default function SocialProof() {
  return (
    <section className="flex flex-col items-center px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 text-center">
      <p className="text-[20px] md:text-[23px] lg:text-[25px] font-normal text-grey-mid leading-relaxed">
        혹시 이런 이야기를 들으셨나요?
      </p>

      <div className="flex flex-col gap-1 md:gap-2 mt-8 md:mt-12">
        <p className="text-[20px] md:text-[23px] lg:text-[25px] font-semibold leading-[1.4] text-gold-light">
          &ldquo;거기 가면 진짜 나를 알게 돼.&rdquo;
        </p>
        <p className="text-[20px] md:text-[23px] lg:text-[25px] leading-[1.4]">
          <span className="font-medium text-white">&ldquo;관계가 회복됐어.&rdquo;</span>
          {" "}
          <span className="font-semibold text-gold-deep">&ldquo;인생이 바뀌었어.&rdquo;</span>
        </p>
      </div>
    </section>
  );
}
