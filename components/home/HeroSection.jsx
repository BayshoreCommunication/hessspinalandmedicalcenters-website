"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);
  const [marriedStatusDropdown, setIsMarriedStatusDropdown] = useState(false);
  const [selectData, setSelectDate] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const onMarriedStatusHandler = (value) => {
    setIsMarriedStatusDropdown(false);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const text =
    "After an Accident, You're Family- Specialized Medical Care When You Need It Most.".split(
      " "
    );

  return (
    <div className="relative w-full h-[930px] md:h-[750px] flex items-center justify-center mt-[64px] md:mt-[110px]">
      <Image
        className="absolute inset-0 object-cover bg-top w-full h-full"
        width={3000}
        height={700}
        src={"/assets/homepage/home-banner1.jpg"}
        alt="Bg Image "
      />

      {/* Centered text */}

      <div className="container relative flex md:flex-row flex-col items-center justify-center w-full space-x-0 md:space-x-16">
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="w-full md:w-[65%]"
        >
          <h1 className="text-[35px] md:text-[48px] lg:text-6xl font-bold text-black text-center md:text-left leading-snug md:leading-none">
            {/* After an Accident, You're Family- Specialized Medical Care When You
            Need It Most. */}
            {text.map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index / 10 }}
                key={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            variants={variants}
            className="mt-2 md:mt-6 text-[18px] md:text-[20px] font-semibold text-gray-700 text-center md:text-left leading-tight"
          >
            We have specialized in treating the victims of auto accidents since
            2001. Let our team of dedicated medical professionals help you find
            relief from your pain and suffering. Request Appointment
          </motion.h2>

          <motion.div
            variants={variants}
            className=" flex justify-center md:justify-start z-50"
          >
            <ul className=" flex items-center gap-3 mt-5">
              <li className="px-4 py-3 bg-white shadow-small rounded">
                Walk-Ins Welcome
              </li>
              <li className="px-4 py-3 bg-white shadow-small rounded">
                Same Day Appointments
              </li>
              <li className="px-4 py-3 bg-white shadow-small rounded">
                16 Convenient Locations
              </li>
              <li className="px-4 py-3 bg-white shadow-small rounded">
                Hablamos Su Idioma
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={variants}
            className="mt-4 md:mt-8 flex justify-center md:justify-start z-50"
          >
            <div className="group hover:scale-105  transition duration-300">
              <Link href="/">
                <button className="relative overflow-hidden text-white font-normal text-lg bg-primary px-8 md:px-16 py-4 rounded-full cursor-pointer">
                  <span className="relative z-10 transition-colors duration-300">
                    Request Appointment
                  </span>
                  <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full md:w-[35%] mt-10 md:mt-0">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="bg-white py-8 md:py-14 px-4 md:px-8 rounded-2xl">
              <h2 className=" md:mt-6 text-[26px] md:text-[30px] font-semibold text-gray-800 text-center leading-tight">
                Request a Consultation
              </h2>
              <div className="w-full mt-6">
                <input
                  autoComplete="off"
                  type="text"
                  id="clientInfoForm.fullName"
                  className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
                  placeholder="Your full name"
                  name="name"
                />
                <span className="text-red-500"></span>
              </div>
              <div className="w-full mt-5">
                <input
                  autoComplete="off"
                  type="text"
                  id="clientInfoForm.fullName"
                  className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
                  placeholder="Your phone"
                  name="name"
                />
                <span className="text-red-500"></span>
              </div>
              <div className="w-full mt-5">
                <div className="relative inline-block w-full">
                  <button
                    id="marital-status-dropdown"
                    onClick={() =>
                      setIsMarriedStatusDropdown(!marriedStatusDropdown)
                    }
                    className="px-5  text-gray-600  hover:bg-[#eeeeee] focus:outline-none focus:ring-1 inline-flex items-center justify-between capitalize bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary  w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={marriedStatusDropdown}
                  >
                    <span>Select Purpose</span>
                    <svg
                      className="w-2.5 h-2.5 ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* <span className="text-red-500">
                  {formErrors?.maritalStatus}
                </span> */}

                  {marriedStatusDropdown && (
                    <div
                      className="absolute z-10 w-full mt-2 bg-[#eeeeee] border border-gray-300 rounded-lg shadow-md"
                      role="menu"
                      aria-labelledby="marital-status-dropdown"
                    >
                      <ul className="divide-y divide-gray-200">
                        {["Demo One", "Demo Two"].map((status) => (
                          <li key={status}>
                            <button
                              onClick={() =>
                                onMarriedStatusHandler(status.toLowerCase())
                              }
                              className="block w-full px-4 py-2 text-left text-lg text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              {status}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="w-full mt-5">
                <DatePickerInputField
                  id="basicInformation.dateOfBirth"
                  name="basicInformation.dateOfBirth"
                  value={selectData}
                  setSelectDate={setSelectDate}
                  placeholder="Select birth date"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
                <div className="w-full">
                  <input
                    autoComplete="off"
                    type="text"
                    id="clientInfoForm.fullName"
                    className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
                    placeholder="Location"
                    name="name"
                  />
                  <span className="text-red-500"></span>
                </div>
                <div className="w-full ">
                  <input
                    autoComplete="off"
                    type="text"
                    id="clientInfoForm.fullName"
                    className="bg-white border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400 active:border-primary outline-none"
                    placeholder="Time"
                    name="name"
                  />
                  <span className="text-red-500"></span>
                </div>
              </div> */}
              <div className="group hover:scale-105  transition duration-300 mt-8 text-center">
                <Link href="/">
                  <button className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-3 rounded-full hover:bg-green-800  cursor-pointer">
                    <span className="relative z-10 transition-colors duration-300">
                      Submit
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
