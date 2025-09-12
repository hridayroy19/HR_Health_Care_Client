import { IPatient } from "@/types";
import PatientTabil from "./PatientTabil";

const PatientManagement = ({ patient }: { patient: IPatient[] }) => {
  return (
    <div>
      <PatientTabil patient={patient} />
    </div>
  );
};

export default PatientManagement;
