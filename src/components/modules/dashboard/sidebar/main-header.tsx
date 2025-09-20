import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="w-full sm:ml-auto sm:w-auto">
      <div className="flex items-center gap-4">
        <div className="text-right mr-4">
          <div className="text-sm">Ryan septimma</div>
          <div className="text-xs text-slate-400">Admin</div>
        </div>
        <Avatar>
          <Image
            src="https://i.ibb.co.com/B5bBHvQr/images-2.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Avatar>
      </div>
    </div>
  );
};

export default MainHeader;
