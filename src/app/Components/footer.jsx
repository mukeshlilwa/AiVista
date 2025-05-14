import {
    FaArrowRight,
    FaPhoneAlt,
    FaEnvelope,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="w-full bg-[#121212] text-white relative overflow-hidden">
        {/* Background Dots - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-[-200px] h-full z-0">
          <img
            src="/images/rightDots.svg"
            alt="Left Dots BG"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="hidden md:block absolute top-0 right-[-170px] h-full z-0">
          <img
            src="/images/leftDots.svg"
            alt="Right Dots BG"
            className="h-full w-auto object-cover"
          />
        </div>
  
        <div className="relative z-10 flex w-full flex-col md:flex-row">
          {/* Left Dot Layout Spacer */}
          <div className="hidden md:block w-[140px] shrink-0 md:flex justify-center items-start pt-8" />
  
          {/* Main Footer Content */}
          <div className="flex-1 px-4 py-8 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex-[0.7] min-w-[120px]">
              <img
                src="/images/logoVista.svg"
                alt="Logo"
                className="mb-4 w-20 h-auto"
              />
            </div>
  
            {/* Quick Links */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-lg font-semibold mb-4">
                Quick Links
                <span className="block border-b-2 border-[#00A8A8] w-12 mt-1"></span>
              </h4>
              <ul className="space-y-2">
                {["Home", "About Us", "Services", "Company"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaArrowRight className="text-sm text-[#00A8A8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services */}
            <div className="flex-[1.3] min-w-[180px]">
              <h4 className="text-lg font-semibold mb-4">
                Services
                <span className="block border-b-2 border-[#00A8A8] w-14 mt-1"></span>
              </h4>
              <ul className="space-y-2">
                {[
                  "Software Development",
                  "Web Development",
                  "Data Science",
                  "Others",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaArrowRight className="text-sm text-[#00A8A8]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Locations */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-lg font-semibold mb-4">
                Locations
                <span className="block border-b-2 border-[#00A8A8] w-12 mt-1"></span>
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "UK", code: "gb" },
                  { name: "United States", code: "us" },
                  { name: "Saudi Arabia", code: "sa" },
                  { name: "Pakistan", code: "pk" },
                ].map((loc, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <span>{loc.name}</span>
                    <img
                      src={`https://flagcdn.com/w40/${loc.code}.png`}
                      alt={loc.name}
                      className="w-5 h-5 object-cover rounded-full border border-white"
                    />
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Us */}
            <div className="flex-1 min-w-[180px]">
              <h4 className="text-lg font-semibold mb-4">
                Contact Us
                <span className="block border-b-2 border-[#00A8A8] w-16 mt-1"></span>
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white" />
                  <span>+44-7970128689</span>
                </div>
                <div className="text-left">
                  <span>United States:</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white" />
                  <span>+966-568238964</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white" />
                  <span>+92-3052233404</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-white" />
                  <span>info@aivistasolutions.com</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Dot Layout Spacer */}
          <div className="hidden md:block w-[140px] shrink-0 md:flex justify-center items-start pt-8" />
        </div>
  
        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-gray-700 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
          {/* LinkedIn icons */}
          <div className="order-1 md:order-2 flex space-x-3 mb-4 md:mb-0">
            {[...Array(3)].map((_, i) => (
              <a
                key={i}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full"
              >
                <img
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
  
          {/* Copyright */}
          <p className="order-2 md:order-1">
            Design and Develop by{" "}
            <span className="text-[#00A8A8]">AI Vista Solutions</span>, All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
  