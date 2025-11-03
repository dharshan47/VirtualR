import codeImg from "@/assets/code.png";
import { checklistItems } from "@/data";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <section id="workflow" className="scroll-mt-24 relative max-w-7xl px-6 mx-auto mt-10">
      <h2 className="text-4xl sm:text-6xl tracking-wide text-center">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          {" "}
          coding workflow.
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6 p-2 ">
        <img src={codeImg} alt="CodeImg" />
        <div>
          {checklistItems.map((item) => (
            <div key={item.id} className="flex mt-8 ">
              <div className="justify-center items-center mx-6 text-green-400 p-2 ">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="mt-1  dark:text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
