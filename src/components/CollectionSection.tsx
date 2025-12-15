import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionPendants from "@/assets/collection-pendants.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";
import collectionNecklace from "@/assets/collection-necklace.jpg";
import collectionBangles from "@/assets/collection-bangles.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

const collections = [
  { name: "Rings", image: collectionRings },
  { name: "Earrings", image: collectionEarrings },
  { name: "Pendants", image: collectionPendants },
  { name: "Bracelets", image: collectionBracelets },
  { name: "Necklace", image: collectionNecklace },
  { name: "Bangles", image: collectionBangles },
  { name: "Accessories", image: collectionAccessories },
];

const CollectionSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-4xl font-medium text-center mb-10">
          Explore Our <span className="italic">Collection</span>
        </h2>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 md:gap-6 min-w-max md:grid md:grid-cols-7 md:min-w-0">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href="#"
                className="group flex flex-col items-center w-28 md:w-auto"
              >
                <div className="w-24 h-32 md:w-full md:h-40 bg-secondary rounded-sm overflow-hidden mb-3">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="font-body text-sm text-foreground underline underline-offset-4 decoration-border group-hover:decoration-primary transition-colors">
                  {collection.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
