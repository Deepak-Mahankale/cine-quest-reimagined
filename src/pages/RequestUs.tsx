import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  text: string;
  timestamp: Date;
}

const RequestUs = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: "Please add more horror movies from 2024!",
      timestamp: new Date("2024-12-01")
    },
    {
      id: 2,
      text: "Could you upload the latest Marvel movies in 4K quality?",
      timestamp: new Date("2024-12-02")
    },
    {
      id: 3,
      text: "I'm looking for classic Bollywood movies. Can you add them?",
      timestamp: new Date("2024-12-03")
    }
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      toast({
        title: "Error",
        description: "Please enter a comment",
        variant: "destructive"
      });
      return;
    }

    const newComment: Comment = {
      id: comments.length + 1,
      text: comment.trim(),
      timestamp: new Date()
    };

    setComments([newComment, ...comments]);
    setComment("");

    toast({
      title: "Request Submitted!",
      description: "Thank you for your request. We'll consider it for our next update.",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Request Us</CardTitle>
              <CardDescription>
                Have a movie or show request? Let us know what you'd like to see on our platform!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="comment">Your Request</Label>
                  <Textarea
                    id="comment"
                    placeholder="Tell us what movies or shows you'd like us to add..."
                    className="min-h-[100px]"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Requests</CardTitle>
              <CardDescription>
                See what other users are requesting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comments.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No requests yet. Be the first to make a request!
                  </p>
                ) : (
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border border-border rounded-lg p-4 bg-card"
                    >
                      <p className="text-foreground mb-2">{comment.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(comment.timestamp)}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestUs;