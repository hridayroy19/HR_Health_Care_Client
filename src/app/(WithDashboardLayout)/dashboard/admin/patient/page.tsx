import PatientManagement from "@/components/modules/dashboard/admin/patient";
import { getAllPatient } from "@/services/patient";

const Patientpage = async () => {
  const patient = await getAllPatient();
  return (
    <div>
      <PatientManagement patient={patient?.data} />
    </div>
  );
};

export default Patientpage;
