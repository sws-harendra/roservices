import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
import StatsBanner from "../components/StatsBanner";
import HappyClients from "../components/HappyClients";
import BottomFeatures from "../components/BottomFeatures";
import Faq from "../components/Faq";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <StatsBanner />
      <HappyClients />
      <BottomFeatures />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
