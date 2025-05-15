"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "E-COMMERCE",
      subtitle: "Centralized Platforms For Enhanced Business Processes",
      features: [
        {
          title: "USER-FRIENDLY STOREFRONT",
          description: "Design intuitive, visually appealing storefronts showcasing products effectively.",
        },
        {
          title: "SECURE PAYMENT INTEGRATION",
          description: "Enable secure transactions with credit/debit cards, digital wallets, and BNPL solutions.",
        },
        {
          title: "PRODUCT MANAGEMENT SYSTEM",
          description: "Manage inventory, pricing, and promotions with real-time updates.",
        },
      ],
    },
    {
      title: "WEBSITE DEVELOPMENT",
      subtitle: "Custom-Built Sites for Modern Businesses",
      features: [
        {
          title: "CUSTOMER PORTALS",
          description: "Provide personalized access for customers to manage their accounts.",
        },
        {
          title: "EMPLOYEE PORTALS",
          description: "Enable your team to collaborate efficiently with task management tools.",
        },
        {
          title: "REAL-TIME ANALYTICS",
          description: "Monitor engagement and sales with live dashboards.",
        },
      ],
    },
    {
      title: "M-COMMERCE",
      subtitle: "Mobile Solutions for On-the-Go Sales",
      features: [
        {
          title: "RESPONSIVE STOREFRONT",
          description: "Mobile-friendly shopping experience prioritizing speed and efficiency.",
        },
        {
          title: "MOBILE PAYMENT INTEGRATION",
          description: "Secure payment options including Apple Pay and Google Pay.",
        },
        {
          title: "INVENTORY MANAGEMENT",
          description: "Track and manage product details effortlessly from mobile.",
        },
      ],
    },
    {
      title: "UI/UX DESIGN",
      subtitle: "Crafting Stunning Interfaces",
      features: [
        {
          title: "WIREFRAMING",
          description: "Build structural blueprints of your app with ease.",
        },
        {
          title: "PROTOTYPING",
          description: "Test design interactions before final development.",
        },
        {
          title: "DESIGN SYSTEMS",
          description: "Maintain visual consistency using reusable components.",
        },
      ],
    },
    {
      title: "AI-POWERED SOLUTIONS",
      subtitle: "Boost Efficiency With AI Tools",
      features: [
        {
          title: "CHATBOTS",
          description: "Automate customer interactions with intelligent bots.",
        },
        {
          title: "RECOMMENDER SYSTEMS",
          description: "Personalize user experience with product suggestions.",
        },
        {
          title: "IMAGE RECOGNITION",
          description: "Leverage vision AI for automation and analysis.",
        },
      ],
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-black text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative flex items-center justify-center">
          <img
            src="/images/right.svg"
            alt="Left Decoration"
            className="hidden md:block absolute left-[-120px] top-1/2 transform -translate-y-1/2 w-40 h-40"
          />
          <img
            src="/images/left.svg"
            alt="Right Decoration"
            className="hidden md:block absolute right-[-120px] top-1/2 transform -translate-y-1/2 w-40 h-40"
          />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">WHAT WE DO BEST</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              We craft end‑to‑end tech solutions—spanning strategy, design, and development—that turn bold ideas into resilient, user‑focused products.
            </p>
          </div>
        </div>

        {/* Slides */}
        <div className="relative h-[500px] sm:h-[650px] flex items-center justify-center sm:px-2">
          {/* Background image */}
          <img
            src="/images/cardsBg.svg"
            alt="Background pattern"
            className="absolute inset-0 w-full h-full object-contain opacity-100 pointer-events-none z-0"
          />

          {slides.map((slide, index) => {
            let offset = index - activeIndex;
            // Adjust offset to only show 3 slides at a time
            if (offset < -1) offset += slides.length;
            if (offset > 1) offset -= slides.length;

            // Only show the active slide and the immediate left/right slides
            const visible = Math.abs(offset) <= 1;
            if (!visible) return null;

            const scale = offset === 0 ? 1 : 0.85;
            const zIndex = offset === 0 ? 30 : 20 - Math.abs(offset) * 10;
            const translateX = offset * 67;
            const bgOpacity = offset === 0 ? 0.08 : 0.04; // Half opacity for side cards
            const borderOpacity = offset === 0 ? 0.15 : 0.075; // Half opacity for side cards

            return (
              <div
                key={index}
                className="absolute left-1/2 w-full max-w-sm transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-50%) translateX(${translateX}%) scale(${scale})`,
                  zIndex,
                  height: "480px",
                }}
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-[#7AE8FF] rounded-3xl blur-2xl opacity-25 z-0" />
                  <div
                    className="relative rounded-3xl px-6 py-4 h-full flex flex-col z-10 backdrop-blur-lg shadow-xl"
                    style={{
                      backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
                      border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
                    }}
                  >
                    {/* Decorative dots - always visible */}
                    <>
                      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white" />
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white" />
                      <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-white" />
                      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-white" />
                    </>

                    {/* Icon Center - always visible */}
                    <div className="absolute mt-4 left-1/2 transform -translate-x-1/2">
                      <LayoutGrid size={36} className="text-white mb-3" />
                    </div>

                    <div className="text-center mb-6 mt-14">
                      <h3 className="font-semibold text-xl">{slide.title}</h3>
                      <p className="text-gray-300 text-sm">{slide.subtitle}</p>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                      {slide.features.map((feature, idx) => (
                        <div key={idx}>
                          <h4 className="font-bold text-sm text-blue-300">• {feature.title}</h4>
                          <p className="mt-1 text-xs text-gray-300">{feature.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="text-right mt-2">
                      <button className="underline text-white hover:text-blue-200 text-sm transition">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-[-60px] space-x-3 relative z-10">
          <button
            className="bg-gray-700/60 rounded-full p-3 hover:bg-gray-600 transition"
            onClick={handlePrevious}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="bg-gray-700/60 rounded-full p-3 hover:bg-gray-600 transition"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;