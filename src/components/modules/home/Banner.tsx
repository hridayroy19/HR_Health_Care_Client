import Image from "next/image";
import { InteractiveInput } from "../../ui/interactive-input";

const Banner = () => {
  return (
    <div className="lg:pt-20 md:pt-14 pt-10 bg-gray-100 ">
      <section className=" lg:grid lg:h-[80vh] lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl md:px-14 px-10 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-14 lg:py-32">
          {/* Left Content */}
          <div className="max-w-prose text-left">
            <h1 className="xl:text-5xl font-bold text-gray-900 md:text-4xl text-3xl leading-snug">
              Consult with{" "}
              <strong className="text-purple-700">Expert Doctors</strong> <br />
              Anytime, Anywhere
            </h1>

            <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed">
              Get instant access to qualified doctors from the comfort of your
              home. Whether it’s general health, chronic conditions, or urgent
              medical advice, our healthcare professionals are here to help you
              24/7.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <div className="flex items-center justify-center">
  <InteractiveInput
    className="bg-gradient-to-r from-blue-800 to-purple-900 
               text-white font-semibold px-8 py-4 
               rounded-full shadow-lg "
    variant="default"
    inputSize="lg"
    glow={true}
    rounded="full"
    hideAnimations={false}
    uppercase={false}
    textEffect="spread"
    shimmerColor="#4333ea"
    shimmerSize="0.1em"
    shimmerDuration="1.5s"
    borderRadius="9999px"
    background="linear-gradient(70deg, #1563eb, #8333ea)"
    placeholder="Consult a Doctor Now →"
  />
</div>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="https://i.ibb.co.com/997Wq6PR/national-cancer-institute-tl447mekwu-Q-unsplash-removebg-preview.png"
              width={400}
              height={200}
              alt="Doctor consultation online"
              className="md:w-[600px] w-full bg-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
