"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
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
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[9998]"
            onClick={() => setIsVisible(false)}
          />

          {/* Centered Cookie Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: "-45%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: "-45%", x: "-50%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 z-[9999] w-[92%] sm:w-[440px] max-w-[480px] pointer-events-auto"
          >
            <div className="bg-[#07381e] text-white p-6 sm:p-7 rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-[#037B40]/70 flex flex-col justify-between">
              <p className="text-center text-sm sm:text-base font-semibold leading-relaxed text-slate-100">
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

              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer active:scale-95 text-center flex items-center justify-center border border-white/20"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="w-full py-3 px-4 rounded-xl bg-[#037B40] hover:bg-[#025a2e] text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-lg cursor-pointer active:scale-95 text-center flex items-center justify-center border border-emerald-500/40"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
