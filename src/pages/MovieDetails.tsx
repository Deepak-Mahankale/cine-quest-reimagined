import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      rating: "8.9",
      quality: "1080P",
      genres: ["Fantasy", "Mystery", "Adventure"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "Download Lord of the Mysteries Season 1 (2025) All Episodes [Hindi-Chinese] are available in 480p, 720p, 1080p. This Chinese Anime WEB Series is based on Animation, Action, Adventure. A mysterious tale of ancient powers and cosmic horrors in a steampunk world.",
      language: "Hindi + Chinese",
      format: "WEB-DL",
      imdbRating: "8.9/10",
      season: "Season 1",
      totalEpisodes: "All Episodes",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "July 26, 2025"
    },
    "2": {
      id: "2",
      title: "Dandadan",
      year: "2024",
      rating: "9.2",
      quality: "720P",
      genres: ["Anime", "Supernatural", "Comedy"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "Download Dandadan Season 1 (2024) All Episodes [Hindi-Japanese] are available in 480p, 720p, 1080p. High school students encounter aliens and ghosts in this supernatural comedy.",
      language: "Hindi + Japanese",
      format: "WEB-DL",
      imdbRating: "9.2/10",
      season: "Season 1",
      totalEpisodes: "All Episodes",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "October 15, 2024"
    },
    "3": {
      id: "3",
      title: "The Missing Gun",
      year: "2002",
      rating: "7.5",
      quality: "480P",
      genres: ["Crime", "Drama", "Thriller"],
      imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop",
      description: "Download The Missing Gun (2002) [Hindi-Chinese] are available in 480p, 720p. A police officer's missing gun leads to a web of corruption and danger.",
      language: "Hindi + Chinese",
      format: "WEB-DL",
      imdbRating: "7.5/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p"],
      releaseDate: "May 20, 2002"
    },
    "4": {
      id: "4",
      title: "The Chosen",
      year: "2024",
      rating: "8.1",
      quality: "1080P",
      genres: ["Drama", "Biography", "History"],
      imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop",
      description: "Download The Chosen Season 4 (2024) All Episodes [Hindi-English] are available in 480p, 720p, 1080p. The life of Jesus Christ told through the eyes of those who knew him.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "8.1/10",
      season: "Season 4",
      totalEpisodes: "All Episodes",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "March 12, 2024"
    },
    "5": {
      id: "5",
      title: "Chuhai no Osake",
      year: "2024",
      rating: "7.8",
      quality: "720P",
      genres: ["Anime", "Romance", "Comedy"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "Download Chuhai no Osake Season 1 (2024) All Episodes [Hindi-Japanese] are available in 480p, 720p, 1080p. A heartwarming story about love, friendship, and finding yourself.",
      language: "Hindi + Japanese",
      format: "WEB-DL",
      imdbRating: "7.8/10",
      season: "Season 1",
      totalEpisodes: "All Episodes",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "April 8, 2024"
    },
    "6": {
      id: "6",
      title: "Code 8: Part II",
      year: "2024",
      rating: "8.3",
      quality: "4K",
      genres: ["Action", "Sci-Fi", "Thriller"],
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      description: "Download Code 8: Part II (2024) [Hindi-English] are available in 480p, 720p, 1080p, 4K. In a world where superpowers are real, outcasts fight against oppression.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "8.3/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p", "1080p", "4K"],
      releaseDate: "February 28, 2024"
    },
    "7": {
      id: "7",
      title: "Fantastic Four",
      year: "2024",
      rating: "7.9",
      quality: "1080P",
      genres: ["Action", "Adventure", "Sci-Fi"],
      imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
      description: "Download Fantastic Four (2024) [Hindi-English] are available in 480p, 720p, 1080p. Marvel's First Family returns in this cosmic adventure.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "7.9/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "July 15, 2024"
    },
    "8": {
      id: "8",
      title: "Happy Gilmore 2",
      year: "2024",
      rating: "7.2",
      quality: "720P",
      genres: ["Comedy", "Sports"],
      imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop",
      description: "Download Happy Gilmore 2 (2024) [Hindi-English] are available in 480p, 720p, 1080p. Happy returns to the golf course for another hilarious adventure.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "7.2/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "August 20, 2024"
    },
    "9": {
      id: "9",
      title: "Indiana Jones 5",
      year: "2024",
      rating: "8.0",
      quality: "4K",
      genres: ["Action", "Adventure"],
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      description: "Download Indiana Jones 5 (2024) [Hindi-English] are available in 480p, 720p, 1080p, 4K. The legendary archaeologist embarks on his final adventure.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "8.0/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p", "1080p", "4K"],
      releaseDate: "June 30, 2024"
    },
    "10": {
      id: "10",
      title: "Death Note: The Musical",
      year: "2024",
      rating: "8.7",
      quality: "1080P",
      genres: ["Musical", "Thriller", "Drama"],
      imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=600&fit=crop",
      description: "Download Death Note: The Musical (2024) [Hindi-English] are available in 480p, 720p, 1080p. The iconic anime adapted into a thrilling musical performance.",
      language: "Hindi + English",
      format: "WEB-DL",
      imdbRating: "8.7/10",
      season: "Movie",
      totalEpisodes: "Full Movie",
      downloadSizes: ["480p", "720p", "1080p"],
      releaseDate: "September 10, 2024"
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
    <div className="min-h-screen bg-background flex flex-col">
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

            {/* Screenshots Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Screenshots:</h3>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop" 
                  alt="Movie screenshot 1"
                  className="w-full h-32 object-cover rounded-lg border"
                />
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad44aaf24ca7?w=400&h=225&fit=crop" 
                  alt="Movie screenshot 2"
                  className="w-full h-32 object-cover rounded-lg border"
                />
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop" 
                  alt="Movie screenshot 3"
                  className="w-full h-32 object-cover rounded-lg border"
                />
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=225&fit=crop" 
                  alt="Movie screenshot 4"
                  className="w-full h-32 object-cover rounded-lg border"
                />
              </div>
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

                <div className="flex justify-center mb-6">
                  <Button size="lg" variant="outline">
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-center mb-4">Select Download Quality:</h4>
                  {movie.downloadSizes.map((size) => (
                    <div key={size} className="flex flex-col items-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {size === "480p" ? "Standard Quality - Smaller file size" :
                         size === "720p" ? "HD Quality - Good balance of quality and size" :
                         size === "1080p" ? "Full HD - High quality viewing experience" :
                         size === "4K" ? "Ultra HD - Maximum quality for premium viewing" :
                         `${size} Quality`}
                      </p>
                      <Button variant="secondary" size="lg" className="w-48">
                        Download {size}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;