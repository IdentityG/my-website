"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const PageLoader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    // Logo spin and fade-in effect
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.5, rotate: 0 },
      { opacity: 1, scale: 1, rotate: 360, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(textRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5" // Starts slightly before logo animation finishes
    )
    .to(logoRef.current, { scale: 1.2, duration: 0.5, ease: "power1.inOut" })
    .to(textRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.3")
    .to(loaderRef.current, { opacity: 0, duration: 1, ease: "power2.inOut", onComplete: () => setIsLoading(false) });

  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#2C5364] to-[#203A43] via-[#0F2027] z-[9999] transition-opacity duration-500"
    >
      {/* Rotating Logo */}
      <div 
        ref={logoRef}
        className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
      >
        <svg className="w-12 h-12 text-[#2C5364]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      {/* Loading Text */}
      <h1 ref={textRef} className="mt-6 text-white text-xl font-semibold tracking-wide opacity-0">
        Loading your experience...
      </h1>
    </div>
  );
};

export default PageLoader;
