import { Search, Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
  onGenreSelect?: (genre: string) => void;
  onYearSelect?: (year: string) => void;
  onQualitySelect?: (quality: string) => void;
}

export const Header = ({ searchQuery, onSearchChange, onCategorySelect, onGenreSelect, onYearSelect, onQualitySelect }: HeaderProps) => {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentSearchQuery = searchQuery !== undefined ? searchQuery : localSearchQuery;
  const handleSearchChange = onSearchChange || setLocalSearchQuery;

  const handleNavigation = (category: string) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  const handleSearchSubmit = (query: string) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    handleSearchChange(query);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              VEGAMOVIES
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              onClick={() => {
                navigate("/");
                if (onCategorySelect) {
                  onCategorySelect("");
                }
              }}
            >
              HOME
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              onClick={() => handleNavigation("Web Series")}
            >
              WEB SERIES
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              onClick={() => handleNavigation("Dual Audio")}
            >
              DUAL AUDIO
            </Button>
            
            {/* Genre Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary gap-1">
                  GENRE
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 max-h-60 overflow-y-auto bg-background border-border z-50">
                {["All Genres", "Action", "Adventure", "Animation", "Anime", "Biography", 
                  "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Musical", "Mystery", 
                  "Romance", "Sci-Fi", "Sports", "Supernatural", "Thriller"].map((genre) => (
                  <DropdownMenuItem
                    key={genre}
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/");
                      }
                      if (onGenreSelect) {
                        onGenreSelect(genre);
                      }
                    }}
                    className="cursor-pointer hover:bg-muted"
                  >
                    {genre}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Year Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary gap-1">
                  BY YEAR
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 max-h-60 overflow-y-auto bg-background border-border z-50">
                {["All Years", "2025", "2024", "2023", "2022", "2021", "2020", 
                  "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", 
                  "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2002"].map((year) => (
                  <DropdownMenuItem
                    key={year}
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/");
                      }
                      if (onYearSelect) {
                        onYearSelect(year);
                      }
                    }}
                    className="cursor-pointer hover:bg-muted"
                  >
                    {year}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quality Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary gap-1">
                  BY QUALITIES
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border z-50">
                {["All Qualities", "4K", "1080P", "720P", "480P"].map((quality) => (
                  <DropdownMenuItem
                    key={quality}
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/");
                      }
                      if (onQualitySelect) {
                        onQualitySelect(quality);
                      }
                    }}
                    className="cursor-pointer hover:bg-muted"
                  >
                    {quality}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Movies or WEB-Series here..."
                value={currentSearchQuery}
                onChange={(e) => handleSearchSubmit(e.target.value)}
                className="pl-10 w-80 bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};