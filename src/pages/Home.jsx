import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
import HappyClients from "../components/HappyClients";
import Faq from "../components/Faq";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Services />
      <HappyClients />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
