export default function UserDoubts() {
  return (
    <section className="flex flex-col items-center px-7 md:px-8 lg:px-16 pb-16 md:pb-24 text-center">
      {/* Golden vertical line */}
      <div className="w-px h-[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-b from-transparent via-gold to-transparent mb-10 md:mb-14" />

      <p className="text-[20px] md:text-[23px] lg:text-[25px] font-normal text-grey-mid leading-relaxed whitespace-pre-line">
        {"지인은 그렇게 말했지만,\n당신의 마음속엔 이런 질문이 있을지 모릅니다."}
      </p>

      <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-10">
        <p className="text-[20px] md:text-[23px] lg:text-[25px] font-medium leading-relaxed text-white">
          &ldquo;나에게도 해당되는 이야기일까?&rdquo;
        </p>
        <p className="text-[20px] md:text-[23px] lg:text-[25px] font-medium leading-relaxed text-white">
          &ldquo;진짜 그렇게 송두리째 바뀔 수 있을까?&rdquo;
        </p>
        <p className="text-[20px] md:text-[23px] lg:text-[25px] font-medium leading-relaxed text-white">
          &ldquo;내 인생은 별로 문제가 없는데?&rdquo;
        </p>
      </div>
    </section>
  );
}
