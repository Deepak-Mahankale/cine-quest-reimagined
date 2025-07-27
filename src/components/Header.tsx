import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  
  const currentSearchQuery = searchQuery !== undefined ? searchQuery : localSearchQuery;
  const handleSearchChange = onSearchChange || setLocalSearchQuery;

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
            <Button variant="ghost" className="text-foreground hover:text-primary">
              HOME
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              WEB SERIES
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              DUAL AUDIO
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              GENRE
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              BY YEAR
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              BY QUALITIES
            </Button>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search Movies or WEB-Series here..."
                value={currentSearchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
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