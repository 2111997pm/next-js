"use client";
import { useState } from "react";
import { faqs } from "@/constant/Faq";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container   max-w-8xl mx-auto p-4">
      <h2 className="text-4xl font-bold  mb-6">FAQ</h2>
      <div className="space-y-4 w-full">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => toggleAccordion(faq.id)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openId === faq.id ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ${
                openId === faq.id
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
