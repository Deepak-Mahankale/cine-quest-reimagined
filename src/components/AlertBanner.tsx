import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="mx-4 my-4 bg-gradient-to-r from-pink-600 to-purple-600 border-pink-500 text-white">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span className="flex-1">
          <strong>Alert ⚠️</strong> Now a days there are multiple copies of{" "}
          <strong>Vegamovies</strong> available on google, Kindly avoid them and Always use{" "}
          <strong>Vegamovies.co.rs</strong> for secure and super fast download. Follow our official{" "}
          <strong>Telegram</strong> Channel for more updates.
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 ml-4"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};