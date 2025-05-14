"use client";
import { useEffect, useState, useRef } from "react";

const logos = [
  "/logos/Frame 47.png",
  "/logos/Frame 45.png",
  "/logos/Frame 45 (1).png",
  "/logos/Frame 46.png",
];

export default function Partners() {
  const [animationDuration, setAnimationDuration] = useState(20);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateAnimationSpeed = () => {
      if (window.innerWidth <= 768) {
        setAnimationDuration(8);
      } else if (window.innerWidth <= 1024) {
        setAnimationDuration(12);
      } else {
        setAnimationDuration(15);
      }
    };

    updateAnimationSpeed();
    window.addEventListener("resize", updateAnimationSpeed);

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-33.33%); }
      }
      
      .slider-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        background-color: #000;
        padding: 1rem 0;
      }
      
      .slide-track {
        display: flex;
        width: 300%;
        animation: slide ${animationDuration}s linear infinite;
        will-change: transform;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
      }
      
      .slide-track.paused {
        animation-play-state: paused;
      }
      
      .logo-item {
        flex-shrink: 0;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%; /* Allow the logo item to expand */
      }
      
      .logo-image {
        transition: all 0.3s ease;
        filter: grayscale(100%) brightness(0.8) opacity(0.7);
        object-fit: contain;
        width: auto; /* Allow the width to scale */
        max-height: 120px; /* Default height for logos */
        height: auto;
      }
      
      .logo-image:hover {
        filter: grayscale(0) brightness(1) opacity(1);
        transform: scale(1.05);
      }
      
      .gradient-overlay::before,
      .gradient-overlay::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 120px;
        z-index: 2;
        pointer-events: none;
      }
      
      .gradient-overlay::before {
        left: 0;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      }
      
      .gradient-overlay::after {
        right: 0;
        background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      }

      /* Mobile View - Increased logo sizes */
      @media (max-width: 768px) {
        .slider-container {
        width: 400%;
          padding: 0.75rem 0;
          margin-top: -6rem; /* Adjusted negative margin */
          
        }
        
        .logo-item {
          padding: 0 10px; /* Increased padding for better spacing */
        }
        
        .logo-image {
          max-height: 150px !important; /* Increased logo size on mobile */
          filter: grayscale(100%) brightness(0.9) opacity(0.85);
        }
        
        .gradient-overlay::before,
        .gradient-overlay::after {
          width: 60px; /* Adjusted gradient overlay width */
        }
      }

      /* Small Phones */
      @media (max-width: 375px) {
        .slider-container {
        width:200%
          margin-top: -1rem;
          padding: 0.5rem 0;
          
        }
        
        .logo-image {
          max-height: 120px !important; /* Increased from 100px */
        }
      }

      /* Tablets */
      @media (min-width: 769px) and (max-width: 1023px) {
        .slider-container {
          margin-top: -10rem;
          padding: 1rem 0;
        }
        
        .logo-image {
          max-height: 150px !important; /* Increased from 120px */
        }
      }

      /* Laptops */
      @media (min-width: 1024px) and (max-width: 1440px) {
        .slider-container {
          margin-top: -1.5rem;
        }
        
        .logo-image {
          max-height: 160px !important; /* Maintain large size on laptop */
        }
      }

      /* Landscape Orientation */
      @media (max-width: 768px) and (orientation: landscape) {
        .slider-container {
          margin-top: -12rem;
          padding: 0.5rem 0;
        }
        
        .logo-image {
          max-height: 150px !important; /* Increased height for better visibility on landscape */
        }
      }
    `;
    document.head.appendChild(style);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setTimeout(() => setIsPaused(false), 10);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", updateAnimationSpeed);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [animationDuration]);

  const expandedLogos = [...logos, ...logos, ...logos];
  return (
    <section className="bg-black md:py-8 -mt-6 md:-mt-8 lg:-mt-6">
      <div className="container mx-auto px-4">
        <div className="slider-container gradient-overlay">
          <div
            ref={sliderRef}
            className={`slide-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {expandedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="logo-item"
                style={{ width: `${100 / expandedLogos.length}%` }}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${(index % logos.length) + 1}`}
                  loading="lazy"
                  className="logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
