import AllDoctors from "@/components/modules/doctor";
import { getAllDoctors } from "@/services/Doctor";

const DoctorPage = async () => {
  const doctor = await getAllDoctors();
  // console.log(doctor);

  return (
    <div>
      <AllDoctors doctor={doctor.data?.data || []} />
    </div>
  );
};

export default DoctorPage;
