import { Star, ArrowRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    image: testimonial1,
    title: "So pretty!",
    review: "I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
    author: "Harshad Mehta",
  },
  {
    image: testimonial2,
    title: "So pretty!",
    review: "I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
    author: "Harshad Mehta",
  },
  {
    image: testimonial3,
    title: "So pretty!",
    review: "I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
    author: "Harshad Mehta",
  },
  {
    image: testimonial4,
    title: "So pretty!",
    review: "I recently ordered the 'Golden Radiance Hoops' from Kilangi, and I'm absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
    author: "Harshad Mehta",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-4xl font-medium text-center mb-3">
          Voices of Our <span className="italic">Happy Customer</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
          Every piece we create carries a story but nothing shines brighter than the words of those who wear them.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-secondary rounded-sm overflow-hidden mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <h3 className="font-heading text-lg italic text-foreground mb-2">
                "{testimonial.title}"
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 line-clamp-3">
                {testimonial.review}
              </p>
              <span className="font-body text-xs text-foreground">
                ~ {testimonial.author}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="#" className="btn-primary">
            Read More Review
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
