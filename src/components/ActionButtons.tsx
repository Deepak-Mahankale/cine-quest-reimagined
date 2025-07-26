import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Users } from "lucide-react";

export const ActionButtons = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
          HINDI MOVIES
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
          🔞 DESI JUNCTION
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
          <MessageCircle className="mr-2 h-4 w-4" />
          JOIN TELEGRAM
        </Button>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
          <Download className="mr-2 h-4 w-4" />
          HOW TO DOWNLOAD 📱
        </Button>
      </div>
    </div>
  );
};