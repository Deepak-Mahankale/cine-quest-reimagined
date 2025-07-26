import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, Star } from "lucide-react";
import heroMovie from "@/assets/hero-movie.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroMovie})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">FEATURED</Badge>
            <Badge className="bg-secondary text-secondary-foreground">2024</Badge>
            <Badge className="bg-accent text-accent-foreground">4K UHD</Badge>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            CYBER NEXUS
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            In a dystopian future where technology controls humanity, one hacker discovers a conspiracy 
            that threatens the very fabric of reality. Experience the ultimate cyberpunk thriller.
          </p>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-lg font-semibold">8.9</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">2h 28m</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Action, Sci-Fi, Thriller</span>
          </div>
          
          <div className="flex space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Play className="mr-2 h-5 w-5" />
              WATCH NOW
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              DOWNLOAD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};