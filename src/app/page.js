import AboutUsSection from "@/components/home/AboutUsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSearch from "@/components/home/HeroSearch";
import HeroSearchHelper from "@/components/home/HeroSearchHelper";
import HeroSection from "@/components/home/HeroSection";;
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";

export default function Home() {
  return (
    <div className="flex  flex-col items-center ">
       <Header />
       <div className=" relative">
       <HeroSection />
        <HeroSearch />
       <HeroSearchHelper />
       </div>
        <FeaturedSection />  
        <AboutUsSection />
       <Footer />
    </div>
  );
}
