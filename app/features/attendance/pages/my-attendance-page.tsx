import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Progress } from "~/common/components/ui/progress";
import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  XCircleIcon,
  TargetIcon,
  AwardIcon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "My Attendance | Wrestling Gym" },
    {
      name: "description",
      content: "View your personal attendance history and statistics",
    },
  ];
};

export default function MyAttendancePage() {
  // Mock data - in real app this would come from user's account
  const currentMonth = {
    totalClasses: 24,
    attended: 20,
    missed: 4,
    attendanceRate: 83.3,
    goal: 85.0,
  };

  const monthlyStats = [
    { month: "January", attended: 18, total: 22, rate: 81.8 },
    { month: "February", attended: 20, total: 24, rate: 83.3 },
    { month: "March", attended: 19, total: 23, rate: 82.6 },
    { month: "April", attended: 22, total: 25, rate: 88.0 },
    { month: "May", attended: 21, total: 24, rate: 87.5 },
    { month: "June", attended: 20, total: 24, rate: 83.3 },
  ];

  const recentAttendance = [
    {
      date: "2024-01-25",
      day: "Thursday",
      class: "Freestyle Wrestling",
      time: "18:00 - 19:30",
      coach: "Coach Mike",
      status: "attended",
      checkInTime: "17:52",
    },
    {
      date: "2024-01-23",
      day: "Tuesday",
      class: "Strength Training",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      status: "attended",
      checkInTime: "05:58",
    },
    {
      date: "2024-01-21",
      day: "Sunday",
      class: "Technique Workshop",
      time: "18:00 - 19:30",
      coach: "Coach Elena",
      status: "missed",
      checkInTime: null,
    },
    {
      date: "2024-01-19",
      day: "Friday",
      class: "Freestyle Wrestling",
      time: "18:00 - 19:30",
      coach: "Coach Mike",
      status: "attended",
      checkInTime: "17:48",
    },
    {
      date: "2024-01-17",
      day: "Wednesday",
      class: "Strength Training",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      status: "attended",
      checkInTime: "06:02",
    },
  ];

  const achievements = [
    {
      name: "Perfect Week",
      description: "Attended all classes for 7 consecutive days",
      date: "2024-01-15",
      icon: "🏆",
    },
    {
      name: "Early Bird",
      description: "Attended 10 morning classes this month",
      date: "2024-01-20",
      icon: "🌅",
    },
    {
      name: "Consistency King",
      description: "Maintained 80%+ attendance for 3 months",
      date: "2024-01-01",
      icon: "👑",
    },
  ];

  const upcomingClasses = [
    {
      date: "2024-01-27",
      day: "Saturday",
      class: "Freestyle Wrestling",
      time: "10:00 - 11:30",
      coach: "Coach Mike",
      status: "booked",
    },
    {
      date: "2024-01-29",
      day: "Monday",
      class: "Strength Training",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      status: "booked",
    },
    {
      date: "2024-01-31",
      day: "Wednesday",
      class: "Technique Workshop",
      time: "18:00 - 19:30",
      coach: "Coach Elena",
      status: "available",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          My Attendance
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Track your personal attendance record, view your progress, and
          celebrate your achievements. Stay motivated by monitoring your
          consistency and reaching your fitness goals.
        </p>
      </div>

      {/* Current Month Overview */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">This Month's Progress</h2>
        <div className="grid grid-cols-4 gap-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CalendarIcon className="w-5 h-5" />
                Total Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {currentMonth.totalClasses}
              </div>
              <div className="text-muted-foreground">Available this month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                Classes Attended
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {currentMonth.attended}
              </div>
              <div className="text-muted-foreground">
                Successfully completed
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <XCircleIcon className="w-5 h-5 text-red-600" />
                Classes Missed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">
                {currentMonth.missed}
              </div>
              <div className="text-muted-foreground">Need to catch up</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUpIcon className="w-5 h-5 text-blue-600" />
                Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {currentMonth.attendanceRate}%
              </div>
              <div className="text-muted-foreground">
                Goal: {currentMonth.goal}%
              </div>
              <Progress
                value={currentMonth.attendanceRate}
                className="mt-2 h-2"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Monthly Attendance Trends</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUpIcon className="w-6 h-6" />
              Last 6 Months
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {monthlyStats.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{month.month}</span>
                    <span className="text-sm text-muted-foreground">
                      {month.attended}/{month.total} ({month.rate}%)
                    </span>
                  </div>
                  <Progress value={month.rate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Attendance */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Recent Attendance</h2>
        <div className="space-y-4">
          {recentAttendance.map((record, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{record.class}</h3>
                      <Badge
                        variant={
                          record.status === "attended"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {record.status === "attended" ? "Attended" : "Missed"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {record.date} ({record.day})
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {record.time}
                      </span>
                      <span>{record.coach}</span>
                      {record.checkInTime && (
                        <span className="text-green-600">
                          Check-in: {record.checkInTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements and Upcoming Classes */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">My Achievements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-3 border-b last:border-b-0"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{achievement.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.description}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Earned: {achievement.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Upcoming Classes</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <div key={index} className="py-3 border-b last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{classItem.class}</h3>
                      <Badge
                        variant={
                          classItem.status === "booked"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {classItem.status === "booked" ? "Booked" : "Available"}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>
                        {classItem.date} ({classItem.day})
                      </div>
                      <div>
                        {classItem.time} • {classItem.coach}
                      </div>
                    </div>
                    {classItem.status === "available" && (
                      <Button size="sm" className="mt-2">
                        Book Now
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Goals and Motivation */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Set Your Goals</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <TargetIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Monthly Goal</h3>
            <p className="text-muted-foreground">
              Aim for 85% attendance rate this month
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <AwardIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Achievement Unlocked</h3>
            <p className="text-muted-foreground">
              You're on track for the Consistency King badge
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUpIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your improvement over time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
