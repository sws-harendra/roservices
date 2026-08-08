import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import CompanyInfo from "../components/about/CompanyInfo";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Services from "../components/Services";
import StatsBanner from "../components/StatsBanner";
import HappyClients from "../components/HappyClients";
import BottomFeatures from "../components/BottomFeatures";
import Process from "../components/about/Process";
import CtaBanner from "../components/CtaBanner";

function Home() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <WhyChooseUs />
      <StatsBanner />
      <Services />
      <BottomFeatures />
      <Process />
      <HappyClients />
      <CtaBanner />
    </div>
  );
}

export default Home;
