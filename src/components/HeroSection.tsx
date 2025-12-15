import { ArrowRight } from "lucide-react";
import heroNecklace from "@/assets/hero-necklace.jpg";
import heroRings from "@/assets/hero-rings.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="grid md:grid-cols-2">
        {/* Left Content */}
        <div className="relative">
          <img
            src={heroNecklace}
            alt="Elegant pearl necklace"
            className="w-full h-64 md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14 bg-gradient-to-t from-background/80 to-transparent">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3">
              Because You Deserve to<br />
              Feel <span className="italic text-primary">Timeless</span>.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md">
              Each piece is thoughtfully designed to celebrate your individuality —
              blending modern elegance with lasting craftsmanship.
            </p>
            <a
              href="#"
              className="btn-outline w-fit"
            >
              Explore the Elegance
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={heroRings}
            alt="Elegant gold ring on hand"
            className="w-full h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
