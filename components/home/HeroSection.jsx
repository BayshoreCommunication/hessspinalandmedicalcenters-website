"use client";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[750px] flex items-center justify-center">
      <Image
        className="absolute inset-0 object-cover bg-top w-full h-full"
        width={1920}
        height={700}
        src={"/assets/homepage/home-banner.jpg"}
        alt="Bg Image "
      />

      {/* Centered text */}

      <div className="container relative flex items-center justify-center w-full ">
        <div className="w-[60%]">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h1 className="mt-4 md:mt-10 text-[40px] md:text-[85px] font-bold text-black text-center md:text-left leading-snug md:leading-tight">
              Dedicated to your <br />
              Recovery
            </h1>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-up" duration="2000">
            <h2 className="mt-4 md:mt-6 text-[26px] md:text-[20px] font-semibold text-gray-700 text-center md:text-left leading-tight">
              We have specialized in treating the victims of auto accidents
              since 2001. Let our team of dedicated medical professionals help
              you find relief from your pain and suffering.
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="mt-12 flex justify-center z-50">
              <Link
                href={"/contact"}
                // href={"/appointment"}
                className="text-white font-normal text-md md:text-lg bg-primary px-8 md:px-16 py-4 rounded-full hover:bg-green-800  cursor-pointer"
              >
                Request Appointment
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
        <div className="w-[40%]">from</div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
