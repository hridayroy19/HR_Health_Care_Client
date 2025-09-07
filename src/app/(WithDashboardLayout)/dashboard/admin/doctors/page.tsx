import DoctorManagement from "@/components/modules/dashboard/doctor";
import { getAllDoctors } from "@/services/Doctor";

const DoctorPage = async () => {
  const doctor = await getAllDoctors();
  return (
    <div>
      <DoctorManagement doctor={doctor} />
    </div>
  );
};

export default DoctorPage;
