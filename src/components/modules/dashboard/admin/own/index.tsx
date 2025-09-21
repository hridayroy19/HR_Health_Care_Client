"use client";
import { Button } from "@/components/ui/button";
import LustreText from "@/components/ui/lustretext";
import AdminProfileCard from "./AdminProfileCard";

const AdminManagement = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between">
        <LustreText className="text-2xl" text="Admin Management" />
        <Button className="bg-purple-600"> + Add Admin</Button>
      </div>
      <AdminProfileCard />
    </div>
  );
};

export default AdminManagement;
