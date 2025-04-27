import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const SpinalMedicalCenter = () => {
  return (
    <section className="">
      <div className="container py-6 md:py-16">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h1 className="font-bold text-4xl md:text-5xl text-black text-center">
            About Hess Spinal
          </h1>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="w-full md:w-[60%] mx-auto mt-6 md:pt-10">
            <div className="video-container rounded-3xl overflow-hidden border-2 border-secondary">
              <iframe
                src={`https://www.youtube.com/embed/Zoyqx6B6v1o?si=8Dgos67WSxV-j6s-`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title=" Devit Carter"
                loading="lazy"
                className="w-full h-64 md:h-96 "
              ></iframe>
            </div>
          </div>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <p className="text-md md:text-lg text-[#55545A] text-center pt-8">
            {`Video of Name, talking about Hess Spinal & Medical Center`}
          </p>
        </ScrollMotionEffect>

        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="pt-8 flex justify-center ">
            <Link
              href={"/about"}
              className="text-white font-normal text-lg bg-secondary px-8 py-3 rounded-full hover:bg-orange-400"
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
