import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Counter from "@/components/home/Counter";
import FQAs from "@/components/home/FQAs";
import HealthCare from "@/components/home/HealthCare";
import HealthCareWhy from "@/components/home/HealthCareWhy";
import Specialties from "@/components/home/Specialties";

const Home = () => {
  return (
    <div>
      <Banner />
      <Counter/>
      <HealthCare/>
      <HealthCareWhy/>
      <Specialties/>
      <Blogs/>
      <FQAs/>
    </div>
  );
};

export default Home;
