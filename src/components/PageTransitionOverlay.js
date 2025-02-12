'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PageTransitionOverlay = forwardRef(({ onTransitionEnd }, ref) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [overlayStyles, setOverlayStyles] = useState({
    backgroundColor: 'transparent',
    opacity: 0,
    display: 'none',
    zIndex: -1,
    transform: 'translateX(-100%)',
  });

  const overlayRef = useRef(null);

  // Function to start the page transition
  const startTransition = (direction = 'right') => {
    return new Promise((resolve, reject) => {
      try {
        // Prevent multiple simultaneous transitions
        if (isTransitioning) {
          reject(new Error('Transition already in progress'));
          return;
        }

        setIsTransitioning(true);

        // Initial position based on direction
        const xStart = direction === 'right' ? '-100%' : '100%';
        const xEnd = '0%';

        // Update overlay styles
        setOverlayStyles(prev => ({
          ...prev,
          backgroundColor: 'rgba(44, 83, 100, 0.9)',
          opacity: 1,
          display: 'block',
          zIndex: 9999,
          transform: `translateX(${xStart})`,
        }));

        // Create timeline for transition
        const tl = gsap.timeline({
          onComplete: () => {
            resolve();
          },
          onError: () => {
            reject(new Error('Transition failed'));
          }
        });

        // Slide in overlay
        tl.to(overlayRef.current, {
          duration: 0.6,
          x: xEnd,
          ease: 'power2.inOut',
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to end the page transition
  const endTransition = (direction = 'right') => {
    return new Promise((resolve, reject) => {
      if (!isTransitioning) {
        resolve();
        return;
      }
  
      const xEnd = direction === 'right' ? '100%' : '-100%';
  
      // Create timeline for exit
      const tl = gsap.timeline({
        onComplete: () => {
          // Ensure styles are reset
          setOverlayStyles({
            backgroundColor: 'transparent',
            opacity: 0,
            display: 'none',
            zIndex: -1,
            transform: `translateX(${xEnd})`,
          });
  
          setIsTransitioning(false);
          if (onTransitionEnd) onTransitionEnd();
          resolve();
        },
        onError: () => {
          reject(new Error('Transition exit failed'));
        }
      });
  
      // Slide out animation
      tl.to(overlayRef.current, {
        duration: 0.6,
        x: xEnd,
        opacity: 0,
        ease: 'power2.inOut',
      });
  
      // Force reset styles after animation completes
      setTimeout(() => {
        setOverlayStyles({
          backgroundColor: 'transparent',
          opacity: 0,
          display: 'none',
          zIndex: -1,
          transform: `translateX(${xEnd})`,
        });
      }, 700); // Slightly longer than animation
    });
  };
  
  
  

  // Expose methods via ref
  useEffect(() => {
    if (ref) {
      ref.current = { 
        startTransition, 
        endTransition 
      };
    }
  }, [ref]);

  return (
    <div
      ref={overlayRef}
      data-transition-overlay={true}
      className="fixed inset-0 pointer-events-none transform"
      style={overlayStyles}
    />
  );
});

PageTransitionOverlay.displayName = 'PageTransitionOverlay';

export default PageTransitionOverlay;