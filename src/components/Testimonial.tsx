import { testimonials } from "@/data";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="scroll-mt-24 realtive max-w-7xl mx-auto px-6 mt-10"
    >
      <h2 className="text-4xl sm:text-6xl tracking-wide text-center mb-6">
        What people are saying
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((testimonail) => (
          <div
            key={testimonail.id}
            className="p-6 bg-neutral rounded-md border border-neutral-700 dark:font-thin"
          >
            <p className="text-sm ">{testimonail.text}</p>
            <div className="flex items-start mt-4">
              <img
                src={testimonail.image}
                alt={testimonail.user}
                className="h-12 w-12 rounded-full mr-6"
              />
              <div className="italic">
                <h6>{testimonail.user}</h6>
                <span>{testimonail.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
