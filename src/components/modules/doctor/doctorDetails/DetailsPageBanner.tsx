import TextHighlighter from "@/components/ui/text-highlighter";

const Banner = () => {
  return (
    <div className="md:pt-28 pt-16">
      <div className=" font-sans bg-purple-50 border py-10 flex items-center justify-center overflow-hidden">
        <div className=" lg:max-w-3xl md:max-w-xl  mx-auto md:px-2 px-8 ">
          <TextHighlighter type="wavy" highlightColor="#f59e0b">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Doctor s Profile Details
            </h1>
          </TextHighlighter>
          <p className="text-sm sm:text-base py-3 text-gray-700  leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim
            blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis
            vitae tempus facilisis turpis imperdiet mattis donec dignissim
            volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
