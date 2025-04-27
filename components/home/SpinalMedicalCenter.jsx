import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const SpinalMedicalCenter = () => {
  return (
    <section>
      <div className="container py-6 md:py-16">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h1 className="font-bold text-4xl md:text-5xl text-black text-center mb-4  md:mb-10 ">
            About Hess Spinal & Medical Center
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="w-full md:w-[60%] mx-auto  relative">
            <Link href="#">
              <Image
                src="/assets/homepage/thumbnail-img.png"
                alt="About Hess Spinal & Medical Center"
                width={1920}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex items-center justify-center w-14 h-14  lg:w-20 lg:h-20 bg-white text-primary rounded-full text-3xl z-99 cursor-pointer shadow-medium">
                <FaPlay />
              </div>
            </div>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <p className="text-md md:text-lg text-[#55545A] text-center pt-8">
            Video of Name, talking about Hess Spinal & Medical Center
          </p>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="pt-8 flex justify-center">
            <Link
              href={"/"}
              className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-green-800"
            >
              Discover More
            </Link>
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default SpinalMedicalCenter;
