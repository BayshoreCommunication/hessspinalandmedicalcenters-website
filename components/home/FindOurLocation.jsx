"use client";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FindOurLocation = () => {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/assets/homepage/find-location-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-white">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find our location near <br /> you.
              </h2>

              {/* Dropdown Input */}
              <div className="relative mb-6">
                <input
                  className="w-full appearance-none bg-white text-gray-700 py-4 px-6 rounded-md shadow focus:outline-none"
                  defaultValue="1216 Oakfield Dr Brandon, FL 33511"
                  placeholder="Enter your address"
                ></input>
                {/* Arrow Icon */}
              </div>

              {/* Button */}

              <div className="mt-12 flex justify-start z-50">
                <Link
                  href={"/contact"}
                  // href={"/appointment"}
                  className="text-white font-normal text-md md:text-lg bg-primary px-8 md:px-16 py-4 rounded-full hover:bg-green-800  cursor-pointer"
                >
                  Find Nearest Place
                </Link>
              </div>
            </ScrollMotionEffect>
          </div>

          {/* Right Section - Map */}
          <div className="w-full md:w-1/2">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.284323002121!2d-82.57165912387924!3d27.98536881317317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e9e6e573d881%3A0xb6ed0dc8071923a2!2sHess%20Spinal%20%26%20Medical%20Centers%2C%20Corporate!5e1!3m2!1sen!2sbd!4v1745742651702!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOurLocation;
