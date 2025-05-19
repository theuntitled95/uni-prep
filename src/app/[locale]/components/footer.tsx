import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-[80rem] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/us-uk-eu" className="hover:text-white">
                  US, UK and EU College Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graduate-school"
                  className="hover:text-white"
                >
                  Graduate School Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/online-tutoring"
                  className="hover:text-white"
                >
                  Online Tutoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/extracurricular"
                  className="hover:text-white"
                >
                  Extracurricular & Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/services/career-mentoring"
                  className="hover:text-white"
                >
                  Career Mentoring
                </Link>
              </li>
              <li>
                <Link href="/services/med-school" className="hover:text-white">
                  Med School Admissions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about/story" className="hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-white">
                  Webinars & Workshops
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/university-profiles" className="hover:text-white">
                  University Profiles
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our Blog</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/blog/category/admissions"
                  className="hover:text-white"
                >
                  Admissions Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/test-prep"
                  className="hover:text-white"
                >
                  Test Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/extracurriculars"
                  className="hover:text-white"
                >
                  Extracurriculars
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/university-life"
                  className="hover:text-white"
                >
                  University Life
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-slate-900 bg-white p-2 rounded-full"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-slate-900 bg-white p-2 rounded-full"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-slate-900 bg-white p-2 rounded-full"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-slate-900 bg-white p-2 rounded-full"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-slate-900 bg-white p-2 rounded-full"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© 2025 Crimson Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
