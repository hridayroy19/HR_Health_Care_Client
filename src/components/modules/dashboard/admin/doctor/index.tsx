import DoctorDataTable from "./DoctorTabil";
import CreateDoctorModel from "./CreateDoctorModel";


const DoctorManagement = ({ doctor }: any) => {

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h4 className="font-normal text-3xl">Doctor Management</h4>
         <CreateDoctorModel/>
      </div>
      {/* Pass doctors into the table */}
      <DoctorDataTable doctors={doctor?.data.data || []} />
    </div>
  );
};

export default DoctorManagement;
