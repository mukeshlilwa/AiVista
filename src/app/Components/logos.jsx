'use client';

import {
  Code,
  Smartphone,
  LayoutDashboard,
  Brain,
  Users,
  Server,
} from 'lucide-react';

const iconData = [
  { icon: Code, label: 'Web Development' },
  { icon: Smartphone, label: 'App Development' },
  { icon: LayoutDashboard, label: 'UI/UX Design' },
  { icon: Brain, label: 'AI Solutions' },
  { icon: Users, label: 'CRM Systems' },
  { icon: Server, label: 'ERP Solutions' },
];

const scrollingIcons = [...iconData, ...iconData]; // duplicate for seamless loop

export default function ClientLogos() {
  return (
    <section className="bg-black lg:py-3 py-10">
      <div className="overflow-hidden">
        <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
          <div className="flex min-w-max animate-scroll-left space-x-6 sm:space-x-10 md:space-x-14">
            {scrollingIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <IconComponent
                    className="text-cyan-400 shrink-0"
                    size={36}
                    strokeWidth={1.75}
                  />
                  <span className="text-white text-sm sm:text-base md:text-xl font-semibold">
                    {item.label}
                  </span>
                </div>
              );
            })}
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
}
