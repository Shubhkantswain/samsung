import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Route = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null; // Prevent hydration mismatch

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      {/* Samsung-Style Clock */}
      <div
        className="absolute top-20 text-center text-gray-100 cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <h1 className="text-6xl font-bold">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
        </h1>
        <p className="text-xs text-gray-300">
          {time.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" })}
        </p>
      </div>

      {/* Icons at Bottom */}
      <div className="absolute bottom-5 w-full flex justify-between px-2">
        <button className="p-1 bg-white/10 hover:bg-white/20 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
            <path d="M6.6 10.2c1.2 2.3 3 4.2 5.2 5.5l1.7-1.7c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.5 0 .9.4.9.9v3.7c0 .5-.4.9-.9.9C9.4 20 4 14.6 4 8.1c0-.5.4-.9.9-.9h3.7c.5 0 .9.4.9.9 0 1.1.2 2.2.6 3.1.1.4.1.9-.2 1.2l-1.7 1.7z" />
          </svg>
        </button>

        <button className="p-1 bg-white/10 hover:bg-white/20 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-5">
            <path d="M20 5h-3.2l-1.8-2H9L7.2 5H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
          </svg>
        </button>
      </div>

      {/* Bottom Sheet Menu */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-full max-h-[60vh] bg-[#111111] p-4 rounded-t-lg shadow-lg overflow-y-auto"
    >
      {/* Small Down Arrow */}
      <div className="flex justify-center mb-3">
        <button onClick={() => setIsMenuOpen(false)} className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M12 16.5L5 9.5l1.5-1.5L12 13.5l5.5-5.5L19 9.5l-7 7z" />
          </svg>
        </button>
      </div>

      {/* Grid Layout for Items */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full aspect-square bg-gray-800 text-white rounded-lg shadow-md"
          >
            Item {index + 1}
          </div>
        ))}
      </div>

      {/* Row of 8 Colors */}
      <div className="flex justify-center gap-3 mt-4">
        {["#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00", "#00ffff"].map((color, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>










    </div>
  );
};

export default Route;
