import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600 text-white">
      <footer className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center sm:justify-start text-2xl font-bold">
              <Image
                src={
                  "https://i.ibb.co.com/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
                }
                alt="logo"
                width={200}
                height={100}
                style={{ width: "120px", height: "auto" }}
                className="bg-white"
              />
            </div>

            <p className="mt-4 max-w-md text-center leading-relaxed text-white sm:text-left lg:mt-0">
              Dedicated to providing compassionate, quality, and affordable
              health care services. Our mission is to ensure the well-being of
              every patient with modern medical facilities and expert care.
            </p>
          </div>

          {/* Links Section */}
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-5">
            {/* About Us */}
            <div className="text-center text-white sm:text-left">
              <p className="text-lg font-medium">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Doctors & Specialists
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Patient Care
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Resources</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition" href="#">
                    Health Articles
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Wellness Programs
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Insurance Partners
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Medical Research
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Upcoming Health Camps
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="transition" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="transition" href="#">
                    Emergency Support
                  </a>
                </li>
                <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="transition dark:group-hover:text-white/75">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg font-medium">Stay in Touch</p>

              <div className="mx-auto mt-8 max-w-md sm:ms-0">
                <p className="text-center leading-relaxed text-white ltr:sm:text-left rtl:sm:text-right">
                  Subscribe to get health tips, wellness guides, and updates
                  about upcoming medical camps delivered straight to your inbox.
                </p>

                <form className="mt-4">
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <input
                      className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-xs dark:border-gray-700 dark:bg-gray-800"
                      type="email"
                      placeholder="Enter your email"
                    />

                    <button
                      className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-sm text-white sm:text-left">
              Copyright &copy; 2025 HR Health Care. All rights reserved.
            </p>

            <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Github">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
