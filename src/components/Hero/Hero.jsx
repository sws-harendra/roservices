import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden bg-slate-50">
      {/* Background Decorative element to simulate wave/gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-50 to-white z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
