import Image from "next/image";

const HealthCareWhy = () => {
  return (
    <div className="mt-14 lg:px-24 px-16 ">
      <div className=" w-full flex justify-end ">
        <Image
          src={
            "https://i.ibb.co.com/PG4PT396/Healthcare-Anytime-2e16d0ba-fill-844x557-c0-format-webp.webp"
          }
          alt="image"
          width={500}
          height={200}
          className="lg:w-[650px] w-full flex justify-start"
        />
      </div>
      <div className="mt-10">
        <p className="text-xl text-purple-700 font-medium"> Why HR Health Care?</p>
        <h4 className="text-3xl font-sans mt-5">
          Healthcare Anytime, Anywhere
        </h4>
        <p className="text-xl mt-5">
          We use technology to make healthcare accessible to you no matter where
          you are. You can access your health data, book appointments, review
          your prescriptions, and view your medical records, anywhere at your
          convenience.
        </p>
      </div>
    </div>
  );
};

export default HealthCareWhy;
