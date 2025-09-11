import { IDoctor } from "@/types";
import DoctorDetailsCard from "./DoctorDetailsCard";
import Banner from "./DetailsPageBanner";
import DoctorAditionInfo from "./Tabs";

const DoctorDetailsManagement = ({doctor}:{doctor:IDoctor}) => {

  return (
    <div>
      <Banner/>
      <DoctorDetailsCard doctor={doctor} />
      <DoctorAditionInfo/>
    </div>
  );
};

export default DoctorDetailsManagement;
