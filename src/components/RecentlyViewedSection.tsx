import ringProduct from "@/assets/ring-product.jpg";

const products = [
  { id: 1, name: "TWISTED PETAL GOLD BRACELET", price: 79904, image: ringProduct },
  { id: 2, name: "TWISTED PETAL GOLD BRACELET", price: 79904, image: ringProduct },
  { id: 3, name: "TWISTED PETAL GOLD BRACELET", price: 79904, image: ringProduct },
  { id: 4, name: "TWISTED PETAL GOLD BRACELET", price: 79904, image: ringProduct },
];

const RecentlyViewedSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-medium mb-8">
          Recently Viewed
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-background rounded-sm overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-body text-xs md:text-sm font-medium text-foreground mb-1 uppercase tracking-wide line-clamp-2">
                {product.name}
              </h3>
              <span className="font-body text-xs md:text-sm font-medium text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewedSection;
