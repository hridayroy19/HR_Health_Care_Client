import ShuduleMangemtn from "@/components/modules/dashboard/admin/schudule";
import { getAllSchdule } from "@/services/schdule";

const SchdulePage = async() => {
  const schdule = await getAllSchdule()
  console.log(schdule,"schdule")
  return (
    <div>
      <ShuduleMangemtn />
    </div>
  );
};

export default SchdulePage;
