"use client";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules"; // ✅ Import Navigation module
import { mapLocationsData } from "@/config/data";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

const FindOurLocation = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

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
        <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
          {/* Text Content */}
          <div className="w-full text-white max-w-[1000px] mx-auto text-center">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                Find our location near you.
              </h2>

              {/* Select Days */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <label
                    key={day}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300"
                    />
                    <span className="text-white">{day}</span>
                  </label>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative mb-6">
                <input
                  className="w-full appearance-none bg-white text-gray-700 py-4 px-6 rounded-full shadow focus:outline-none"
                  placeholder="Enter your address"
                />
                <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
                  <Link href="/">
                    <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-4 rounded-full hover:bg-green-800 cursor-pointer">
                      <span className="relative z-10 transition-colors duration-300">
                        Find Nearest Place
                      </span>
                      <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>

          {/* Swiper */}
          <div className="w-full relative">
            <button
              ref={prevButtonRef}
              className="absolute -left-20 top-1/2 transform -translate-y-1/2 text-white bg-primary hover:text-white hover:bg-transparent p-3 border border-white rounded-full duration-400 z-40"
            >
              <FaArrowLeft size={20} />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Mousewheel]}
              ref={swiperRef}
              spaceBetween={20}
              loop={true}
              grabCursor={true}
              speed={600}
              // slidesPerView={2}
              className="mySwiper w-full"
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {mapLocationsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div>
                    <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg p-1 bg-white">
                      <iframe
                        className="w-full h-full rounded-2xl"
                        src={item.mapSrc}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <h3 className="text-white text-2xl text-center mt-4 font-semibold">
                      <p className="">{item.title}</p>
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}

            <button
              ref={nextButtonRef}
              className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-white bg-primary hover:text-white hover:bg-transparent p-3 border border-white rounded-full duration-400 z-40"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOurLocation;
