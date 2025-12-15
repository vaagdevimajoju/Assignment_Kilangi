import { ArrowRight } from "lucide-react";
import ethosJewelry from "@/assets/ethos-jewelry.jpg";

const EthosSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-square md:aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <img
                src={ethosJewelry}
                alt="Our jewelry collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="font-body text-xs tracking-widest text-muted-foreground uppercase mb-4 block">
              OUR ETHOS
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Every <span className="italic">Shape</span>.<br />
              Every <span className="italic">Sparkle</span>.
            </h2>
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              Every piece we create is a blend of artistry and awareness handcrafted with precision, guided by purpose.
            </p>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              From ethically sourced materials to sustainable processes, we believe true beauty shines brightest when it's made responsibly.
            </p>
            <a href="#" className="btn-primary">
              Know More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
