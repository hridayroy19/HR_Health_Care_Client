import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full mx-auto justify-center overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
