import { useState } from "react";
import { MovieCard } from "./MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const MovieGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const movies = [
    {
      id: "1",
      title: "Lord of the Mysteries",
      year: "2025",
      rating: 8.9,
      quality: "1080P",
      genres: ["Fantasy", "Mystery", "Adventure"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      description: "A mysterious tale of ancient powers and cosmic horrors in a steampunk world."
    },
    {
      id: "2",
      title: "Dandadan",
      year: "2024",
      rating: 9.2,
      quality: "720P",
      genres: ["Anime", "Supernatural", "Comedy"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "High school students encounter aliens and ghosts in this supernatural comedy."
    },
    {
      id: "3",
      title: "The Missing Gun",
      year: "2002",
      rating: 7.5,
      quality: "480P",
      genres: ["Crime", "Drama", "Thriller"],
      imageUrl: "https://images.unsplash.com/photo-1551651767-0da34ed75c96?w=400&h=600&fit=crop",
      description: "A police officer's missing gun leads to a web of corruption and danger."
    },
    {
      id: "4",
      title: "The Chosen",
      year: "2024",
      rating: 8.1,
      quality: "1080P",
      genres: ["Drama", "Biography", "History"],
      imageUrl: "https://images.unsplash.com/photo-1489370321024-e0834ffd09cd?w=400&h=600&fit=crop",
      description: "The life of Jesus Christ told through the eyes of those who knew him."
    },
    {
      id: "5",
      title: "Chuhai no Osake",
      year: "2024",
      rating: 7.8,
      quality: "720P",
      genres: ["Anime", "Romance", "Comedy"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "A heartwarming story about love, friendship, and finding yourself."
    },
    {
      id: "6",
      title: "Code 8: Part II",
      year: "2024",
      rating: 8.3,
      quality: "4K",
      genres: ["Action", "Sci-Fi", "Thriller"],
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      description: "In a world where superpowers are real, outcasts fight against oppression."
    },
    {
      id: "7",
      title: "Fantastic Four",
      year: "2024",
      rating: 7.9,
      quality: "1080P",
      genres: ["Action", "Adventure", "Sci-Fi"],
      imageUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
      description: "Marvel's First Family returns in this cosmic adventure."
    },
    {
      id: "8",
      title: "Happy Gilmore 2",
      year: "2024",
      rating: 7.2,
      quality: "720P",
      genres: ["Comedy", "Sports"],
      imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop",
      description: "Happy returns to the golf course for another hilarious adventure."
    },
    {
      id: "9",
      title: "Indiana Jones 5",
      year: "2024",
      rating: 8.0,
      quality: "4K",
      genres: ["Action", "Adventure"],
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      description: "The legendary archaeologist embarks on his final adventure."
    },
    {
      id: "10",
      title: "Death Note: The Musical",
      year: "2024",
      rating: 8.7,
      quality: "1080P",
      genres: ["Musical", "Thriller", "Drama"],
      imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=600&fit=crop",
      description: "The iconic anime adapted into a thrilling musical performance."
    }
  ];

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

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