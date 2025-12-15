import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "All Jewellery", href: "#" },
    { label: "Gold", href: "#" },
    { label: "Silver", href: "#" },
    { label: "Gifting", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Search - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for Earrings.."
                className="pl-3 pr-10 py-2 text-sm bg-transparent border-border"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center">
            <a href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-heading text-2xl md:text-3xl font-semibold tracking-wide">
                KILANGI
              </span>
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4 flex-1 justify-end">
            <button className="md:hidden p-1" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-1 hidden md:block" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-1" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-1" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
