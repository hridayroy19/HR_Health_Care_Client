import { IPatient } from "@/types";
import PatientTabil from "./PatientTabil";
import LustreText from "@/components/ui/lustretext";

const PatientManagement = ({ patient }: { patient: IPatient[] }) => {
  return (
    <div className="p-6">
      <LustreText className="text-2xl mb-5" text="Patient Management" />;
      <PatientTabil patient={patient} />
    </div>
  );
};

export default PatientManagement;
