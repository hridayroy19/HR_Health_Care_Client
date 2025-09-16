"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
const HealthCare = () => {
  return (
    <div className="mt-14">
      <div className="lg:px-24 px-16 ">
        <Image
          src={"https://i.ibb.co.com/xK9WHVVR/Why-Doc-Time.webp"}
          alt="image"
          width={500}
          height={200}
          className="lg:w-[650px] w-full flex justify-start"
          style={{ width: "300", height: "auto" }}
        />
      </div>
      <div className="bg-purple-500 ">
        <BackgroundPaths>
          <p className="text-xl text-purple-700 font-medium">
            Why HR Health Care?
          </p>
          <h2 className="lg:text-5xl text-3xl mt-5 mb-8 font-normal">
            Bangladesh’s leading healthcare app for online doctor consultation
          </h2>
          <div className="flex w-full mx-auto justify-start items-center gap-2">
            <Image
              src="https://i.ibb.co.com/nN6h0fLF/pngtree-blue-circle-with-check-mark-isolated-on-transparent-background-png-image-16380298.png"
              alt="logo"
              width={55}
              height={40}
            />
            <p className="md:text-2xl font-normal">
              Access any GP or specialist doctor you need at anytime from
              anywhere.
            </p>
          </div>
          <div className="flex w-full mt-4 mx-auto justify-start items-center gap-2">
            <Image
              src="https://i.ibb.co.com/wNvQvcTJ/pngtree-blue-3d-checkmark-box-icon-png-image-16538548.png"
              alt="logo"
              width={45}
              height={40}
            />
            <p className="md:text-2xl font-normal">
              Access to online prescriptions, medicine delivery, and diagnostic
              tests.
            </p>
          </div>
          <div className="flex w-full mt-4 mx-auto justify-start items-center gap-2">
            <Image
              src="https://i.ibb.co.com/nN6h0fLF/pngtree-blue-circle-with-check-mark-isolated-on-transparent-background-png-image-16380298.png"
              alt="logo"
              width={55}
              height={40}
            />
            <p className="md:text-2xl font-normal">
              Easy subscription packages to protect you and your loved one’s
              health and wellbeing.
            </p>
          </div>
        </BackgroundPaths>
      </div>
    </div>
  );
};

export default HealthCare;
