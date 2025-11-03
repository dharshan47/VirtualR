import { pricingOptions } from "@/data";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative max-w-7xl mx-auto px-6 mt-10 text-center tracking-wider scroll-mt-24"
    >
      <h2 className="text-4xl sm:text-6xl ">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
        {pricingOptions.map((pricing) => (
          <div
            key={pricing.id}
            className="border p-10 border-neutral-700 rounded-xl "
          >
            <p className="text-2xl mb-6">
              {pricing.title}{" "}
              {pricing.title === "Pro" && (
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent text-sm">
                  (Most Popular)
                </span>
              )}
            </p>
            <p className="mb-6">
              <span className="text-3xl mt-3 mr-2">{pricing.price}</span>
              <span className="dark:text-neutral-400 text-neutral-700 tracking-tight">
                /Month
              </span>
            </p>
            <ul>
              {pricing.features.map((feature, i) => (
                <li key={i} className="flex items-center mt-6 ">
                  <CheckCircle2 />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href=""
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 -tracking-tight hover:bg-orange-700 border px-3 py-2 mt-6 rounded-lg border-orange-900 transition duration-300 cursor-pointer"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
