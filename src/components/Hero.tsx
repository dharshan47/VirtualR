import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";

const Hero = () => {
  return (
    <div className=" realtive max-w-7xl mx-auto px-6 mt-20">
      <div className="flex flex-col items-center mt-6 lg:mt-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl  tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg  dark:text-neutral-500">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started toady and turn tour
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10 ">
          <a
            href=""
            className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2  rounded-md mx-3"
          >
            Start for free
          </a>
          <a href="" className="px-3 py-2 border rounded-md mx-3 ">
            Documentation
          </a>
        </div>
        <div className="flex  justify-center">
          <video
            autoPlay
            loop
            muted
            className="w-1/2 rounded-lg border border-orange-700 shadow-orange-500 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            className="w-1/2 rounded-lg border border-orange-700 shadow-orange-500 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
