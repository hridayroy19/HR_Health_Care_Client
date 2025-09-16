import AllDoctors from "@/components/modules/doctor";
import { getAllDoctors } from "@/services/Doctor";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const DoctorPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;
  const doctor = await getAllDoctors(undefined, undefined, query);

  return (
    <div>
      <AllDoctors doctor={doctor.data?.data || []} meta={doctor.data.meta} />
    </div>
  );
};

export default DoctorPage;
