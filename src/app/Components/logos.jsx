"use client";
import { useEffect, useRef } from "react";

const ClientLogos = () => {
  const clientImages = [
    "erpsol.svg",
    "mobiledev1.svg",
    "uiiux.svg",
    "erpsol.svg",
    "mobiledev1.svg",
    "uiiux.svg",
    "erpsol.svg",
    "mobiledev1.svg",
    "uiiux.svg",
  ];

  const secondRow = [...clientImages.slice(1, 9)];

  return (
    <section className="bg-black py-4 md:py-8 lg:py-12">
      <div className="overflow-hidden space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
        {/* Scroll Row */}
        <div className="relative w-[90%] max-w-[1200px] mx-auto overflow-hidden">
          <div className="flex min-w-max animate-scroll-left space-x-6 sm:space-x-8">
            {[...secondRow, ...secondRow].map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-40 h-20 sm:w-44 sm:h-24 md:w-48 md:h-28"
              >
                <img
                  src={`/logos/${image}`}
                  alt={`Client logo ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
