import DoctorManagement from "@/components/modules/dashboard/admin/doctor";
import { getAllDoctors } from "@/services/Doctor";

const DoctorPage = async () => {
  const doctor = await getAllDoctors();
    console.log(doctor)

  return (
    <div>
      <DoctorManagement doctor={doctor} />
    </div>
  );
};

export default DoctorPage;
