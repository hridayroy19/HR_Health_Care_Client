import { IDoctor } from "@/types";
import DoctorDetailsCard from "./DoctorDetailsCard";

const DoctorDetailsManagement = ({doctor}:{doctor:IDoctor}) => {

  return (
    <div>
      <DoctorDetailsCard doctor={doctor} />
    </div>
  );
};

export default DoctorDetailsManagement;
