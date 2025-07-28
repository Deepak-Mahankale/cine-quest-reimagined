import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Play, Star } from "lucide-react";
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
        
        {/* Hover Overlay - Click to view details */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <Play className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm font-medium">View Details</p>
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