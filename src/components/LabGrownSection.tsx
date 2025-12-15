import { Shield, Diamond, Globe, Gift, Palette, Award } from "lucide-react";
import diamondsImage from "@/assets/diamonds.jpg";

const features = [
  { icon: Shield, label: "925 Sterling Silver" },
  { icon: Diamond, label: "Certified Diamonds" },
  { icon: Globe, label: "Ethical Sourcing" },
  { icon: Gift, label: "Free 15 Days\nReturn & Exchange" },
  { icon: Palette, label: "Customisable\nDesigns" },
  { icon: Award, label: "BIS Hallmark" },
];

const LabGrownSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div>
            <div className="aspect-square md:aspect-[4/3] bg-background rounded-sm overflow-hidden">
              <img
                src={diamondsImage}
                alt="Lab grown diamonds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
              Not Just A Trend. It's<br />
              The <span className="italic">Future</span>.
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Our lab-grown gold and silver jewellery is crafted with the same brilliance and purity as mined metals without the compromise.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {features.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center mb-2">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="font-body text-xs text-foreground whitespace-pre-line">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabGrownSection;
