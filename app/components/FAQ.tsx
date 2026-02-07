"use client";

import { useState } from "react";

const faqs = [
  {
    question: "신청서를 제출하면 바로 결제해야 하나요?",
    answer:
      "아닙니다. 이 페이지는 프로그램에 대한 상세 정보를 요청하는 단계입니다. 자료를 검토하신 후, 충분히 고민하고 등록하셔도 됩니다.",
  },
  {
    question: "종교적인 프로그램인가요?",
    answer:
      "아닙니다. 어웨이큰은 특정 종교를 전파하는 프로그램이 아닙니다. 다만, 인간의 영성과 내면의 성장을 다루는 과정에서 다양한 관점을 포함할 수 있습니다.",
  },
  {
    question: "영어를 잘 못해도 괜찮나요?",
    answer:
      "네, 한국어 통역이 제공됩니다. 핵심 내용은 모두 한국어로 전달되며, 영어 원문도 함께 제공됩니다.",
  },
  {
    question: "감정 표현이 서툰데, 수업을 따라갈 수 있을까요?",
    answer:
      "물론입니다. 어웨이큰은 자신의 속도로 참여할 수 있도록 설계되어 있습니다. 감정 표현에 익숙하지 않은 분들도 편안하게 참여하실 수 있습니다.",
  },
  {
    question: "숙소가 포함되어 있나요?",
    answer:
      "숙소는 별도입니다. 프로그램은 서울 시내에서 진행되며, 숙소 관련 정보는 등록 후 안내드립니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32">
      <div className="max-w-[770px] mx-auto">
        <p className="text-[14px] text-white/50 mb-6 md:mb-8 text-center">
          자주 묻는 질문
        </p>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-grey-dark">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between py-4 md:py-5 text-left cursor-pointer"
            >
              <span className="font-medium text-[15px] md:text-[16px] text-white pr-4">
                {faq.question}
              </span>
              <span className="text-white/60 text-[20px] flex-shrink-0 leading-none">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <p className="text-[13px] md:text-[14px] text-grey-light-9 pb-4 md:pb-5 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
