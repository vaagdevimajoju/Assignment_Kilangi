import { Sparkles } from "lucide-react";

const features = [
  "Anti - Fade Polish",
  "Timeless Design",
  "Lightweight Comfort",
  "Modern Minimal",
];

const FeaturesBar = () => {
  return (
    <section className="bg-secondary py-4 border-y border-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2 text-foreground">
              {index > 0 && (
                <Sparkles className="w-4 h-4 text-gold hidden md:block" />
              )}
              <span className="text-xs md:text-sm font-body whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
