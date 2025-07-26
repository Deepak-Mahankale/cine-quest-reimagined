import { Header } from "@/components/Header";
import { ActionButtons } from "@/components/ActionButtons";
import { CategoryBadges } from "@/components/CategoryBadges";
import { AlertBanner } from "@/components/AlertBanner";
import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <ActionButtons />
      <CategoryBadges />
      <AlertBanner />
      <HeroSection />
      <MovieGrid />
      <Footer />
    </div>
  );
};

export default Index;
