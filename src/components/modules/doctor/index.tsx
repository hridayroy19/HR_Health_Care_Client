"use client";

import { useEffect, useState, useMemo } from "react";
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
import { IDoctor, IMeta } from "@/types";
import DoctorCard from "./DoctorCard";
import TablePagination from "@/components/ui/core/HRTable/TablePagination";

const AllDoctorManagement = ({
  doctor,
  meta,
}: {
  doctor: IDoctor[];
  meta: IMeta;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  useEffect(() => {
    if (doctor) {
      setLoading(false);
    }
  }, [doctor]);

  // Filters
  const filteredDoctors = useMemo(() => {
    let data = doctor;

    // Search filter
    if (searchQuery) {
      data = data.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Gender filter
    if (selectedGender) {
      data = data.filter((d) => d.gender === selectedGender);
    }

    return data;
  }, [doctor, searchQuery, selectedGender]);

  return (
    <div className="pt-36 px-4 md:px-12 lg:px-36 bg-purple-100 min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Find Doctors</h1>
            <p className="text-gray-600">
              {filteredDoctors.length} Doctors found
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by name or email..."
                className="pl-10 w-full md:w-[280px] h-[45px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Drawer for filters on mobile */}
            <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-4 overflow-y-auto">
                  <FilterSidebar
                    selectedGender={selectedGender}
                    setSelectedGender={setSelectedGender}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar on large screens */}
          <div className="hidden lg:block w-full max-w-xs">
            <FilterSidebar
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </div>

          {/* Doctor Cards */}
          <div className="flex-1">
            {loading ? (
              <div className="text-center py-20 text-gray-500 font-medium">
                Loading.....
              </div>
            ) : filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 gap-7">
                {filteredDoctors.map((doctor: IDoctor, idx: number) => (
                  <DoctorCard key={idx} doctor={doctor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 font-medium">
                No doctors found.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border mt-5 mb-10 flex justify-center w-full mx-auto">
        <TablePagination totalPage={meta.totalPage} />
      </div>
    </div>
  );
};

export default AllDoctorManagement;
