import { Badge } from "@/components/ui/badge";

export const CategoryBadges = () => {
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
    { label: "K-DRAMA SERIES", color: "bg-pink-700 hover:bg-pink-800" },
    { label: "HENT@I ANIME", color: "bg-red-800 hover:bg-red-900" },
    { label: "MARVEL CINEMATIC", color: "bg-red-600 hover:bg-red-700" },
    { label: "MOVIES COLLECTION", color: "bg-indigo-600 hover:bg-indigo-700" },
    { label: "2025 MOVIES/SERIES", color: "bg-emerald-600 hover:bg-emerald-700" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {[...qualityBadges, ...genreBadges, ...specialBadges].map((badge, index) => (
          <Badge
            key={index}
            className={`${badge.color} text-white border-0 px-3 py-1 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 neon-glow`}
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};