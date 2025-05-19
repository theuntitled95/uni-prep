"use client";

import type React from "react";

import {Button} from "@/components/ui/button";
import {ChevronRight, Menu, Phone} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {MobileMenu} from "./mobile-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenus({});
        setOpenSubMenus({});
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => {
      const newState = {...prev};
      // Close all other menus
      Object.keys(newState).forEach((key) => {
        if (key !== menu) newState[key] = false;
      });
      // Toggle the clicked menu
      newState[menu] = !prev[menu];
      return newState;
    });
    // Reset sub-menus when toggling main menus
    setOpenSubMenus({});
  };

  const toggleSubMenu = (submenu: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenSubMenus((prev) => {
      const newState = {...prev};
      // Close all other sub-menus
      Object.keys(newState).forEach((key) => {
        if (key !== submenu) newState[key] = false;
      });
      // Toggle the clicked sub-menu
      newState[submenu] = !prev[submenu];
      return newState;
    });
  };

  const servicesMenu = [
    {
      label: "Admissions Support",
      href: "/services/admissions-support",
      hasSubmenu: true,
      submenu: [
        {label: "US College Admissions", href: "/services/us-college"},
        {label: "UK University Admissions", href: "/services/uk-university"},
        {
          label: "Graduate School Admissions",
          href: "/services/graduate-school",
        },
        {label: "Med School Admissions", href: "/services/med-school"},
        {label: "Law School Admissions", href: "/services/law-school"},
      ],
    },
    {label: "Crimson Rise", href: "/services/crimson-rise"},
    {label: "US Boarding School Program", href: "/services/us-boarding-school"},
    {
      label: "Indigo Research-Online Research Opportunities For High Schooler",
      href: "/services/indigo-research",
    },
    {label: "Essay Review", href: "/services/essay-review"},
    {
      label: "Crimson Foundation Programs",
      href: "/services/foundation-programs",
    },
    {
      label: "Delta Institute-Internship Opportunities",
      href: "/services/delta-institute",
    },
    {label: "Crimson Talent Immigration", href: "/services/talent-immigration"},
    {label: "Online Tutoring", href: "/services/online-tutoring"},
  ];

  const aboutMenu = [
    {label: "Our Story", href: "/about/story"},
    {label: "Our Team", href: "/about/team"},
    {label: "Careers", href: "/careers"},
    {label: "Press", href: "/press"},
    {label: "Contact Us", href: "/contact"},
  ];

  const resourcesMenu = [
    {label: "Webinars & Workshops", href: "/webinars"},
    {
      label: "US College Admissions Calculator",
      href: "/resources/us-calculator",
    },
    {
      label: "UK University Admissions Calculator",
      href: "/resources/uk-calculator",
    },
    {label: "Other Calculators & Converters", href: "/resources/calculators"},
    {label: "Practice Standardised Tests", href: "/resources/practice-tests"},
    {label: "University Profiles", href: "/resources/university-profiles"},
    {
      label: "Personal Essay Topic Generator",
      href: "/resources/essay-generator",
    },
    {
      label: "Extracurricular Opportunities",
      href: "/resources/extracurricular",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="mx-auto flex items-center justify-between h-24 px-4 md:px-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Crimson Education Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6" ref={menuRef}>
              <div className="relative">
                <button
                  onClick={() => toggleMenu("services")}
                  className={`flex items-center gap-1 text-sm font-medium ${
                    openMenus.services ? "text-red-500" : ""
                  }`}
                >
                  Our Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform ${
                      openMenus.services ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openMenus.services && (
                  <div className="absolute left-0 mt-2 w-[450px] bg-white shadow-lg rounded-md p-2 z-50">
                    {servicesMenu.map((item, index) => (
                      <div key={index} className="relative">
                        {item.hasSubmenu ? (
                          <button
                            onClick={(e) =>
                              toggleSubMenu(`services-${index}`, e)
                            }
                            className="flex items-center justify-between w-full px-4 py-3 text-sm hover:bg-gray-100 rounded-md"
                          >
                            <span>{item.label}</span>
                            <ChevronRight
                              size={16}
                              className={`transition-transform ${
                                openSubMenus[`services-${index}`]
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-sm hover:bg-gray-100 rounded-md"
                          >
                            {item.label}
                          </Link>
                        )}
                        {item.hasSubmenu &&
                          openSubMenus[`services-${index}`] && (
                            <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md p-2 -mt-2 ml-1">
                              {item.submenu?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleMenu("about")}
                  className={`flex items-center gap-1 text-sm font-medium ${
                    openMenus.about ? "text-red-500" : ""
                  }`}
                >
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform ${
                      openMenus.about ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openMenus.about && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                    {aboutMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleMenu("resources")}
                  className={`flex items-center gap-1 text-sm font-medium ${
                    openMenus.resources ? "text-red-500" : ""
                  }`}
                >
                  <span className="relative">
                    Resources
                    <span className="absolute -top-2 -right-8 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">
                      NEW
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform ${
                      openMenus.resources ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openMenus.resources && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50">
                    {resourcesMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/blog" className="text-sm font-medium">
                Our Blog
              </Link>
              <Link href="/webinars" className="text-sm font-medium">
                Webinars & Workshops
              </Link>
              <Link href="/academy" className="text-sm font-medium">
                Crimson Global Academy
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+971 50000000</span>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full">
              ENQUIRE NOW
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              title="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
