"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import FilterSidebar from "./FilterSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const doctors = [
  {
    id: 1,
    name: "Dr. Md. Shakibul Islam",
    image: "/doctor1.jpg",
    specialties: ["ENT Specialist", "General Physician"],
    hospital: "Dhaka Medical College Hospital",
    experience: "10+",
    rating: 5,
    reviews: 360,
    fee: 300,
    discountFee: 600,
    availability: "Online",
  },
  {
    id: 2,
    name: "Dr. Orin Jamie",
    image: "/doctor2.jpg",
    specialties: ["Eye Specialist", "Endocrinology", "General Physician"],
    hospital: "National Institute of Ophthalmology & Hospital",
    experience: "11+",
    rating: 5,
    reviews: 442,
    fee: 252,
    discountFee: 500,
    availability: "Appointment",
  },
  {
    id: 3,
    name: "Asst. Prof. Dr. Md. Abdul Alim",
    image: "/doctor3.jpg",
    specialties: ["General Physician"],
    hospital: "Ghent University, Belgium and DGHS, Bangladesh",
    experience: "23+",
    rating: 5,
    reviews: 15,
    fee: 300,
    availability: "Online",
  },
  {
    id: 4,
    name: "Dr. Mehedi Hasan",
    image: "/doctor4.jpg",
    specialties: ["Pediatric Hematologist and Oncologist", "General Physician"],
    hospital: "Satkhira Medical College Hospital, Satkhira",
    experience: "13+",
    rating: 4.8,
    reviews: 128,
    fee: 500,
    discountFee: 6485,
    availability: "Online",
  },
  {
    id: 5,
    name: "Dr. Mamunur Rashid",
    image: "/doctor5.jpg",
    specialties: ["General Physician"],
    hospital: "Kurmhola General Hospital, Dhaka Cantonment",
    experience: "13+",
    rating: 4.7,
    reviews: 95,
    fee: 600,
    discountFee: 750,
    availability: "Appointment",
  },
];

const AllDoctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-34 px-24 bg-purple-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Find Doctors</h1>
            <p className="text-gray-600">{doctors.length} Doctors found</p>
          </div>
          {/* Search and Filter Bar */}
          <div className="flex gap-2 mb-6">
            <div className="relative flex-1 justify-end items-end">
              <Search className="absolute left-2 top-1/3 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by doctor's name/code"
                className="pl-10 w-[280px] h-[45px] "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Filter className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-4 overflow-y-auto">
                  <FilterSidebar />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block w-full max-w-xs">
            <FilterSidebar />
          </div>

          {/* Doctor Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-5">
              {filteredDoctors.map((doc) => (
                <DoctorCard key={doc.id} {...doc} />
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No doctors found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
