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
  UsersIcon,
  CalendarIcon,
  ClockIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  XCircleIcon,
  BarChart3Icon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Attendance Management | Wrestling Gym" },
    {
      name: "description",
      content: "Manage and track attendance for all gym members and classes",
    },
  ];
};

export default function AttendancePage() {
  // Mock data - in real app this would come from the database
  const todayStats = {
    totalMembers: 45,
    checkedIn: 28,
    checkedOut: 25,
    currentOccupancy: 3,
    attendanceRate: 62.2,
  };

  const weeklyStats = {
    monday: { total: 42, present: 35, rate: 83.3 },
    tuesday: { total: 45, present: 38, rate: 84.4 },
    wednesday: { total: 43, present: 36, rate: 83.7 },
    thursday: { total: 44, present: 37, rate: 84.1 },
    friday: { total: 41, present: 32, rate: 78.0 },
    saturday: { total: 38, present: 30, rate: 78.9 },
    sunday: { total: 35, present: 28, rate: 80.0 },
  };

  const classAttendance = [
    {
      name: "Freestyle Wrestling",
      time: "18:00 - 19:30",
      coach: "Coach Mike",
      totalStudents: 15,
      present: 12,
      rate: 80.0,
    },
    {
      name: "Strength Training",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      totalStudents: 12,
      present: 10,
      rate: 83.3,
    },
    {
      name: "Technique Workshop",
      time: "18:00 - 19:30",
      coach: "Coach Elena",
      totalStudents: 18,
      present: 16,
      rate: 88.9,
    },
  ];

  const recentCheckIns = [
    { name: "John Smith", time: "17:45", status: "checked-in" },
    { name: "김민수", time: "17:52", status: "checked-in" },
    { name: "Mike Johnson", time: "18:01", status: "checked-in" },
    { name: "이지영", time: "18:05", status: "checked-in" },
    { name: "Alex Chen", time: "18:12", status: "checked-in" },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Attendance Management
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Track and manage attendance for all gym members. Monitor class
          participation, occupancy levels, and attendance trends to optimize gym
          operations.
        </p>
      </div>

      {/* Today's Overview */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Today's Overview</h2>
        <div className="grid grid-cols-4 gap-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <UsersIcon className="w-5 h-5" />
                Total Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {todayStats.totalMembers}
              </div>
              <div className="text-muted-foreground">Active members</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                Checked In
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {todayStats.checkedIn}
              </div>
              <div className="text-muted-foreground">Currently present</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <XCircleIcon className="w-5 h-5 text-blue-600" />
                Checked Out
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {todayStats.checkedOut}
              </div>
              <div className="text-muted-foreground">Left today</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUpIcon className="w-5 h-5 text-orange-600" />
                Attendance Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">
                {todayStats.attendanceRate}%
              </div>
              <div className="text-muted-foreground">Today's rate</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Weekly Attendance Chart */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Weekly Attendance Trends</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3Icon className="w-6 h-6" />
              This Week's Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(weeklyStats).map(([day, stats]) => (
                <div key={day} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium capitalize">{day}</span>
                    <span className="text-sm text-muted-foreground">
                      {stats.present}/{stats.total} ({stats.rate}%)
                    </span>
                  </div>
                  <Progress value={stats.rate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Attendance */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Today's Class Attendance</h2>
        <div className="space-y-4">
          {classAttendance.map((classItem, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{classItem.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {classItem.time}
                      </span>
                      <span>{classItem.coach}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-2xl font-bold">{classItem.rate}%</div>
                    <div className="text-sm text-muted-foreground">
                      {classItem.present}/{classItem.totalStudents} students
                    </div>
                    <Progress value={classItem.rate} className="w-32 h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Recent Check-ins</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentCheckIns.map((checkIn, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">{checkIn.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {checkIn.time}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{checkIn.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Quick Actions</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Manual Check-in
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <UsersIcon className="w-4 h-4 mr-2" />
                  View All Members
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <BarChart3Icon className="w-4 h-4 mr-2" />
                  Analytics Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Attendance Policies */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Attendance Policies</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-semibold">Check-in Time</h3>
            <p className="text-muted-foreground">
              Members must check in within 15 minutes of class start time
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold">Digital Check-in</h3>
            <p className="text-muted-foreground">
              Use the mobile app or QR code at the entrance for quick check-in
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold">Attendance Tracking</h3>
            <p className="text-muted-foreground">
              All attendance is automatically tracked and reported to coaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
