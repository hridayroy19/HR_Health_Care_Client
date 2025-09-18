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
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/contants";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SubNavbar = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handelLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
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
                <DropdownMenuLabel> Create Account</DropdownMenuLabel>
                <DropdownMenuGroup className="font-mono">
                  <DropdownMenuItem>
                    <Link href={"/login"}>Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/register"} > Patient Signup </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        )}
      </div>
    </div>
  );
};

export default SubNavbar;
