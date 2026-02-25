'use client';

import Lottie from 'lottie-react';
import rocketAnimation from '@/public/animations/Rocket Lunch.json';
import { useScrolledPast } from '@/hooks/useScrollPosition';
import { useModal } from '@/contexts/ModalContext';

export default function BackToTop() {
  const isVisible = useScrolledPast(300);
  const { isModalOpen } = useModal();

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && !isModalOpen && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-20 h-20 transition-all duration-300 transform hover:scale-125 hover:-translate-y-3 flex items-center justify-center group"
          aria-label="Back to top"
        >
          {/* Lottie Rocket Animation */}
          <div className="w-full h-full">
            <Lottie 
              animationData={rocketAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </button>
      )}
    </>
  );
}
