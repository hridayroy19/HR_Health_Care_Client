import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-[120px] h-screen ">{children}</main>

      <footer className="bg-gray-100  text-center py-6 mt-10">
        <p className="text-gray-600 text-sm">
          © 2025 HR Health Care. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CommonLayout;
