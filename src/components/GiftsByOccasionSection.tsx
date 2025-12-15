import { ArrowRight } from "lucide-react";
import giftBirthday from "@/assets/gift-birthday.jpg";
import giftAnniversary from "@/assets/gift-anniversary.jpg";
import giftEngagement from "@/assets/gift-engagement.jpg";

const occasions = [
  {
    title: "BIRTHDAY",
    description: "Celebrate their special day with a timeless piece that shines as bright as they do.",
    image: giftBirthday,
    cta: "Shop Birthday Gifts",
  },
  {
    title: "ANNIVERSARY",
    description: "Mark your love story with jewellery that symbolizes everlasting connection and devotion.",
    image: giftAnniversary,
    cta: "Shop Anniversary Gifts",
  },
  {
    title: "ENGAGEMENT",
    description: "Begin forever with a piece that captures the promise of your beautiful journey ahead.",
    image: giftEngagement,
    cta: "Shop Engagement Gifts",
  },
];

const GiftsByOccasionSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-4xl font-medium text-center mb-3">
          Gifts That <span className="italic">Celebrate</span> Every Moment
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
          Varius velit platea quis pellentesque mi et imperdiet. dolor sit amet consectetur.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {occasions.map((occasion) => (
            <div key={occasion.title} className="group">
              <div className="aspect-[4/5] bg-background rounded-sm overflow-hidden mb-4">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-body text-sm font-semibold tracking-wider mb-2">
                {occasion.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                {occasion.description}
              </p>
              <a href="#" className="btn-primary text-xs">
                {occasion.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="#" className="btn-primary">
            Explore More Collection
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GiftsByOccasionSection;
