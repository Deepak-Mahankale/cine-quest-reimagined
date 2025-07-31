import { useState } from "react";
import { Header } from "@/components/Header";
import { ActionButtons } from "@/components/ActionButtons";
import { CategoryBadges } from "@/components/CategoryBadges";
import { AlertBanner } from "@/components/AlertBanner";
import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";
import { FilterDropdowns } from "@/components/FilterDropdowns";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedQuality, setSelectedQuality] = useState("All Qualities");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery}
        onCategorySelect={setSelectedCategory}
        onGenreSelect={setSelectedGenre}
        onYearSelect={setSelectedYear}
        onQualitySelect={setSelectedQuality}
      />
      <ActionButtons />
      <CategoryBadges onCategorySelect={setSelectedCategory} />
      <AlertBanner />
      <MovieGrid 
        searchQuery={searchQuery}
        selectedGenre={selectedGenre}
        selectedYear={selectedYear}
        selectedQuality={selectedQuality}
        selectedCategory={selectedCategory}
      />
      <Footer />
    </div>
  );
};

export default Index;
