import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IDoctor } from "@/types";
import {StarIcon } from "lucide-react";
import Image from "next/image";
import AnimatedTabsDemo from "./Tabs";

const DoctorDetailsCard = ({ doctor }: { doctor: IDoctor }) => {
  console.log(doctor, "ddddd");

  return (
    <div>
      <div className="bg-gray-100 mt-26 font-sans p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="container max-w-6xl mx-auto space-y-6">
          {/* Doctor Main Profile Section */}
          <Card className="flex flex-col md:flex-row p-6">
            <div className="flex-shrink-0 relative mb-4 md:mb-0 md:mr-6">
              <Image
                height={100}
                width={100}
                src={doctor.profilePhoto}
                alt={doctor.name}
                className="w-38 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
              />

              <span className="absolute bottom-1 right-1 bg-green-500 rounded-full h-4 w-4 border-2 border-white"></span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {doctor.name}
                  </h1>
                  <p className="text-gray-600 mt-1 text-sm md:text-base">
                    {doctor.qualification}
                  </p>
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {doctor?.doctorSpecialties?.map((ds) => (
                      <p
                        key={ds?.specialitie?.id}
                        className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md"
                      >
                        {ds?.specialitie?.title}
                        hello
                      </p>
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">
                    {doctor.designaton}
                  </p>
                </div>
                <p className="text-gray-700">
                  Contact Number: {doctor.contactNumber}
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-8 text-gray-700 font-medium">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">
                    Total Experience
                  </span>
                  <span className="text-base font-semibold">
                    {doctor.experience}
                  </span>
                </div>
                <div className="flex flex-col mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500">BMDC Number</span>
                  <span className="text-base font-semibold">
                    {doctor?.registrationNumber}
                  </span>
                </div>
                <div className="flex flex-col mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500">Total Rating</span>
                  <span className="text-base font-semibold flex items-center">
                    <StarIcon className="text-orange-500" />
                    <span className="ml-1">102</span>
                  </span>
                </div>
              </div>
              <div className="mt-4 text-gray-700">
                <span className="font-semibold">Working in: </span>
                {doctor.currentWorkingPlace}
              </div>
              <p className="text-gray-700">Gander: {doctor.gender}</p>
            </div>

            <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0 md:text-right">
              <div className="text-sm text-gray-500 font-medium">
                Consultation Fee
              </div>
              <div className="text-3xl font-bold text-gray-900 mt-1">
                {doctor.appointmentFee}
                <span className="text-lg font-normal text-gray-500 ml-1">
                  (Inc. VAT)
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg shadow-md">
                  See Doctor
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg shadow-md">
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="px-24">
<AnimatedTabsDemo/>
      </div>
      
    </div>
  );
};

export default DoctorDetailsCard;
