import modelJewelry from "@/assets/model-jewelry.jpg";
import handsRings from "@/assets/hands-rings.jpg";

const priceCategories = [
  { label: "Shop Under ₹10000", image: handsRings },
  { label: "Shop Under ₹20000", image: handsRings },
  { label: "Shop Under ₹30000", image: handsRings },
  { label: "E-Gift Cards", image: handsRings },
];

const GiftNotesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-4xl font-medium text-center mb-10">
          Make It <span className="italic">Extra Special</span> with Personalised<br className="hidden md:block" />
          Gift Notes
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Large left image */}
          <div className="md:row-span-2 relative overflow-hidden rounded-sm">
            <img
              src={modelJewelry}
              alt="Model wearing jewelry"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Right grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
            {priceCategories.map((category) => (
              <div key={category.label} className="group cursor-pointer">
                <div className="aspect-square bg-secondary rounded-sm overflow-hidden mb-3">
                  <img
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="btn-outline w-full justify-center text-xs md:text-sm py-2">
                  {category.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftNotesSection;
