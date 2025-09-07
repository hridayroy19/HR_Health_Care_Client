import SpecialtiesManagement from "@/components/modules/dashboard/specialties";
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
