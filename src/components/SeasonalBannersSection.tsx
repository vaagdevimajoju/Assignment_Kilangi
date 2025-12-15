import { ArrowRight, Sparkle, Heart } from "lucide-react";
import winterLove from "@/assets/winter-love.jpg";
import labGrown from "@/assets/lab-grown.jpg";

const SeasonalBannersSection = () => {
  return (
    <section className="py-0 bg-background">
      <div className="grid md:grid-cols-2">
        {/* Winter Love Banner */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src={winterLove}
            alt="Winter love collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-primary-foreground">
            <div className="flex items-center gap-2 mb-2">
              <Sparkle className="w-5 h-5" />
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-1">
              Winter <span className="italic">Love</span> Has<br />
              Arrived..
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-background text-foreground text-sm font-body rounded-sm hover:bg-secondary transition-colors"
            >
              Explore New Arrivals
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Lab Grown Banner */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src={labGrown}
            alt="Lab grown silver and gold collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-primary-foreground">
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-1">
              Introducing <span className="italic">Lab Grown</span><br />
              Silver and Gold
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-background text-foreground text-sm font-body rounded-sm hover:bg-secondary transition-colors"
            >
              Shop Gold and Silver
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalBannersSection;
