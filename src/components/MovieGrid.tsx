import { useState, useEffect, useMemo } from "react";
import { MovieCard } from "./MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MovieGridProps {
  searchQuery?: string;
  selectedGenre?: string;
  selectedYear?: string;
  selectedQuality?: string;
}

export const MovieGrid = ({
  searchQuery = "",
  selectedGenre = "All Genres",
  selectedYear = "All Years", 
  selectedQuality = "All Qualities"
}: MovieGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const movies = [
    { id: "1", title: "Lord of the Mysteries", year: "2025", rating: 8.9, quality: "1080P", genres: ["Fantasy", "Mystery", "Adventure"], imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop", description: "A mysterious tale of ancient powers and cosmic horrors in a steampunk world." },
    { id: "2", title: "Dandadan", year: "2024", rating: 9.2, quality: "720P", genres: ["Anime", "Supernatural", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "High school students encounter aliens and ghosts in this supernatural comedy." },
    { id: "3", title: "The Missing Gun", year: "2002", rating: 7.5, quality: "480P", genres: ["Crime", "Drama", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop", description: "A police officer's missing gun leads to a web of corruption and danger." },
    { id: "4", title: "The Chosen", year: "2024", rating: 8.1, quality: "1080P", genres: ["Drama", "Biography"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "The life of Jesus Christ told through the eyes of those who knew him." },
    { id: "5", title: "Chuhai no Osake", year: "2024", rating: 7.8, quality: "720P", genres: ["Anime", "Romance", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "A heartwarming story about love, friendship, and finding yourself." },
    { id: "6", title: "Code 8: Part II", year: "2024", rating: 8.3, quality: "4K", genres: ["Action", "Sci-Fi", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "In a world where superpowers are real, outcasts fight against oppression." },
    { id: "7", title: "Fantastic Four", year: "2024", rating: 7.9, quality: "1080P", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Marvel's First Family returns in this cosmic adventure." },
    { id: "8", title: "Happy Gilmore 2", year: "2024", rating: 7.2, quality: "720P", genres: ["Comedy", "Sports"], imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop", description: "Happy returns to the golf course for another hilarious adventure." },
    { id: "9", title: "Indiana Jones 5", year: "2024", rating: 8.0, quality: "4K", genres: ["Action", "Adventure"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "The legendary archaeologist embarks on his final adventure." },
    { id: "10", title: "Death Note: The Musical", year: "2024", rating: 8.7, quality: "1080P", genres: ["Musical", "Thriller", "Drama"], imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=600&fit=crop", description: "The iconic anime adapted into a thrilling musical performance." },
    { id: "11", title: "Avatar: The Way of Water", year: "2022", rating: 8.5, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635863138275-d9864d3584d8?w=400&h=600&fit=crop", description: "Jake Sully and his family return to Pandora for new adventures." },
    { id: "12", title: "Top Gun: Maverick", year: "2022", rating: 8.8, quality: "1080P", genres: ["Action", "Drama"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Pete 'Maverick' Mitchell returns to train a new generation of pilots." },
    { id: "13", title: "Spider-Man: No Way Home", year: "2021", rating: 9.0, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Spider-Man faces his greatest challenge when the multiverse opens." },
    { id: "14", title: "The Batman", year: "2022", rating: 8.2, quality: "1080P", genres: ["Action", "Crime", "Drama"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Batman ventures into Gotham City's underworld to track a sadistic killer." },
    { id: "15", title: "Dune", year: "2021", rating: 8.4, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635863138275-d9864d3584d8?w=400&h=600&fit=crop", description: "Paul Atreides leads a rebellion to free his desert world from the rule of the evil Baron Harkonnen." },
    { id: "16", title: "No Time to Die", year: "2021", rating: 7.8, quality: "1080P", genres: ["Action", "Adventure", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "James Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help." },
    { id: "17", title: "Black Widow", year: "2021", rating: 7.5, quality: "1080P", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises." },
    { id: "18", title: "Fast & Furious 9", year: "2021", rating: 7.2, quality: "720P", genres: ["Action", "Adventure", "Crime"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother." },
    { id: "19", title: "Shang-Chi", year: "2021", rating: 8.1, quality: "1080P", genres: ["Action", "Adventure", "Fantasy"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization." },
    { id: "20", title: "Eternals", year: "2021", rating: 7.3, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635863138275-d9864d3584d8?w=400&h=600&fit=crop", description: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations." },
    { id: "21", title: "Ghostbusters: Afterlife", year: "2021", rating: 7.8, quality: "1080P", genres: ["Comedy", "Fantasy", "Adventure"], imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop", description: "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters." },
    { id: "22", title: "The Matrix Resurrections", year: "2021", rating: 7.0, quality: "4K", genres: ["Action", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635863138275-d9864d3584d8?w=400&h=600&fit=crop", description: "Return to a world of two realities: one, everyday life; the other, what lies behind it." },
    { id: "23", title: "Wonder Woman 1984", year: "2020", rating: 6.8, quality: "1080P", genres: ["Action", "Adventure", "Fantasy"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s." },
    { id: "24", title: "Tenet", year: "2020", rating: 7.8, quality: "4K", genres: ["Action", "Sci-Fi", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Armed with only one word, Tenet, and fighting for the survival of the entire world." },
    { id: "25", title: "Mulan", year: "2020", rating: 7.1, quality: "1080P", genres: ["Action", "Adventure", "Drama"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "A young Chinese maiden disguises herself as a male warrior in order to save her father." },
    { id: "26", title: "Soul", year: "2020", rating: 8.6, quality: "1080P", genres: ["Animation", "Adventure", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "A musician who has lost his passion for music is transported out of his body." },
    { id: "27", title: "Onward", year: "2020", rating: 7.8, quality: "720P", genres: ["Animation", "Adventure", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "Two elven brothers embark on a quest to bring their father back for one day." },
    { id: "28", title: "Bad Boys for Life", year: "2020", rating: 7.2, quality: "1080P", genres: ["Action", "Comedy", "Crime"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords." },
    { id: "29", title: "1917", year: "2019", rating: 8.7, quality: "4K", genres: ["Drama", "War"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "Two British soldiers receive impossible orders during World War I." },
    { id: "30", title: "Joker", year: "2019", rating: 8.9, quality: "1080P", genres: ["Crime", "Drama", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop", description: "A failed comedian begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker." },
    { id: "31", title: "Avengers: Endgame", year: "2019", rating: 9.2, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions." },
    { id: "32", title: "Captain Marvel", year: "2019", rating: 7.5, quality: "1080P", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Carol Danvers becomes one of the universe's most powerful heroes." },
    { id: "33", title: "Toy Story 4", year: "2019", rating: 8.1, quality: "1080P", genres: ["Animation", "Adventure", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "When Bonnie's bedroom toys, including Woody and Buzz, welcome the newest toy 'Forky.'" },
    { id: "34", title: "The Lion King", year: "2019", rating: 7.8, quality: "4K", genres: ["Animation", "Adventure", "Drama"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "After the murder of his father, a young lion prince flees his kingdom." },
    { id: "35", title: "Spider-Man: Far From Home", year: "2019", rating: 8.0, quality: "1080P", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", description: "Following the events of Endgame, Spider-Man must step up to take on new threats." },
    { id: "36", title: "John Wick 3", year: "2019", rating: 8.3, quality: "1080P", genres: ["Action", "Crime", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", description: "Super-assassin John Wick returns with a $14 million price tag on his head." },
    { id: "37", title: "Aladdin", year: "2019", rating: 7.2, quality: "720P", genres: ["Adventure", "Comedy", "Musical"], imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop", description: "A kindhearted street thief and a power-hungry Grand Vizier vie for a magic lamp." },
    { id: "38", title: "Frozen 2", year: "2019", rating: 7.8, quality: "1080P", genres: ["Animation", "Adventure", "Comedy"], imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest." },
    { id: "39", title: "Star Wars: The Rise of Skywalker", year: "2019", rating: 7.1, quality: "4K", genres: ["Action", "Adventure", "Sci-Fi"], imageUrl: "https://images.unsplash.com/photo-1635863138275-d9864d3584d8?w=400&h=600&fit=crop", description: "The surviving members of the resistance face the First Order once again." },
    { id: "40", title: "Knives Out", year: "2019", rating: 8.5, quality: "1080P", genres: ["Comedy", "Crime", "Mystery"], imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop", description: "A detective investigates the death of a patriarch of an eccentric, combative family." },
    { id: "41", title: "Parasite", year: "2019", rating: 9.0, quality: "1080P", genres: ["Comedy", "Drama", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "A poor family schemes to become employed by a wealthy family." },
    { id: "42", title: "Once Upon a Time in Hollywood", year: "2019", rating: 8.1, quality: "4K", genres: ["Comedy", "Drama"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "A faded television actor and his stunt double strive to achieve fame in Hollywood in 1969." },
    { id: "43", title: "Ford v Ferrari", year: "2019", rating: 8.4, quality: "1080P", genres: ["Action", "Biography", "Drama"], imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop", description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference." },
    { id: "44", title: "Bombshell", year: "2019", rating: 7.6, quality: "720P", genres: ["Biography", "Drama"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "A group of women take on Fox News head Roger Ailes and the toxic atmosphere he presided over at the network." },
    { id: "45", title: "Marriage Story", year: "2019", rating: 8.2, quality: "1080P", genres: ["Drama", "Romance"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "Noah Baumbach's incisive and compassionate look at a marriage breaking up." },
    { id: "46", title: "The Irishman", year: "2019", rating: 8.3, quality: "4K", genres: ["Biography", "Crime", "Drama"], imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop", description: "A truck driver gets involved with a crime family and later works for the Teamsters." },
    { id: "47", title: "Jojo Rabbit", year: "2019", rating: 8.1, quality: "1080P", genres: ["Comedy", "Drama", "War"], imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop", description: "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home." },
    { id: "48", title: "Little Women", year: "2019", rating: 8.0, quality: "720P", genres: ["Drama", "Romance"], imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop", description: "Jo March reflects back and forth on her life, telling the beloved story of the March sisters." },
    { id: "49", title: "Uncut Gems", year: "2019", rating: 7.8, quality: "1080P", genres: ["Crime", "Drama", "Thriller"], imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop", description: "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything." },
    { id: "50", title: "The Lighthouse", year: "2019", rating: 7.9, quality: "480P", genres: ["Drama", "Fantasy", "Horror"], imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop", description: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island." }
  ];

  // Filter movies based on search and filters
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesGenre = selectedGenre === "All Genres" || 
                          movie.genres.some(genre => genre === selectedGenre);
      
      const matchesYear = selectedYear === "All Years" || movie.year === selectedYear;
      
      const matchesQuality = selectedQuality === "All Qualities" || movie.quality === selectedQuality;
      
      return matchesSearch && matchesGenre && matchesYear && matchesQuality;
    });
  }, [searchQuery, selectedGenre, selectedYear, selectedQuality]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenre, selectedYear, selectedQuality]);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-primary bg-clip-text text-transparent">
        Latest Movies & Series
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
        {currentMovies.map((movie, index) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};