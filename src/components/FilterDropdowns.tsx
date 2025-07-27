import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface FilterDropdownsProps {
  selectedGenre: string;
  selectedYear: string;
  selectedQuality: string;
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
  onQualityChange: (quality: string) => void;
}

export const FilterDropdowns = ({
  selectedGenre,
  selectedYear,
  selectedQuality,
  onGenreChange,
  onYearChange,
  onQualityChange
}: FilterDropdownsProps) => {
  const genres = [
    "All Genres", "Action", "Adventure", "Animation", "Anime", "Biography", 
    "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Musical", "Mystery", 
    "Romance", "Sci-Fi", "Sports", "Supernatural", "Thriller"
  ];

  const years = [
    "All Years", "2025", "2024", "2023", "2022", "2021", "2020", 
    "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", 
    "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2002"
  ];

  const qualities = ["All Qualities", "4K", "1080P", "720P", "480P"];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Genre Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-background border-border hover:bg-muted">
              Genre: {selectedGenre}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 max-h-60 overflow-y-auto bg-background border-border z-50">
            {genres.map((genre) => (
              <DropdownMenuItem
                key={genre}
                onClick={() => onGenreChange(genre)}
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
            <Button variant="outline" className="gap-2 bg-background border-border hover:bg-muted">
              Year: {selectedYear}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 max-h-60 overflow-y-auto bg-background border-border z-50">
            {years.map((year) => (
              <DropdownMenuItem
                key={year}
                onClick={() => onYearChange(year)}
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
            <Button variant="outline" className="gap-2 bg-background border-border hover:bg-muted">
              Quality: {selectedQuality}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-background border-border z-50">
            {qualities.map((quality) => (
              <DropdownMenuItem
                key={quality}
                onClick={() => onQualityChange(quality)}
                className="cursor-pointer hover:bg-muted"
              >
                {quality}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};