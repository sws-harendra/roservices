import heroImg from "../../image/aqua1.png";
import HeroStats from "./HeroStats";

function HeroImage() {
  return (
    <div className="relative">
      <div className="bg-white p-5 rounded-3xl shadow-2xl">
        <img src={heroImg} alt="RO System" className="rounded-2xl w-full" />
      </div>

      <HeroStats />
    </div>
  );
}

export default HeroImage;
