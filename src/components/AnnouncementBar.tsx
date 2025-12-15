import { Instagram, Facebook } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container flex items-center justify-between">
        <span className="hidden md:block" />
        <p className="text-xs md:text-sm font-body text-center flex-1">
          Step into Sparkle – Pure Gold & Silver Await
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
