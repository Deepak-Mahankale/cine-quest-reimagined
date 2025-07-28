import { Badge } from "@/components/ui/badge";

interface CategoryBadgesProps {
  onCategorySelect: (category: string) => void;
}

export const CategoryBadges = ({ onCategorySelect }: CategoryBadgesProps) => {
  const qualityBadges = [
    { label: "480P", color: "bg-red-600 hover:bg-red-700" },
    { label: "720P", color: "bg-orange-600 hover:bg-orange-700" },
    { label: "1080P", color: "bg-blue-600 hover:bg-blue-700" },
    { label: "1080P [60FPS]", color: "bg-purple-600 hover:bg-purple-700" },
    { label: "2160P 4K", color: "bg-pink-600 hover:bg-pink-700" },
  ];

  const genreBadges = [
    { label: "ANIME", color: "bg-cyan-600 hover:bg-cyan-700" },
    { label: "ENGLISH", color: "bg-green-600 hover:bg-green-700" },
    { label: "TRENDING", color: "bg-yellow-600 hover:bg-yellow-700" },
    { label: "NETFLIX", color: "bg-red-700 hover:bg-red-800" },
    { label: "MXPLAYER", color: "bg-blue-700 hover:bg-blue-800" },
    { label: "AMAZON PRIME", color: "bg-cyan-700 hover:bg-cyan-800" },
    { label: "DISNEY+", color: "bg-purple-700 hover:bg-purple-800" },
    { label: "APPLE TV+", color: "bg-gray-700 hover:bg-gray-800" },
  ];

  const specialBadges = [
    { label: "WEB SERIES", color: "bg-pink-700 hover:bg-pink-800", category: "Web Series" },
    { label: "DUAL AUDIO", color: "bg-red-800 hover:bg-red-900", category: "Dual Audio" },
    { label: "MARVEL CINEMATIC", color: "bg-red-600 hover:bg-red-700", category: "Marvel" },
    { label: "MOVIES COLLECTION", color: "bg-indigo-600 hover:bg-indigo-700", category: "Movies" },
    { label: "2025 MOVIES/SERIES", color: "bg-emerald-600 hover:bg-emerald-700", category: "2025" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {[...qualityBadges, ...genreBadges].map((badge, index) => (
          <Badge
            key={index}
            className={`${badge.color} text-white border-0 px-3 py-1 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 neon-glow`}
          >
            {badge.label}
          </Badge>
        ))}
        {specialBadges.map((badge, index) => (
          <Badge
            key={`special-${index}`}
            className={`${badge.color} text-white border-0 px-3 py-1 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 neon-glow`}
            onClick={() => onCategorySelect(badge.category || "")}
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};