import PatientProfilePage from "@/components/modules/dashboard/patient/profile";
import { getMyProfile } from "@/services/AuthService";
import { getByIdPatient } from "@/services/patient";

const Patientpage = async () => {
  const myprofile = await getMyProfile();
  const patientData = await getByIdPatient(myprofile?.data?.id);
  console.log(myprofile.data.id);
  console.log(patientData);

  return (
    <div>
      <PatientProfilePage />
    </div>
  );
};

export default Patientpage;
