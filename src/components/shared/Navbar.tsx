"use client";
import { useState, useEffect } from "react";
import { Menu, X, User, Search, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import clsx from "clsx";

const Navbar = () => {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/doctor", label: "OUR DOCTORS" },
    { href: "/records", label: "Health Records" },
    { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Sub Navbar */}
      <div
        className={`bg-white transition-transform duration-500 ease-in-out hidden md:block ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-14 flex justify-between items-center h-10 text-sm">
          <div className="flex gap-4">
            <span className=" text-purple-950">📞 10648</span>
            <span>✉️ hrhealthcare@hridoy.com</span>
          </div>
          <div className="flex gap-4 text-gray-600">
            <span className="flex items-center gap-2 cursor-pointer">
              <Facebook size={16} />
              <Instagram size={16} />
            </span>
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/Adityakishore0.png"
                        alt="@Ahdeetai"
                      />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-3" align="start">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={`/dashboard/${user?.role.toLowerCase()}`}>
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handelLogout}>
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <span className="flex items-center gap-1 cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-purple-600 h-6 w-14 ">Login</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link href={"/login"}>Login</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/register"}> Patient Signup </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white shadow-md fixed w-full transition-all duration-500 ease-in-out ${
          isScrolled ? "top-0" : "md:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto md:px-4 px-2 flex justify-between items-center h-20 ">
          {/* Logo */}
          <div className=" font-bold text-lg flex items-center gap-2">
            <Image
              src="https://i.ibb.co/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
              alt="image"
              width={150}
              height={110}
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "pb-1 transition-colors hover:text-purple-700",
                  pathname === href
                    ? "text-purple-900 border-b-2 border-blue-600"
                    : "text-gray-700"
                )}
              >
                {label}
              </Link>
            ))}

            {/* Dropdown for services */}
            <div className="relative group">
              <Link
                href="/service"
                className={clsx(
                  "pb-1 transition-colors",
                  pathname.startsWith("/services")
                    ? "text-purple-900 border-b-2 border-blue-600"
                    : "text-gray-700"
                )}
              >
                SERVICES
              </Link>
              <div className="absolute left-0 mt-6 w-52 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link
                  href="/services/tests-procedures"
                  className={clsx(
                    "block px-4 py-2 hover:bg-gray-100",
                    pathname === "/services/tests-procedures" &&
                      "bg-gray-100 text-purple-900"
                  )}
                >
                  Tests & Procedures
                </Link>
                <Link
                  href="/services/consultations"
                  className={clsx(
                    "block uppercase px-4 py-2 hover:bg-gray-100",
                    pathname === "/services/consultations" &&
                      "bg-gray-100 text-purple-900"
                  )}
                >
                  Consultations
                </Link>
                <Link
                  href="/services/diagnostics"
                  className={clsx(
                    "block px-4 py-2 hover:bg-gray-100",
                    pathname === "/services/diagnostics" &&
                      "bg-gray-100 text-purple-900"
                  )}
                >
                  Diagnostics
                </Link>
                <Link
                  href="/services/beauty-wellness"
                  className={clsx(
                    "block px-4 py-2 hover:bg-gray-100",
                    pathname === "/services/beauty-wellness" &&
                      "bg-gray-100 text-purple-900"
                  )}
                >
                  Beauty Wellness
                </Link>
                <Link
                  href="/services/vaccines"
                  className={clsx(
                    "block px-4 py-2 hover:bg-gray-100",
                    pathname === "/services/vaccines" &&
                      "bg-gray-100 text-purple-900"
                  )}
                >
                  Vaccines
                </Link>
              </div>
            </div>
          </nav>

          <div className="flex px-4 items-center gap-2 md:gap-4">
            <button className="text-gray-600 lg:hidden">
              <Search size={24} />
            </button>
            <button className="text-gray-600 lg:hidden">
              <User size={24} />
            </button>

            <Button className="bg-purple-700 hover:bg-[#601172f8] hidden lg:block">
              Book Appointment →
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4 rounded-b-2xl">
            <div className="flex flex-col space-y-1">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "block px-2 py-2 rounded-lg font-medium transition-colors",
                    pathname === href
                      ? "text-purple-700 bg-purple-50 border-l-4 border-purple-600"
                      : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Call-to-action button */}
            <div className="pt-2">
              <Button className="w-full bg-purple-700 hover:bg-purple-800 rounded-xl font-semibold">
                Book Appointment →
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
