"use client";
import { locationsInfo } from "@/config/locationsInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const normalizeClinics = (clinics) =>
  clinics.map((clinic) => ({
    ...clinic,
    searchIndex: `${clinic.address}`.toLowerCase(),
    availableDays: clinic.availableSchedule.map((s) => s.day.toLowerCase()),
  }));

const normalizedClinics = normalizeClinics(locationsInfo);

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Locations = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const dropdownRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [filteredClinics, setFilteredClinics] = useState(normalizedClinics);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
    setSelectedClinic(null);
    setSearchText("");
  };

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
    setSearchText(clinic.address);
    setShowDropdown(false);
  };

  const handleFindNearest = () => {
    setLoading(true);
    setShowDropdown(true);
    setSelectedClinic(null);

    const search = searchText.trim().toLowerCase();
    const days = selectedDays.map((day) => day.toLowerCase());

    const matchedClinics = normalizedClinics.filter((clinic) => {
      const matchesDays =
        days.length === 0 ||
        days.some((day) => clinic.availableDays.includes(day));
      const matchesSearch = !search || clinic.searchIndex.includes(search);
      return matchesDays && matchesSearch;
    });

    setTimeout(() => {
      setFilteredClinics(matchedClinics.length > 0 ? matchedClinics : []);
      setLoading(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFindNearest();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const search = searchText.trim().toLowerCase();
    const days = selectedDays.map((day) => day.toLowerCase());

    const matchedClinics = normalizedClinics.filter((clinic) => {
      const matchesDays =
        days.length === 0 ||
        days.some((day) => clinic.availableDays.includes(day));
      const matchesSearch = !search || clinic.searchIndex.includes(search);
      return matchesDays && matchesSearch;
    });

    setFilteredClinics(matchedClinics.length > 0 ? matchedClinics : []);
  }, [searchText, selectedDays]);

  return (
    <div>
      <section className="py-12">
        <div className="container p-6 md:p-16">
          <div className="border border-gray-200 rounded-3xl p-8 lg:p-12 mb-8">
            <div className="flex flex-col items-center justify-between gap-5 lg:gap-8">
              {/* Heading */}
              <div className="w-full text-black max-w-[1000px] text-center mx-auto">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                  Find our location near you.
                </h2>

                {/* Day Selector  */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {daysOfWeek.map((day) => (
                    <label
                      key={day}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDays.includes(day)}
                        onChange={() => handleDayChange(day)}
                        className="form-checkbox h-5 w-5 text-primary border-gray-300"
                      />
                      <span className="text-black">{day}</span>
                    </label>
                  ))}
                  <button
                    onClick={() => setSelectedDays([])}
                    className="text-black underline text-sm"
                  >
                    Clear
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative mb-6 w-full max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowDropdown(true)}
                    className="w-full bg-white text-gray-700 py-4 px-6 border rounded-full shadow focus:outline-none"
                  />

                  {/* Search Results Dropdown */}
                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto"
                    >
                      {loading ? (
                        <div className="p-4 text-center text-gray-500">
                          Loading...
                        </div>
                      ) : filteredClinics.length > 0 ? (
                        filteredClinics.map((clinic) => (
                          <div
                            key={clinic.id}
                            className="p-3 hover:bg-gray-100 cursor-pointer border-b text-gray-800"
                            onClick={() => handleClinicSelect(clinic)}
                          >
                            <div className="font-semibold">{clinic.title}</div>
                            <div className="text-sm">{clinic.address}</div>
                            {selectedDays.length > 0 && (
                              <div className="text-xs text-gray-500">
                                {clinic.availableSchedule
                                  .filter((schedule) =>
                                    selectedDays.includes(schedule.day)
                                  )
                                  .map(
                                    (s) =>
                                      `${s.day}: ${Array.isArray(s.time) ? s.time.join(", ") : s.time}`
                                  )
                                  .join(" | ")}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          {selectedDays.length > 0
                            ? "No clinics open on selected days"
                            : "No clinics found matching your search"}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Find Button */}
                  <div className="group hover:scale-105 transition duration-300 text-center absolute right-0 top-1/2 transform -translate-y-1/2 z-40">
                    <button
                      onClick={handleFindNearest}
                      className="relative overflow-hidden text-white font-normal text-md md:text-lg bg-primary px-8 md:px-20 py-4 rounded-full hover:bg-green-800 cursor-pointer"
                    >
                      <span className="relative z-10">Find Nearest Place</span>
                      <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10">
            <ScrollMotionEffect effect="fade-up" duration="2000">
              <div className="">
                {filteredClinics.length === 0 ? (
                  <div className="mt-10 text-center">
                    No clinics open on selected days
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {filteredClinics.map((clinic) => (
                      <div
                        key={clinic.id}
                        className="group bg-white p-4 lg:p-5 rounded-3xl shadow-medium  border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        {/* Clinic Image */}
                        <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4">
                          <Image
                            src={
                              clinic.image
                                ? clinic.image
                                : "/assets/location/placeholder.png"
                            }
                            alt={clinic.locationName}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                          />
                        </div>

                        {/* Clinic Info */}
                        <div className="">
                          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-gray-800">
                            {clinic.title}
                          </h2>

                          <div className="mb-4">
                            <Link
                              href="#"
                              className="text-gray-600 mb-1 flex items-center gap-2 hover:text-primary duration-300 font-medium"
                            >
                              <GrLocation className="shrink-0" />
                              {clinic.address}
                            </Link>
                            <Link
                              href={`tel:${clinic.phone}`}
                              className="text-gray-600 mb-1 flex items-center gap-2 hover:text-primary duration-300 font-medium"
                            >
                              <IoCallOutline className="shrink-0" />
                              {clinic.phone}
                            </Link>
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <h3 className="text-xl font-semibold text-gray-700 mb-3 underline">
                              Opening Hours
                            </h3>
                            <ul className="space-y-3">
                              {clinic.availableSchedule.map((hours, index) => {
                                const isToday = hours.day === today;
                                return (
                                  <li
                                    key={index}
                                    className={`flex justify-between gap-8 font-normal ${
                                      isToday
                                        ? "text-primary font-semibold"
                                        : "text-gray-600"
                                    }`}
                                  >
                                    <span className="mb-1 flex items-center gap-2">
                                      <MdAccessTime className="shrink-0" />
                                      {hours.day}
                                    </span>
                                    <span className="mb-1 flex items-center gap-2">
                                      {Array.isArray(hours.time)
                                        ? hours.time.join(", ")
                                        : hours.time}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
