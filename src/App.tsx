import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"

const App = () => {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Hero />
      <Features/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
    </ThemeProvider>
    
  );
};

export default App;
