import Image from "next/image";
import { Button } from "../ui/button";

const HealthCareThree = () => {
  return (
    <div className="mt-14 lg:px-24 px-16 ">
      <div className=" w-full flex flex-row-reverse justify-end ">
        <Image
          src={
            "https://i.ibb.co.com/WNt7SVyY/Colostrum-Test-Swab.webp"
          }
          alt="image"
          width={500}
          height={200}
          className="lg:w-[650px] w-full flex justify-start"
        />
      </div>
      <div className="mt-10">
        <p className="text-xl text-purple-700 font-medium">
          {" "}
          Why HR Health Care?
        </p>
        <h4 className="text-3xl font-sans mt-5">We Care For You Like Family</h4>
        <p className="text-xl mt-5">Open every day from 8AM - 10PM</p>
        <Button
          variant={"outline"}
          className="mt-5 h-[45px] border bg-purple-600 text-white "
        >
          {" "}
          Book Appointment →{" "}
        </Button>
      </div>
    </div>
  );
};

export default HealthCareThree;
