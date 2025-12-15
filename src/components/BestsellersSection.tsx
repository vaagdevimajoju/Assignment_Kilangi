import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ringProduct from "@/assets/ring-product.jpg";

const categories = ["Rings", "Earrings", "Pendants", "Bracelets", "Bangles"];

const products = [
  {
    id: 1,
    name: "TWISTED PETAL GOLD BRACELET",
    price: 79904,
    originalPrice: 99904,
    image: ringProduct,
    colors: ["gold", "silver"],
  },
  {
    id: 2,
    name: "TWISTED PETAL GOLD BRACELET",
    price: 79904,
    originalPrice: 99904,
    image: ringProduct,
    colors: ["gold"],
  },
  {
    id: 3,
    name: "TWISTED PETAL GOLD BRACELET",
    price: 79904,
    originalPrice: 99904,
    image: ringProduct,
    colors: ["gold", "silver"],
  },
];

const BestsellersSection = () => {
  const [activeCategory, setActiveCategory] = useState("Rings");

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-4xl font-medium text-center mb-6">
          Explore Our <span className="italic">Timeless Bestseller</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-body rounded-full border transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-secondary rounded-sm overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-body text-sm font-medium text-foreground mb-2 uppercase tracking-wide">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-body text-sm font-medium text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="font-body text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-1.5">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-4 h-4 rounded-full border border-border ${
                      color === "gold" ? "bg-gold" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shop Button */}
        <div className="flex justify-center mt-10">
          <a href="#" className="btn-primary">
            Shop Bestsellers
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
