"use client";

import {ChevronDown, ChevronRight, X} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

interface SubMenu {
  title: string;
  links: {
    label: string;
    href: string;
    submenu?: {label: string; href: string}[];
  }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({isOpen, onClose}: MobileMenuProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSubMenu = (submenu: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  const menus: SubMenu[] = [
    {
      title: "Our Services",
      links: [
        {
          label: "Admissions Support",
          href: "/services/admissions-support",
          submenu: [
            {label: "US College Admissions", href: "/services/us-college"},
            {
              label: "UK University Admissions",
              href: "/services/uk-university",
            },
            {
              label: "Graduate School Admissions",
              href: "/services/graduate-school",
            },
            {label: "Med School Admissions", href: "/services/med-school"},
            {label: "Law School Admissions", href: "/services/law-school"},
          ],
        },
        {label: "Crimson Rise", href: "/services/crimson-rise"},
        {
          label: "US Boarding School Program",
          href: "/services/us-boarding-school",
        },
        {
          label: "Indigo Research-Online Research Opportunities",
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
        {
          label: "Crimson Talent Immigration",
          href: "/services/talent-immigration",
        },
        {label: "Online Tutoring", href: "/services/online-tutoring"},
      ],
    },
    {
      title: "About Us",
      links: [
        {label: "Our Story", href: "/about/story"},
        {label: "Our Team", href: "/about/team"},
        {label: "Careers", href: "/careers"},
        {label: "Press", href: "/press"},
        {label: "Contact Us", href: "/contact"},
      ],
    },
    {
      title: "Resources",
      links: [
        {label: "Webinars & Workshops", href: "/webinars"},
        {
          label: "US College Admissions Calculator",
          href: "/resources/us-calculator",
        },
        {
          label: "UK University Admissions Calculator",
          href: "/resources/uk-calculator",
        },
        {
          label: "Other Calculators & Converters",
          href: "/resources/calculators",
        },
        {
          label: "Practice Standardised Tests",
          href: "/resources/practice-tests",
        },
        {label: "University Profiles", href: "/resources/university-profiles"},
        {
          label: "Personal Essay Topic Generator",
          href: "/resources/essay-generator",
        },
        {
          label: "Extracurricular Opportunities",
          href: "/resources/extracurricular",
        },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-800"
          aria-label="Close menu"
          title="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <div className="px-6 py-4">
        {menus.map((menu) => (
          <div key={menu.title} className="mb-4">
            <button
              onClick={() => toggleMenu(menu.title)}
              className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900 border-b border-gray-200"
            >
              {menu.title}
              {openMenus[menu.title] ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {openMenus[menu.title] && (
              <div className="mt-2 ml-4 space-y-2">
                {menu.links.map((link, index) => (
                  <div key={index}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() =>
                            toggleSubMenu(`${menu.title}-${index}`)
                          }
                          className="flex items-center justify-between w-full py-2 text-left text-gray-600 hover:text-red-500"
                        >
                          {link.label}
                          {openSubMenus[`${menu.title}-${index}`] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>
                        {openSubMenus[`${menu.title}-${index}`] && (
                          <div className="ml-4 mt-1 space-y-2">
                            {link.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block py-2 text-gray-600 hover:text-red-500"
                                onClick={onClose}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-2 text-gray-600 hover:text-red-500"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mt-6 space-y-4">
          <Link
            href="/blog"
            className="block py-2 font-medium text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            Our Blog
          </Link>
          <Link
            href="/webinars"
            className="block py-2 font-medium text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            Webinars & Workshops
          </Link>
          <Link
            href="/academy"
            className="block py-2 font-medium text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            Crimson Global Academy
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="block w-full py-3 text-center font-medium text-white bg-red-500 rounded-full hover:bg-red-600"
            onClick={onClose}
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
