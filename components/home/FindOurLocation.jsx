// "use client";
// import Link from "next/link";
// import ScrollMotionEffect from "../motion/ScrollMotionEffect";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Navigation, Pagination } from "swiper/modules"; // ✅ Import Navigation module
// import { mapLocationsData } from "@/config/data";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useEffect, useRef } from "react";

// const FindOurLocation = () => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       const swiperInstance = swiperRef.current.swiper;
//       swiperInstance.params.navigation.prevEl = prevButtonRef.current;
//       swiperInstance.params.navigation.nextEl = nextButtonRef.current;
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, []);

//   return (
//     <section
//       className="relative py-16"
//       style={{
//         backgroundImage: "url('/assets/homepage/find-location-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
//           {/* Text Content */}
//           <div className="w-full text-white max-w-[1000px] mx-auto text-center">
//             <ScrollMotionEffect effect="fade-right" duration="2000">
//               <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
//                 Find our location near you.
//               </h2>

//               {/* Select Days */}
//               <div className="flex flex-wrap gap-4 mb-6 justify-center">
//                 {[
//                   "Monday",
//                   "Tuesday",
//                   "Wednesday",
//                   "Thursday",
//                   "Friday",
//                   "Saturday",
//                   "Sunday",
//                 ].map((day) => (
//                   <label
//                     key={day}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300"
//                     />
//                     <span className="text-white">{day}</span>
//                   </label>
//                 ))}
//               </div>

//               {/* Search Input */}
//               <div className="relative mb-6">
//                 <input
//                   className="w-full appearance-none bg-white text-gray-700 py-4 px-6 rounded-full shadow focus:outline-none"
//                   placeholder="Enter your address"
//                 />
//                 <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
//                   <Link href="/">
//                     <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-4 rounded-full hover:bg-green-800 cursor-pointer">
//                       <span className="relative z-10 transition-colors duration-300">
//                         Find Nearest Place
//                       </span>
//                       <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </ScrollMotionEffect>
//           </div>

//           {/* Swiper */}
//           <div className="w-full relative">
//             <button
//               ref={prevButtonRef}
//               className="absolute -left-20 top-1/2 transform -translate-y-1/2 text-white bg-primary hover:text-white hover:bg-transparent p-3 border border-white rounded-full duration-400 z-40"
//             >
//               <FaArrowLeft size={20} />
//             </button>
//             <Swiper
//               modules={[Navigation, Pagination, Mousewheel]}
//               ref={swiperRef}
//               spaceBetween={20}
//               loop={true}
//               grabCursor={true}
//               speed={600}
//               // slidesPerView={2}
//               className="mySwiper w-full"
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {mapLocationsData.map((item, idx) => (
//                 <SwiperSlide key={idx}>
//                   <div>
//                     <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg p-1 bg-white">
//                       <iframe
//                         className="w-full h-full rounded-2xl"
//                         src={item.mapSrc}
//                         allowFullScreen
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                       ></iframe>
//                     </div>
//                     <h3 className="text-white text-2xl text-center mt-4 font-semibold">
//                       <p className="">{item.title}</p>
//                     </h3>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Buttons */}

//             <button
//               ref={nextButtonRef}
//               className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-white bg-primary hover:text-white hover:bg-transparent p-3 border border-white rounded-full duration-400 z-40"
//             >
//               <FaArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindOurLocation;

// *************************************************************************************************

// "use client";
// import Link from "next/link";
// import ScrollMotionEffect from "../motion/ScrollMotionEffect";

// const FindOurLocation = () => {
//   return (
//     <section
//       className="relative py-16 bg-[#004d40]/80"
//       style={{
//         backgroundImage: "url('/assets/homepage/find-location-bg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Section */}
//           <div className="w-full lg:w-7/12 text-white">
//             <ScrollMotionEffect effect="fade-right" duration="2000">
//               <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
//                 Find our location near you.
//               </h2>
//               {/* Select Days */}

//               <div className="flex flex-wrap gap-4 mb-6 justify-start">
//                 {" "}
//                 {[
//                   "Monday",
//                   "Tuesday",
//                   "Wednesday",
//                   "Thursday",
//                   "Friday",
//                   "Saturday",
//                   "Sunday",
//                 ].map((day) => (
//                   <label
//                     key={day}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-5 w-5 text-primary rounded-md border-gray-300"
//                     />
//                     <span className="text-white">{day}</span>
//                   </label>
//                 ))}
//               </div>
//               {/* Search Input */}
//               <div className="relative mb-6">
//                 <input
//                   className="w-full appearance-none bg-white text-gray-700 py-4 px-6 rounded-full shadow focus:outline-none"
//                   placeholder="Enter your address"
//                 />
//                 <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
//                   <Link href="/">
//                     <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-12 py-4 rounded-full hover:bg-green-800 cursor-pointer">
//                       <span className="relative z-10 transition-colors duration-300">
//                         Find Nearest Place
//                       </span>
//                       <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </ScrollMotionEffect>
//           </div>

//           {/* Right Section - Map */}
//           <div className="w-full lg:w-5/12">
//             <ScrollMotionEffect effect="fade-left" duration="2000">
//               <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border">
//                 <iframe
//                   className="w-full h-full"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.284323002121!2d-82.57165912387924!3d27.98536881317317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e9e6e573d881%3A0xb6ed0dc8071923a2!2sHess%20Spinal%20%26%20Medical%20Centers%2C%20Corporate!5e1!3m2!1sen!2sbd!4v1745742651702!5m2!1sen!2sbd"
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </ScrollMotionEffect>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindOurLocation;

// ************************************************************************************************

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
            <div className="grid grid-cols-1">
              <div>
                <div className="relative h-[250px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg p-1 bg-white">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.284323002121!2d-82.57165912387924!3d27.98536881317317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e9e6e573d881%3A0xb6ed0dc8071923a2!2sHess%20Spinal%20%26%20Medical%20Centers%2C%20Corporate!5e1!3m2!1sen!2sbd!4v1745742651702!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h3 className="text-white text-2xl text-center mt-4 font-semibold">
                  <p className="">PLANT CITY CLINIC</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOurLocation;
