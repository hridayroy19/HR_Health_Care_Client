"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserProfile } from "@/types";
import { useEffect } from "react";
import Loading from "@/components/ui/core/Loader/Loader";

const AdminProfileCard = ({ profile }: { profile: UserProfile }) => {
  useEffect(() => {
    if (!profile) {
    }
  }, [profile]);

  if (!profile) return <Loading/>;
  
  return (
    <div>
      <p className="text-xl font-mono mb-5"> MY Profile </p>
      <div className="min-h-screen bg-purple-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-purple-400 ">
                <Image
                  src={profile.profilePhoto}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold"> {profile.name} </h2>
                <p className="text-sm text-gray-600"> {profile.role} </p>
                <p className="text-sm text-gray-600">Leeds, United Kingdom</p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="shadow-md rounded-2xl">
            <CardHeader className="flex flex-row justify-between items-center">
              <h3 className="text-base font-semibold">Personal Information</h3>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-500">First Name</p>
                <p className="font-medium"> {profile.name} </p>
              </div>
              <div>
                <p className="text-gray-500">Last Name</p>
                <p className="font-medium">Khaleira</p>
              </div>
              <div>
                <p className="text-gray-500">Date of Birth</p>
                <p className="font-medium">12-10-1990</p>
              </div>
              <div>
                <p className="text-gray-500">Email Address</p>
                <p className="font-medium"> {profile.email} </p>
              </div>
              <div>
                <p className="text-gray-500">Phone Number</p>
                <p className="font-medium">(+880) {profile.contactNumber} </p>
              </div>
              <div>
                <p className="text-gray-500">User Role</p>
                <p className="font-medium"> {profile.role} </p>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="shadow-md rounded-2xl">
            <CardHeader className="flex flex-row justify-between items-center">
              <h3 className="text-base font-semibold">Address</h3>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-500">Country</p>
                <p className="font-medium">United Kingdom</p>
              </div>
              <div>
                <p className="text-gray-500">City</p>
                <p className="font-medium">Leeds, East London</p>
              </div>
              <div>
                <p className="text-gray-500">Postal Code</p>
                <p className="font-medium">ERT 1254</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileCard;
