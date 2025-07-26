import { Header } from "@/components/Header";
import { ActionButtons } from "@/components/ActionButtons";
import { CategoryBadges } from "@/components/CategoryBadges";
import { AlertBanner } from "@/components/AlertBanner";
import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ActionButtons />
      <CategoryBadges />
      <AlertBanner />
      <HeroSection />
      <MovieGrid />
    </div>
  );
};

export default Index;
