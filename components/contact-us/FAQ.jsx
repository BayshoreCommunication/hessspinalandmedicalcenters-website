import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const FAQ = () => {
  return (
    <div>
      <div className="container py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 items-center">
          {/* Left side  */}
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="relative w-full">
              <Image
                src="/assets/contactpage/faq.png"
                alt="Doctors examining spine"
                width={600}
                height={500}
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </ScrollMotionEffect>

          {/* Right side - Image */}
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-stone-950 text-center md:text-left mb-4 mt-5">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
