const footerLinks = {
  ourCollection: [
    "Rings",
    "Earrings",
    "Pendants",
    "Bracelets",
    "Necklaces",
    "Bangles",
    "Accessories",
  ],
  quickLinks: [
    "All Jewellery",
    "Gold",
    "Silver",
    "Gifting",
    "About Us",
    "Contact Us",
  ],
  policies: [
    "Privacy Policy",
    "Refund Policy",
    "Shipping Policy",
    "Privacy Policy",
    "Terms & Condition",
    "FAQ's Policy",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-heading text-2xl font-semibold tracking-wide">
                KILANGI
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
              Kilangi Jewellery is a premium brand specializing in exquisite silver and gold jewellery.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Known for its timeless elegance and fine craftsmanship, Kilangi offers a curated collection of traditional and contemporary designs perfect for every occasion.
            </p>
          </div>

          {/* Our Collection */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider mb-4 uppercase">
              OUR COLLECTION
            </h4>
            <ul className="space-y-2">
              {footerLinks.ourCollection.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider mb-4 uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider mb-4 uppercase">
              POLICIES
            </h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link, index) => (
                <li key={`${link}-${index}`}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container">
          <p className="font-body text-sm text-center">
            © 2025 / Kilangi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
