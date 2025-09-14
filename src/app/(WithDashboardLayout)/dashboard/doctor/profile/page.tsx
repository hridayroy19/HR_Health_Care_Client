import DoctorPrifleManagement from "@/components/modules/dashboard/doctor/profile";
// import { getMyProfile } from "@/services/AuthService";
// import { getSingleDoctors } from "@/services/Doctor";

const Profilepage = async () => {
  // const user = await getMyProfile()
  // const doctor = await getSingleDoctors(user.id)
  // console.log("current doctor", user)
  return (
    <div>
      <DoctorPrifleManagement />
    </div>
  );
};

export default Profilepage;
