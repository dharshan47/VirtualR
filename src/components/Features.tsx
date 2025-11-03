import { features } from "@/data";

const Features = () => {
  return (
    <section
      id="features"
      className="scroll-mt-24 relative max-w-7xl mx-auto px-6 mt-10 "
    >
      <div className="text-center">
        <span className="px-2 py-1 uppercase text-orange-700 font-medium">
          Feature
        </span>
        <h2 className="text-4xl sm:text-6xl mt-6 lg:mt-12 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
        {features.map((feature) => (
          <div key={feature.id} className="flex mt-3 items-start ">
            <div className="flex justify-center items-center text-orange-700 mx-6 p-2 ">
              {feature.icon}
            </div>
            <div>
              <h5 className=" text-xl mt-1 mb-3">{feature.text}</h5>
              <p className="dark:text-neutral-500 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
