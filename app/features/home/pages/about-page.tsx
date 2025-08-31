import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | Wrestling Gym" },
    {
      name: "description",
      content: "Learn about our wrestling gym's history and mission",
    },
  ];
};

export default function AboutPage() {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          About Our Gym
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Founded in 2010, our wrestling gym has been a cornerstone of the local
          wrestling community, bringing together athletes from all backgrounds
          and skill levels.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What started as a small training facility has grown into a thriving
            community of wrestlers, coaches, and enthusiasts. Our founder, Coach
            Kim, envisioned a place where language barriers wouldn't prevent
            people from sharing their passion for wrestling.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, we're proud to host international athletes, including many
            from the nearby military base, creating a truly diverse and
            inclusive environment.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that wrestling transcends language and cultural barriers.
            Our mission is to provide world-class training while fostering
            understanding and friendship between people from different
            backgrounds.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through innovative technology and dedicated coaching, we're breaking
            down communication barriers and building a stronger wrestling
            community.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">500+</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Active Members
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">15+</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Countries Represented
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">50+</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            Competition Wins
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're a beginner or an experienced wrestler, there's a place
          for you in our gym. Come train with us and be part of something
          special.
        </p>
        <Button size="lg">Start Training Today</Button>
      </div>
    </div>
  );
}
