import { UserProfile } from "@/types";
import AdminProfileCard from "./AdminProfileCard";

const AdminProfileManagement = ({ profile }: {profile:UserProfile}) => {

  return (
    <div>
      <AdminProfileCard profile={profile?.data} />
    </div>
  );
};

export default AdminProfileManagement;
