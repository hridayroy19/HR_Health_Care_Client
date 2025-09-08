import DoctorDetailsManagement from "@/components/modules/doctor/doctorDetails";
import { getSingleDoctors } from "@/services/Doctor";

const DoctorDetailspage = async ({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) => {
  const { doctorId } = await params;
  const doctor = await getSingleDoctors(doctorId);
  console.log(doctor,"main data")

  return (
    <div>
      <DoctorDetailsManagement doctor={doctor?.data || []} />
    </div>
  );
};

export default DoctorDetailspage;
