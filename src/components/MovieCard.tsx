import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  id?: string;
  title: string;
  year: string;
  rating: number;
  quality: string;
  genres: string[];
  imageUrl: string;
  description: string;
}

export const MovieCard = ({ id = "1", title, year, rating, quality, genres, imageUrl, description }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card className="movie-card gradient-card border-border group overflow-hidden cursor-pointer transition-transform hover:scale-105" onClick={handleCardClick}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quality Badge */}
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
          {quality}
        </Badge>
        
        {/* Rating */}
        <div className="absolute top-2 left-2 flex items-center space-x-1 bg-black/60 rounded px-2 py-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs text-white font-medium">{rating}</span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                // Handle play action
              }}
            >
              <Play className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                // Handle download action
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{year}</p>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {genres.map((genre, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};