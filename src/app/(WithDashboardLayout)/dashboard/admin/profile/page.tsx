import AdminProfileManagement from "@/components/modules/dashboard/admin/profile";
import { getMyProfile } from "@/services/AuthService";

const Profilepage = async () => {
  const myProfile = await getMyProfile();
  return (
    <div>
      <AdminProfileManagement profile={myProfile} />
    </div>
  );
};

export default Profilepage;
