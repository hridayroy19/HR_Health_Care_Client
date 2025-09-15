import AllDoctors from "@/components/modules/doctor";
import { getAllDoctors } from "@/services/Doctor";

const DoctorPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const doctor = await getAllDoctors(page);
  return (
    <div>
      <AllDoctors doctor={doctor.data?.data || []} meta={doctor.data.meta} />
    </div>
  );
};

export default DoctorPage;
