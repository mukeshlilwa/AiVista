"use client";
import Image from "next/image";
import LandingBackground from "./Background/landingBackground";

const AboutUs = () => {
  return (
    <section className="w-full bg-black text-white py-5 relative overflow-hidden">
      {/* Grid Background */}
      <LandingBackground />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Image Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[400px]">
          {/* Left full-height image */}
          <div className="row-span-2 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/about1.svg"
              alt="About us 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Right column with final balanced heights */}
          <div className="flex flex-col gap-4">
            {/* Top right image - 270px */}
            <div className="relative rounded-2xl overflow-hidden h-[270px]">
              <Image
                src="/images/about2.svg"
                alt="About us 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom right image - 140px */}
            <div className="relative rounded-2xl overflow-hidden h-[140px]">
              <Image
                src="/images/about3.svg"
                alt="About us 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left order-first md:order-none">
          <h2 className="text-3xl sm:text-4xl font-bold">ABOUT US</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            At <span className="text-[#00FFFF]">[AI Vista Solutions]</span>, we are more than just a development
            company—we are innovators, problem solvers, and technology
            enthusiasts committed to building digital solutions that drive
            success. With a passion for cutting-edge development and a deep
            understanding of modern technology, we help businesses transform
            their ideas into scalable, high-performing solutions.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Our team of skilled developers, designers, and strategists work
            collaboratively to deliver seamless, user-friendly experiences.
            Whether it’s web development, mobile apps, or custom software
            solutions, we ensure that every project is tailored to meet the
            unique needs of our clients.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
