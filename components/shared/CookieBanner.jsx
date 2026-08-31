"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-auto">
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => setIsVisible(false)}
          />

          {/* Centered Cookie Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-[9999] w-full max-w-[460px]"
          >
            <div className="bg-[#07381e] text-white p-6 sm:p-7 rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-[#037B40]/70 flex flex-col justify-between">
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
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
