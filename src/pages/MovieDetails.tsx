import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Play, Download, Star, Calendar, Film } from "lucide-react";

// Mock movie data - in a real app this would come from an API
const getMovieById = (id: string) => {
  const movies = {
    "1": {
      id: "1",
      title: "Lord of the Mysteries",
      year: "2025",
      rating: "8.8",
      quality: "1080p",
      genres: ["Animation", "Action", "Adventure"],
      imageUrl: "/placeholder.svg",
      description: "Download Lord of the Mysteries Season 1 (2025) All Episodes [Hindi-Chinese] are available in 480p, 720p, 1080p. This Chinese Anime WEB Series is based on Animation, Action, Adventure.",
      language: "Hindi + Chinese",
      format: "WEB-DL",
      imdbRating: "8.8/10",
      season: "Season 1",
      totalEpisodes: "All Episodes",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "July 26, 2025"
    }
  };
  return movies[id as keyof typeof movies] || null;
};

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(id || "1");

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button 
            onClick={() => navigate("/")}
            className="hover:text-foreground transition-colors"
          >
            Home
          </button>
          <span>›</span>
          <span>Anime Series</span>
          <span>›</span>
          <span className="text-foreground">{movie.title}</span>
        </div>

        {/* Back Button */}
        <Button 
          onClick={() => navigate("/")} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Movies
        </Button>

        {/* Movie Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {movie.quality}
                </Badge>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Download {movie.title} ({movie.year}) {movie.season}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                [{movie.totalEpisodes} Added] Dual Audio [{movie.language}] 
                Anime Series {movie.downloadSizes.join(", ")} {movie.format}
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{movie.releaseDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{movie.imdbRating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Series Info:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">IMDb Rating:</span>
                  <span>{movie.imdbRating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  <span className="font-semibold">Series Name:</span>
                  <span>{movie.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Season:</span>
                  <span>1</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {movie.description}
              </p>
            </div>

            <Separator />

            {/* Download Section */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">
                Download {movie.title} {movie.season} ({movie.year}) All Episodes in Hindi ~ VegaMovies.co.rs
              </h3>
              
              <div className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  VegaMovies is the best online platform for downloading Hollywood and Bollywood Movies. 
                  We provide direct G-Drive download link for fast and secure downloading.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Online
                  </Button>
                  <Button size="lg" variant="outline">
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                  {movie.downloadSizes.map((size) => (
                    <Button key={size} variant="secondary" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;