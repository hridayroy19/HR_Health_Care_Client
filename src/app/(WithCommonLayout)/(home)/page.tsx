import Banner from "@/components/home/Banner";
import Counter from "@/components/home/Counter";
import HealthCare from "@/components/home/HealthCare";
import HealthCareWhy from "@/components/home/HealthCareWhy";
import BorderGlideDemo from "@/components/home/Specialties";
// import Specialties from "@/components/home/Specialties";

const Home = () => {
  return (
    <div>
      <Banner />
      <Counter/>
      <HealthCare/>
      <HealthCareWhy/>
      {/* <Specialties/> */}
      <BorderGlideDemo/>
    </div>
  );
};

export default Home;
