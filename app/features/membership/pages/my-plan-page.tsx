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
  CreditCardIcon,
  SettingsIcon,
  RefreshCwIcon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "My Plan | Wrestling Gym" },
    {
      name: "description",
      content: "View your current membership plan and usage details",
    },
  ];
};

export default function MyPlanPage() {
  // Mock data - in real app this would come from user's account
  const currentPlan = {
    name: "Premium",
    status: "Active",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    price: "₩80,000",
    nextBilling: "2024-02-15",
  };

  const usage = {
    classesAttended: 12,
    classesLimit: "Unlimited",
    openMatSessions: 8,
    openMatLimit: "Unlimited",
    guestPassesUsed: 1,
    guestPassesLimit: 2,
  };

  const upcomingClasses = [
    {
      name: "Freestyle Wrestling",
      date: "2024-01-25",
      time: "18:00 - 19:30",
      coach: "Coach Mike",
      status: "Booked",
    },
    {
      name: "Strength Training",
      date: "2024-01-27",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      status: "Booked",
    },
    {
      name: "Technique Workshop",
      date: "2024-01-29",
      time: "18:00 - 19:30",
      coach: "Coach Elena",
      status: "Available",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          My Membership Plan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Manage your current plan, track your usage, and explore upgrade
          options.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Current Plan Card */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCardIcon className="w-6 h-6" />
              Current Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
                <Badge variant="secondary" className="mt-2">
                  {currentPlan.status}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{currentPlan.price}</div>
                <div className="text-muted-foreground">per month</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Start Date</span>
                </div>
                <div className="font-medium">{currentPlan.startDate}</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Next Billing</span>
                </div>
                <div className="font-medium">{currentPlan.nextBilling}</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex-1">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Manage Plan
              </Button>
              <Button variant="outline" className="flex-1">
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Upgrade Plan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="outline">
              Book a Class
            </Button>
            <Button className="w-full" variant="outline">
              View Schedule
            </Button>
            <Button className="w-full" variant="outline">
              Contact Support
            </Button>
            <Button className="w-full" variant="outline">
              Download Receipt
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Usage Statistics */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Usage This Month</h2>
        <div className="grid grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5" />
                Classes Attended
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{usage.classesAttended}</div>
              <div className="text-muted-foreground">
                of {usage.classesLimit} classes
              </div>
              <Progress
                value={
                  usage.classesAttended > 20
                    ? 100
                    : (usage.classesAttended / 20) * 100
                }
                className="mt-4"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                Open Mat Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{usage.openMatSessions}</div>
              <div className="text-muted-foreground">
                of {usage.openMatLimit} sessions
              </div>
              <Progress
                value={
                  usage.openMatSessions > 15
                    ? 100
                    : (usage.openMatSessions / 15) * 100
                }
                className="mt-4"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5" />
                Guest Passes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{usage.guestPassesUsed}</div>
              <div className="text-muted-foreground">
                of {usage.guestPassesLimit} passes used
              </div>
              <Progress
                value={(usage.guestPassesUsed / usage.guestPassesLimit) * 100}
                className="mt-4"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Upcoming Classes</h2>
        <div className="space-y-4">
          {upcomingClasses.map((classItem, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{classItem.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {classItem.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {classItem.time}
                      </span>
                      <span>{classItem.coach}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        classItem.status === "Booked" ? "default" : "secondary"
                      }
                    >
                      {classItem.status}
                    </Badge>
                    {classItem.status === "Available" && (
                      <Button size="sm">Book Now</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
