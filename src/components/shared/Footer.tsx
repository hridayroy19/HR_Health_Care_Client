import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600 text-white">
      <footer className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center  sm:justify-start ">logo</div>

            <p className="mt-4 max-w-md text-center leading-relaxed text-white sm:text-left lg:mt-0 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100  pt-16 md:grid-cols-4 lg:grid-cols-5 ">
            <div className="text-center text-white sm:text-left">
              <p className="text-lg font-medium ">About Us</p>

              <ul className="mt-8 space-y-4 text-sm ">
                <li>
                  <a className=" transition   " href="#">
                    Company History
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium  ">Resources</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className=" transition   " href="#">
                    Online Guides
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Conference Notes
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Forum
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Downloads
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium  ">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className=" transition   " href="#">
                    FAQs
                  </a>
                </li>

                <li>
                  <a className=" transition   " href="#">
                    Support
                  </a>
                </li>

                <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className=" transition group-  dark:group-hover:text-white/75">
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

            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg font-medium  ">Stay in Touch</p>

              <div className="mx-auto mt-8 max-w-md sm:ms-0">
                <p className="text-center leading-relaxed text-white ltr:sm:text-left rtl:sm:text-right ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum id, iure consectetur et error hic!
                </p>

                <form className="mt-4">
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <input
                      className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-xs dark:border-gray-700 dark:bg-gray-800 "
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

          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between ">
            <p className="text-center text-sm text-white sm:text-left ">
              Copyright &copy; 2025. All rights reserved.
            </p>

            <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <Facebook />
              <Instagram />
              <Twitter />
              <Github />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
