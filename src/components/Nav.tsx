"use client";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", link: "#home", icon: <HiHome /> },
  { name: "about", link: "#about", icon: <HiUser /> },
  { name: "projects", link: "#projects", icon: <HiViewColumns /> },
  { name: "services", link: "#services", icon: <HiRectangleGroup /> },
  {
    name: "testimonials",
    link: "#testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    link: "#contact",
    icon: <HiEnvelope />,
  },
];

// next link
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FloatingNav } from "./ui/floating-nav";
import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: window.innerWidth < 640 ? 0.4 : 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <nav className="hidden lg:flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
        {/* inner */}
        <div className="flex w-full lg:flex-col items-center lg:justify-center gap-y-10 lg:px-0 lg:h-max py-8 bg-white/10 backdrop-blur-sm lg:text-xl lg:rounded-full">
          {navData.map((link, index) => {
            return (
              <Link
                className={`${
                  link.name === activeSection ? "text-accent" : ""
                } relative flex items-center group hover:text-accent transition-all duration-300`}
                key={index}
                href={link.link}
              >
                {/* tooltip */}
                <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                  <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {link.name}
                    </div>

                    {/* triangle pointer */}
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>
                {/* icons */}
                <div>{link.icon}</div>
              </Link>
            );
          })}
        </div>
      </nav>
      <nav className="lg:hidden w-full flex items-center">
        <FloatingNav navItems={navData} activeSection={activeSection} />
      </nav>
    </>
  );
};
export default Nav;
