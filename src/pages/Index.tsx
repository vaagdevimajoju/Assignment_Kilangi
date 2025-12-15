import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import BestsellersSection from "@/components/BestsellersSection";
import RecentlyViewedSection from "@/components/RecentlyViewedSection";
import GiftNotesSection from "@/components/GiftNotesSection";
import SeasonalBannersSection from "@/components/SeasonalBannersSection";
import CollectionSection from "@/components/CollectionSection";
import GiftsByOccasionSection from "@/components/GiftsByOccasionSection";
import EthosSection from "@/components/EthosSection";
import LabGrownSection from "@/components/LabGrownSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturesBar />
        <BestsellersSection />
        <RecentlyViewedSection />
        <GiftNotesSection />
        <SeasonalBannersSection />
        <CollectionSection />
        <GiftsByOccasionSection />
        <EthosSection />
        <LabGrownSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
