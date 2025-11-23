"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What types of services does Hess Spinal & Medical Centers provide?",
    answer:
      "Hess offers a full range of accident‑injury care, right at their centers: physical therapy (including hydrotherapy), trigger point injections, chiropractic manipulation, digital X‑rays and personalized injury rehabilitation plans.",
  },
  {
    question: "Do you have multiple locations, and can you help me with transportation?",
    answer:
      "Absolutely. There are 18 centers across West Central Florida. And if transportation is a barrier, we can even arrange rides to and from your appointments.",
  },
  {
    question: "What types of injuries do you treat?",
    answer:
      "Hess specializes in accident-related injuries, including auto accident injuries, slip and fall, work-related injuries, neck and back pain, herniated discs, and soft tissue damage. Our team develops individualized treatment plans for fast and safe recovery.",
  },
  {
    question: "Can I get same-day treatment?",
    answer:
      "Yes. Hess provides same-day appointments and accepts walk-ins, so you can get medical attention immediately after an injury.",
  },
  {
    question: "Can I get same-day treatment?",
    answer:
      "Can I get same-day treatment? Yes. Hess provides same-day appointments and accepts walk-ins, so you can get medical attention immediately after an injury.Yes. Hess provides same-day appointments and accepts walk-ins, so you can get medical attention immediately after an injury.",
  },
  {
    question: "What makes Hess different from other medical centers?",
    answer:
      "Hess combines medical expertise with personalized care. We focus on holistic recovery, offer advanced diagnostic tools, and provide coordinated care to handle both immediate and long-term treatment needs.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b pb-4 transition-all duration-1000 ease-in-out"
          >
            <button
              className="w-full text-left text-lg font-medium text-stone-800 focus:outline-none"
              onClick={() => toggle(index)}
            >
              {item.question}
            </button>
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-stone-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
