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
      "GAP의 프로그램은 기독교 신앙에 기반한 원칙들을 토대로 설계된 프로그램입니다. 성경 말씀이 인용되고, 간단한 기도 등이 포함되어 있습니다. 다만, 전도나 신앙 강요를 하지 않으며, 종교적 배경과 관계없이 누구나 참여할 수 있습니다. 프로그램의 핵심은 자기 인식, 관계 변화, 비전 정렬이며, 신앙적 요소는 그 과정을 지지하는 프레임워크로 활용됩니다.",
  },
  {
    question: "영어를 잘 못해도 괜찮나요?",
    answer:
      "네, 한국어 통역이 제공됩니다. 핵심 내용은 모두 한국어로 전달되며, 영어 원문도 함께 제공됩니다.",
  },
  {
    question: "감정 표현이 서툰데, 수업을 따라갈 수 있을까요?",
    answer:
      "물론입니다. GAP의 프로그램은 자신의 속도로 참여할 수 있도록 설계되어 있습니다. 감정 표현에 익숙하지 않은 분들도 편안하게 참여하실 수 있습니다.",
  },
  {
    question: "숙소가 포함되어 있나요?",
    answer:
      "숙소는 별도입니다. 프로그램은 서울 시내에서 진행되며, 숙소 관련 정보는 등록 후 안내드립니다.",
  },
  {
    question: "Reveal 이후에도 다음 여정이 있나요?",
    answer:
      "네. Reveal을 통해 GAP의 방식을 경험한 뒤, 더 깊은 몰입을 원하는 분들께는 차후 Awaken과 같은 심화 여정을 별도로 안내드릴 수 있습니다. 현재 공개 모집의 중심은 2026년 8월 Reveal입니다.",
  },
  {
    question: "Reveal만 참여해도 되나요?",
    answer:
      "네, Reveal은 독립적인 프로그램입니다. 3일간의 경험만으로도 충분히 의미 있는 인사이트와 변화의 계기를 얻으실 수 있습니다.",
  },
  {
    question: "어떤 프로그램이 저에게 맞을까요?",
    answer:
      "처음 GAP을 경험하신다면 2026년 8월 Reveal을 추천드립니다. Reveal 이후 더 깊은 여정이 필요하다고 느껴지는 분들께는 상담을 통해 다음 단계를 안내드립니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-6 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32">
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
