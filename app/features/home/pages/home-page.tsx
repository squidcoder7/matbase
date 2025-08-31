import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Wrestling Gym" },
    {
      name: "description",
      content: "Welcome to our wrestling gym - train with the best",
    },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Welcome to Our Wrestling Gym
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our community of wrestlers from around the world. Train hard,
          make friends, and become the best version of yourself.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/home/schedule">View Schedule</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/home/coaches">Meet Our Coaches</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">🥋</span>
          </div>
          <h3 className="text-xl font-semibold">Professional Training</h3>
          <p className="text-muted-foreground">
            Learn from experienced coaches with international backgrounds
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">🌍</span>
          </div>
          <h3 className="text-xl font-semibold">International Community</h3>
          <p className="text-muted-foreground">
            Connect with wrestlers from different countries and cultures
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">💪</span>
          </div>
          <h3 className="text-xl font-semibold">Build Strength</h3>
          <p className="text-muted-foreground">
            Develop physical and mental strength through wrestling
          </p>
        </div>
      </div>
    </div>
  );
}
