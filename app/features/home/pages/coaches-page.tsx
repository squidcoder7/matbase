import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Coaches | Wrestling Gym" },
    {
      name: "description",
      content: "Meet our experienced wrestling coaches and trainers",
    },
  ];
};

export default function CoachesPage() {
  const coaches = [
    {
      id: 1,
      name: "Coach Kim Seong-ho",
      role: "Head Coach",
      nationality: "Korean",
      languages: ["Korean", "English"],
      experience: "15+ years",
      specialties: ["Freestyle Wrestling", "Greco-Roman", "Coaching"],
      avatar: "https://github.com/coach-kim.png",
      avatarFallback: "KS",
      bio: "Former national champion with extensive international experience. Specializes in developing young talent and building strong fundamentals.",
    },
    {
      id: 2,
      name: "Coach Mike Johnson",
      role: "Assistant Coach",
      nationality: "American",
      languages: ["English", "Korean (Basic)"],
      experience: "12+ years",
      specialties: [
        "Folkstyle Wrestling",
        "Strength Training",
        "Competition Prep",
      ],
      avatar: "https://github.com/coach-mike.png",
      avatarFallback: "MJ",
      bio: "Former NCAA wrestler and certified strength coach. Brings American wrestling techniques and modern training methods to our gym.",
    },
    {
      id: 3,
      name: "Coach Elena Petrov",
      role: "Women's Wrestling Coach",
      nationality: "Russian",
      languages: ["Russian", "English", "Korean (Basic)"],
      experience: "10+ years",
      specialties: ["Women's Wrestling", "Technique", "Mental Training"],
      avatar: "https://github.com/coach-elena.png",
      avatarFallback: "EP",
      bio: "International wrestling champion with expertise in women's wrestling development. Focuses on technique refinement and mental toughness.",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Meet Our Coaches
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our experienced coaching staff brings together expertise from around
          the world, ensuring every member receives personalized training and
          guidance.
        </p>
      </div>

      <div className="space-y-12">
        {coaches.map((coach) => (
          <Card key={coach.id} className="p-8">
            <div className="flex gap-8 items-start">
              <Avatar className="size-24">
                <AvatarFallback className="text-2xl">
                  {coach.avatarFallback}
                </AvatarFallback>
                <AvatarImage src={coach.avatar} />
              </Avatar>

              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">{coach.name}</h2>
                  <div className="flex gap-2 items-center">
                    <Badge variant="secondary">{coach.role}</Badge>
                    <Badge variant="outline">{coach.nationality}</Badge>
                    <Badge variant="outline">{coach.experience}</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <div className="flex gap-2">
                    {coach.languages.map((language) => (
                      <Badge key={language} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Specialties</h3>
                  <div className="flex gap-2 flex-wrap">
                    {coach.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {coach.bio}
                </p>

                <Button variant="outline">Book Session</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Why Choose Our Coaches?</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold">International Experience</h3>
            <p className="text-muted-foreground">
              Our coaches bring techniques and perspectives from around the
              world
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-semibold">Multilingual Support</h3>
            <p className="text-muted-foreground">
              Communication in multiple languages ensures no barriers to
              learning
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold">Proven Results</h3>
            <p className="text-muted-foreground">
              Track record of developing champions at all levels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
