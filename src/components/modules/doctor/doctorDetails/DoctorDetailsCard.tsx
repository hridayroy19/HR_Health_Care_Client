import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IDoctor } from "@/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const DoctorDetailsCard = ({ doctor }: { doctor: IDoctor }) => {
  return (
    <div>
      <div className="bg-gray-100  font-sans p-4 sm:p-6 flex items-center justify-center">
        <div className="container xl:max-w-5xl lg:max-w-4xl md:max-w-xl max-w-lg mx-auto">
          <Card className="flex flex-col lg:flex-row p-6">
            <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8 flex justify-center lg:block">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                <Image
                  height={100}
                  width={200}
                  src={doctor.profilePhoto}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-green-500 rounded-full h-4 w-4 border-2 border-white"></span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {doctor.name}
                  </h1>
                  <p className="text-gray-600 mt-1 text-base">
                    {doctor.qualification}
                  </p>
                  <p className="mt-2 text-gray-700 font-medium">
                    {/* {doctor?.designation} */}
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
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 font-medium">
                    Consultation Fee
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    BD TK : {doctor.appointmentFee}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Per consultation
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-700">
                <p>
                  <span className="font-semibold">Working at: </span>
                  {doctor.currentWorkingPlace}
                </p>
                <p>Contact Number : {doctor.contactNumber} </p>
              </div>

              <hr className="my-4 border-gray-200" />

              <div className="flex flex-wrap gap-4 text-gray-700 font-medium items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">
                    Total Experience
                  </span>
                  <span className="text-lg font-semibold">
                    {doctor.experience}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">BMDC Number</span>
                  <span className="text-lg font-semibold">
                    {doctor.registrationNumber}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Joined Doctime</span>
                  <span className="text-lg font-semibold">26 Sep 2021</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Total Rating 20</span>
                  <span className="text-lg font-semibold flex items-center">
                    <StarIcon className="text-orange-500 mr-1" />
                    <span>20</span>
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white shadow-md">
                  Book Appointment Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsCard;
