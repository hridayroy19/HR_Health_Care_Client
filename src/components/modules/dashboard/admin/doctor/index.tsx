import DoctorDataTable from "./DoctorTabil";
import CreateDoctorModel from "./CreateDoctorModel";
import { IDoctor } from "@/types";
import LustreText from "@/components/ui/lustretext";


const DoctorManagement = ({ doctor }: {doctor:IDoctor}) => {

  return (
    <div className="p-6">
      <div className="flex justify-between mb-8">
        <LustreText className="text-2xl" text="Doctor Management!" />;
         <CreateDoctorModel/>
      </div>
      {/* Pass doctors into the table */}
      <DoctorDataTable doctors={doctor?.data?.data || []} />
    </div>
  );
};

export default DoctorManagement;
