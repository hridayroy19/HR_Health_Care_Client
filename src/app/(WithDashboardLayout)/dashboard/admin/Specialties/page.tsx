import SpecialtiesManagement from "@/components/modules/dashboard/admin/specialties";
import { getAllSpecialties } from "@/services/Specitlies";

const SpecialtiesPage = async () => {
  const specialties = await getAllSpecialties();
  return (
    <div>
      <SpecialtiesManagement specialties={specialties.data} />
    </div>
  );
};

export default SpecialtiesPage;
