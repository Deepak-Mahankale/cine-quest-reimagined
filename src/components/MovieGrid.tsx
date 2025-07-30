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
import moviesData from "@/data/movies.json";

interface MovieGridProps {
  searchQuery?: string;
  selectedGenre?: string;
  selectedYear?: string;
  selectedQuality?: string;
  selectedCategory?: string;
}

export const MovieGrid = ({
  searchQuery = "",
  selectedGenre = "All Genres",
  selectedYear = "All Years", 
  selectedQuality = "All Qualities",
  selectedCategory = ""
}: MovieGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  const movies = moviesData;

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
      
      const matchesCategory = !selectedCategory || 
                             (selectedCategory === "Web Series" && movie.category === "Web Series") ||
                             (selectedCategory === "Dual Audio" && movie.dualAudio) ||
                             (selectedCategory === "Marvel" && movie.genres.some(genre => genre.toLowerCase().includes("marvel"))) ||
                             (selectedCategory === "Movies" && movie.category === "Movies") ||
                             (selectedCategory === "2025" && movie.year === "2025");
      
      return matchesSearch && matchesGenre && matchesYear && matchesQuality && matchesCategory;
    });
  }, [searchQuery, selectedGenre, selectedYear, selectedQuality, selectedCategory]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenre, selectedYear, selectedQuality, selectedCategory]);

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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 mb-8">
        {currentMovies.map((movie, index) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      {currentMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No movies found matching your criteria.</p>
        </div>
      )}

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