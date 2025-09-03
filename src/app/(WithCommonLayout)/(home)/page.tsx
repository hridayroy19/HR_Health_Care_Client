import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Counter from "@/components/home/Counter";
import FQAs from "@/components/home/FQAs";
import HealthCare from "@/components/home/HealthCare";
import HealthCareThree from "@/components/home/HealthCareThree";
import HealthCareWhy from "@/components/home/HealthCareWhy";
import Partners from "@/components/home/Partners";
import GravityDemo from "@/components/home/Review";
// import Review from "@/components/home/Review";
import Specialties from "@/components/home/Specialties";

const Home = () => {
  return (
    <div>
      <Banner />
      <Counter/>
      <HealthCare/>
      <HealthCareWhy/>
      <HealthCareThree/>
      <Specialties/>
      <Blogs/>
      <Partners/>
      <GravityDemo/>
      <FQAs/>
    </div>
  );
};

export default Home;
