import AllDoctors from "@/components/modules/doctor";
import { getAllDoctors } from "@/services/Doctor";

const DoctorPage = async () => {

  const {doctor} = await getAllDoctors();
  console.log(doctor?.data)

  return (
    <div>
      <AllDoctors />
    </div>
  );
};

export default DoctorPage;
