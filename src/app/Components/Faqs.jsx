"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Ai Vista Solutions offer?",
    answer: "Ai Vista Solutions delivers cutting-edge AI-powered services designed to transform your business operations. We specialize in custom artificial intelligence and machine learning development, including computer vision, natural language processing (NLP), and predictive analytics."
  },
  {
    question: "What sets Ai Vista Solutions apart from competitors?",
    answer: "Our unique combination of deep technical expertise, industry-specific solutions, and commitment to ethical AI practices distinguishes us from competitors. We focus on delivering measurable business impact through our AI implementations."
  },
  {
    question: "Can Ai Vista Solutions integrate with our existing systems?",
    answer: "Yes, we specialize in seamless integration with existing enterprise systems. Our solutions are designed with API-first architectures and modular components for easy integration."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and logistics. Our AI solutions are adaptable to specific industry requirements and compliance standards."
  },
  {
    question: "How does Ai Vista Solutions ensure data security?",
    answer: "We implement robust security measures including end-to-end encryption, strict access controls, and compliance with GDPR and other relevant regulations. All data processing follows our stringent security protocols."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12 px-6 sm:px-8 md:px-40 lg:px-60 xl:px-80 2xl:px-[400px] bg-black text-gray-300">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-[#00E1FF80] rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_15px_0_rgba(0,225,255,0.5)]"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-8 py-5 bg-[#060606] hover:bg-[#0a0a0a] font-medium flex justify-between items-center group"
            >
              <span className="text-white text-lg group-hover:text-[#00E1FF] transition-colors duration-200">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform text-[#00E1FF] ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-8 py-6 bg-[#060606] border-t-2 border-[#00E1FF80] text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}