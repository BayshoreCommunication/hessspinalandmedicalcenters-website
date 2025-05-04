"use client";
import React from "react";

const ContactSection = () => {
  return (
    <div className="p-5 lg:p-8 bg-[#F1F1F1] rounded-2xl flex flex-col gap-3 lg:gap-5">
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border rounded-md p-3 w-full shadow-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border rounded-md p-3 w-full shadow-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md p-3 w-full shadow-sm"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border rounded-md p-3 w-full shadow-sm"
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="border rounded-md p-3 w-full shadow-sm h-32 resize-none"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 mt-4 transition duration-300 hover:scale-105  "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
