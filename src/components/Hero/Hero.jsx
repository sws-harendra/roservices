import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="pt-28 pb-20 bg-blue from-sky-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />

          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
