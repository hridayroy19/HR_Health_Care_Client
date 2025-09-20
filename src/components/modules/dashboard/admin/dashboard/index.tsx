import React from "react";
import RevienwCard from "./RevienwCard";
import SalaryRevinewHistory from "./SalaryRevinewHistory";
import TopState from "./TopState";

const AdminDashboardManagemant = () => {
  return (
    <div className=" bg-gradient-to-br  from-[#a90de7] via-[#6c147e] to-[#af14ce] p-6 px-8 text-white">
      <TopState />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevienwCard />
        <SalaryRevinewHistory />
      </div>
      <footer className="mt-8 text-center text-xs text-white">
        © {new Date().getFullYear()} Your Company
      </footer>
    </div>
  );
};

export default AdminDashboardManagemant;
