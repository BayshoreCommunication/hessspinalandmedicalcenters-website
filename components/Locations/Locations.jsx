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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
    <section className="py-12">
      <div className="container p-6 md:p-16">
        {/* SEARCH SECTION */}
        <div className="border border-gray-200 rounded-3xl p-8 lg:p-12 mb-8">
          <div className="text-center max-w-[1000px] mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Find our location near you.
            </h2>

            {/* DAYS */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {daysOfWeek.map((day) => (
                <label
                  key={day}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayChange(day)}
                    className="h-5 w-5 text-primary"
                  />
                  <span>{day}</span>
                </label>
              ))}
              <button
                onClick={() => setSelectedDays([])}
                className="text-sm underline"
              >
                Clear
              </button>
            </div>

            {/* SEARCH */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Enter your address"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowDropdown(true)}
                className="w-full py-4 px-6 border rounded-full shadow"
              />

              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow max-h-60 overflow-auto"
                >
                  {loading ? (
                    <div className="p-4 text-center">Loading...</div>
                  ) : filteredClinics.length > 0 ? (
                    filteredClinics.map((clinic) => (
                      <div
                        key={clinic.id}
                        onClick={() => handleClinicSelect(clinic)}
                        className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="font-semibold">{clinic.title}</div>
                        <div className="text-sm">{clinic.address}</div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center">
                      No clinics found
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleFindNearest}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white px-8 py-4 rounded-full"
              >
                Find Nearest Place
              </button>
            </div>
          </div>
        </div>

        {/* CLINICS */}
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredClinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white p-5 rounded-3xl border shadow hover:shadow-lg"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={
                      clinic.image ||
                      "/assets/location/placeholder.png"
                    }
                    alt={clinic.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-2">
                  {clinic.title}
                </h2>

                {/* ADDRESS */}
                <Link
                  href="#"
                  className="flex gap-2 mb-1 text-gray-600 hover:text-primary items-center"
                >
                  <GrLocation className="shrink-0 "/>
                  {clinic.address}
                </Link>

                {/* ✅ MAILING ADDRESS (CONDITIONAL) */}
                {clinic.mailingAddress?.trim() && (
                  <Link
                    href="#"
                    className="flex gap-2 mb-1 text-gray-600 hover:text-primary"
                  >
                    <GrLocation  className="shrink-0"/>
                    {clinic.mailingAddress}
                  </Link>
                )}

                {/* PHONE */}
                <Link
                  href={`tel:${clinic.phone}`}
                  className="flex gap-2 mb-4 text-gray-600 hover:text-primary"
                >
                  <IoCallOutline />
                  {clinic.phone}
                </Link>

                {/* HOURS */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold underline mb-3">
                    Opening Hours
                  </h3>
                  <ul className="space-y-2">
                    {clinic.availableSchedule.map((hours, i) => {
                      const isToday = hours.day === today;
                      return (
                        <li
                          key={i}
                          className={`flex justify-between ${
                            isToday
                              ? "text-primary font-semibold"
                              : "text-gray-600"
                          }`}
                        >
                          <span className="flex gap-2">
                            <MdAccessTime />
                            {hours.day}
                          </span>
                          <span>
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
            ))}
          </div>
        </ScrollMotionEffect>
      </div>
    </section>
  );
};

export default Locations;
