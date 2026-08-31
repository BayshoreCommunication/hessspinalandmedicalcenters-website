"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // In case localStorage is disabled or blocked
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch (e) {
      console.error("Could not save cookie preference", e);
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "declined");
    } catch (e) {
      console.error("Could not save cookie preference", e);
    }
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[9999] w-[92%] sm:w-[380px] max-w-[420px] pointer-events-auto"
        >
          <div className="bg-[#07381e] text-white p-5 sm:p-6 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#037B40]/60 backdrop-blur-md flex flex-col justify-between">
            <p className="text-center sm:text-left text-sm sm:text-base font-semibold leading-relaxed text-slate-100">
              We use cookies to improve your experience and analyze site
              traffic. See our{" "}
              <Link
                href="/privacy-policy"
                className="underline text-[#4ade80] hover:text-[#86efac] transition-colors decoration-1 underline-offset-2 font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5">
              <button
                type="button"
                onClick={handleDecline}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer active:scale-95 text-center flex items-center justify-center border border-white/20"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="w-full py-2.5 px-4 rounded-xl bg-[#037B40] hover:bg-[#025a2e] text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-md cursor-pointer active:scale-95 text-center flex items-center justify-center border border-emerald-500/30"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
