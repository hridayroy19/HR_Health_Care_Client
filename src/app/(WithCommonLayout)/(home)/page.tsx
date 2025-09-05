import Banner from "@/components/modules/home/Banner";
import Blogs from "@/components/modules/home/Blogs";
import Counter from "@/components/modules/home/Counter";
import FQAs from "@/components/modules/home/FQAs";
import HealthCare from "@/components/modules/home/HealthCare";
import HealthCareThree from "@/components/modules/home/HealthCareThree";
import HealthCareWhy from "@/components/modules/home/HealthCareWhy";
import Partners from "@/components/modules/home/Partners";
import Review from "@/components/modules/home/Review";
import Specialties from "@/components/modules/home/Specialties";

const Home = async () => {
  return (
    <div>
      <Banner />
      <Counter />
      <HealthCare />
      <HealthCareWhy />
      <HealthCareThree />
      <Specialties />
      <Blogs />
      <Partners />
      <Review />
      <FQAs />
    </div>
  );
};

export default Home;
