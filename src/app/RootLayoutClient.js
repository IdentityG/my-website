'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import PageLoader from '@/components/PageLoader';

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const transitionRef = useRef(null);
  const lastPathnameRef = useRef(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (pathname !== lastPathnameRef.current && !isTransitioning) {
      const direction = pathname > lastPathnameRef.current ? 'right' : 'left';
      setIsTransitioning(true);
  
      if (transitionRef.current) {
        transitionRef.current.startTransition(direction)
          .then(() => {
            router.push(pathname);
            return new Promise(resolve => setTimeout(resolve, 600)); // Wait for animation
          })
          .then(() => {
            setTimeout(() => {
              if (transitionRef.current) {
                transitionRef.current.endTransition(direction);
              }
            }, 100); // Ensure it's called shortly after the transition
          })
          .catch(() => {
            setIsTransitioning(false);
          });
      }
  
      lastPathnameRef.current = pathname;
    }
  }, [pathname, router, isTransitioning]);
  
  
  

  return (
    <>
      <PageLoader />
      <Navbar transitionRef={transitionRef} />
      {children}
      <Footer />
    </>
  );
}