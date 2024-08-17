import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import HeroSection from "./_home_page/HeroSection";
import Home_Sec1 from "./_home_page/Home_Sec1";
import Home_Sec2 from "./_home_page/Home_Sec2";
import Home_Sec4 from "./_home_page/Home_Sec4";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VelocityScroll
        text=" Selected Works "
        default_velocity={2}
        className="h1 text-4xl text-primary md:text-7xl"
      />
      <Home_Sec1 />
      <Home_Sec2 />
      <Home_Sec4 />
    </>
  );
}
