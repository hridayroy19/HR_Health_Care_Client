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
                <User size={16} /> <Link href={"/login"}> My Account</Link>
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
              src={
                "https://i.ibb.co.com/zVQhvw6M/6216da73-9cbb-4a6e-ba99-8bd85245629a-removebg-preview.png"
              }
              alt="image"
              height={130}
              width={200}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-purple-900 border-b-2 border-blue-600 pb-1"
            >
              HOME
            </Link>
            <Link href="/service">CONSULTATIN</Link>
            <div className="relative group">
              <Link href="/service" className="pb-1">
                SERVICES
              </Link>
              <div className="absolute left-0 mt-6 w-52 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link
                  href="/services/tests-procedures"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tests & Procedures
                </Link>
                <Link
                  href="/services/consultations"
                  className="block uppercase px-4 py-2 hover:bg-gray-100"
                >
                  Consultations
                </Link>
                <Link
                  href="/services/diagnostics"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Diagnostics
                </Link>
                <Link
                  href="/services/health-checks"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Health Checks & Packages
                </Link>
                <Link
                  href="/services/remote-home"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Remote & Home Services
                </Link>
                <Link
                  href="/services/beauty-wellness"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Beauty Wellness
                </Link>
                <Link
                  href="/services/vaccines"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Vaccines
                </Link>
              </div>
            </div>
            <Link href="/doctor">OUR DOCTORS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/blog">BLOG</Link>
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
          <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2">
            <a href="#" className="block">
              HOME
            </a>
            <a href="#" className="block">
              SERVICES
            </a>
            <a href="#" className="block">
              OUR DOCTORS
            </a>
            <a href="#" className="block">
              PRAAVAMD
            </a>
            <a href="#" className="block">
              ABOUT
            </a>
            <a href="#" className="block">
              COMMUNITY
            </a>
            <div className="pt-2">
              <Button className="w-full bg-[#611074] ">
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
