import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { CalendarIcon, ClockIcon, UsersIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Class Schedule | Wrestling Gym" },
    {
      name: "description",
      content: "View our wrestling class schedules and training sessions",
    },
  ];
};

export default function SchedulePage() {
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        {
          time: "06:00 - 07:30",
          name: "Morning Conditioning",
          level: "All Levels",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 8,
        },
        {
          time: "18:00 - 19:30",
          name: "Freestyle Wrestling",
          level: "Intermediate+",
          coach: "Coach Mike",
          language: "English",
          participants: 12,
        },
        {
          time: "20:00 - 21:30",
          name: "Women's Wrestling",
          level: "All Levels",
          coach: "Coach Elena",
          language: "Russian/English",
          participants: 6,
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "06:00 - 07:30",
          name: "Strength Training",
          level: "All Levels",
          coach: "Coach Mike",
          language: "English",
          participants: 10,
        },
        {
          time: "18:00 - 19:30",
          name: "Greco-Roman Wrestling",
          level: "Advanced",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 8,
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "06:00 - 07:30",
          name: "Morning Conditioning",
          level: "All Levels",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 8,
        },
        {
          time: "18:00 - 19:30",
          name: "Technique Workshop",
          level: "Beginner+",
          coach: "Coach Elena",
          language: "Russian/English",
          participants: 15,
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "06:00 - 07:30",
          name: "Strength Training",
          level: "All Levels",
          coach: "Coach Mike",
          language: "English",
          participants: 10,
        },
        {
          time: "18:00 - 19:30",
          name: "Competition Prep",
          level: "Advanced",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 6,
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          time: "06:00 - 07:30",
          name: "Morning Conditioning",
          level: "All Levels",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 8,
        },
        {
          time: "18:00 - 19:30",
          name: "Open Mat",
          level: "All Levels",
          coach: "All Coaches",
          language: "Multilingual",
          participants: 20,
        },
      ],
    },
    {
      day: "Saturday",
      classes: [
        {
          time: "09:00 - 11:00",
          name: "Weekend Workshop",
          level: "All Levels",
          coach: "All Coaches",
          language: "Multilingual",
          participants: 25,
        },
        {
          time: "14:00 - 16:00",
          name: "Youth Wrestling",
          level: "Ages 8-16",
          coach: "Coach Kim",
          language: "Korean/English",
          participants: 18,
        },
      ],
    },
    {
      day: "Sunday",
      classes: [
        {
          time: "10:00 - 12:00",
          name: "Recovery & Technique",
          level: "All Levels",
          coach: "Coach Elena",
          language: "Russian/English",
          participants: 12,
        },
      ],
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Class Schedule
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          View our comprehensive weekly schedule featuring classes for all skill
          levels. Our multilingual coaches ensure everyone can participate
          regardless of language.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Download Schedule
          </Button>
          <Button>Book a Class</Button>
        </div>
      </div>

      <div className="space-y-8">
        {weeklySchedule.map((daySchedule) => (
          <Card key={daySchedule.day}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CalendarIcon className="w-6 h-6" />
                {daySchedule.day}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {daySchedule.classes.map((classItem, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <ClockIcon className="w-4 h-4" />
                        <span className="font-medium">{classItem.time}</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">
                          {classItem.name}
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{classItem.level}</Badge>
                          <Badge variant="outline">{classItem.coach}</Badge>
                          <Badge variant="outline">{classItem.language}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <UsersIcon className="w-4 h-4" />
                        <span>{classItem.participants}/25</span>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Class Information</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold">Class Levels</h3>
            <p className="text-muted-foreground">
              Beginner, Intermediate, and Advanced classes available for all
              ages
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold">Multilingual Support</h3>
            <p className="text-muted-foreground">
              Classes taught in Korean, English, and Russian with translation
              support
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-semibold">Flexible Schedule</h3>
            <p className="text-muted-foreground">
              Morning, evening, and weekend classes to fit your schedule
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
