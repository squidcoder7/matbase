import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import {
  QrCodeIcon,
  SmartphoneIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  InfoIcon,
  CameraIcon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Check In | Wrestling Gym" },
    {
      name: "description",
      content: "Check in to your wrestling class or open mat session",
    },
  ];
};

export default function CheckInPage() {
  // Mock data - in real app this would come from user's account
  const userInfo = {
    name: "John Smith",
    membership: "Premium",
    memberSince: "2023-03-15",
    currentClass: "Freestyle Wrestling",
    classTime: "18:00 - 19:30",
    coach: "Coach Mike",
  };

  const checkInMethods = [
    {
      id: "qr-code",
      name: "QR Code Scan",
      description: "Scan the QR code at the gym entrance",
      icon: QrCodeIcon,
      recommended: true,
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      description: "Use the gym mobile app to check in",
      icon: SmartphoneIcon,
      recommended: false,
    },
    {
      id: "manual",
      name: "Manual Check-in",
      description: "Ask staff to check you in manually",
      icon: CheckCircleIcon,
      recommended: false,
    },
  ];

  const todayClasses = [
    {
      name: "Freestyle Wrestling",
      time: "18:00 - 19:30",
      coach: "Coach Mike",
      status: "booked",
      checkInTime: "17:45",
      checkInStatus: "checked-in",
    },
    {
      name: "Strength Training",
      time: "06:00 - 07:30",
      coach: "Coach Mike",
      status: "available",
      checkInTime: null,
      checkInStatus: "not-checked-in",
    },
    {
      name: "Open Mat Session",
      time: "20:00 - 22:00",
      coach: "Self-guided",
      status: "available",
      checkInTime: null,
      checkInStatus: "not-checked-in",
    },
  ];

  const checkInHistory = [
    {
      date: "2024-01-25",
      class: "Freestyle Wrestling",
      time: "18:00 - 19:30",
      checkInTime: "17:45",
      checkOutTime: "19:35",
    },
    {
      date: "2024-01-23",
      class: "Strength Training",
      time: "06:00 - 07:30",
      checkInTime: "05:58",
      checkOutTime: "07:32",
    },
    {
      date: "2024-01-21",
      class: "Open Mat Session",
      time: "20:00 - 22:00",
      checkInTime: "20:05",
      checkOutTime: "21:45",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Check In
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Welcome back! Check in to your scheduled class or open mat session.
          Choose your preferred check-in method and get ready to train.
        </p>
      </div>

      {/* User Info and Current Status */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Welcome Back, {userInfo.name}!</h2>
        <div className="grid grid-cols-3 gap-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <InfoIcon className="w-6 h-6" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Membership
                  </div>
                  <div className="font-semibold">{userInfo.membership}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Member Since
                  </div>
                  <div className="font-semibold">{userInfo.memberSince}</div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Next Class
                  </div>
                  <div className="font-semibold">{userInfo.currentClass}</div>
                  <div className="text-muted-foreground">
                    {userInfo.classTime} • {userInfo.coach}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-muted-foreground">
                  Attendance Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">
                  Classes This Month
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Check-in Methods */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Choose Check-in Method</h2>
        <div className="grid grid-cols-3 gap-8">
          {checkInMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card
                key={method.id}
                className={`relative ${method.recommended ? "ring-2 ring-primary" : ""}`}
              >
                {method.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{method.name}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="w-full"
                    variant={method.recommended ? "default" : "outline"}
                  >
                    {method.id === "qr-code" && (
                      <QrCodeIcon className="w-4 h-4 mr-2" />
                    )}
                    {method.id === "mobile-app" && (
                      <SmartphoneIcon className="w-4 h-4 mr-2" />
                    )}
                    {method.id === "manual" && (
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                    )}
                    Use {method.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* QR Code Check-in */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">QR Code Check-in</h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    How to Check In
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Go to the gym entrance</li>
                    <li>Find the QR code scanner</li>
                    <li>Hold your phone camera over the QR code</li>
                    <li>Wait for confirmation message</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="class-select">Select Class to Check In</Label>
                  <select
                    id="class-select"
                    className="w-full p-3 border rounded-lg"
                    defaultValue=""
                  >
                    <option value="">Choose a class...</option>
                    <option value="freestyle">
                      Freestyle Wrestling (18:00-19:30)
                    </option>
                    <option value="strength">
                      Strength Training (06:00-07:30)
                    </option>
                    <option value="open-mat">
                      Open Mat Session (20:00-22:00)
                    </option>
                  </select>
                </div>

                <Button className="w-full" size="lg">
                  <CameraIcon className="w-4 h-4 mr-2" />
                  Scan QR Code
                </Button>
              </div>

              <div className="text-center">
                <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-center">
                    <QrCodeIcon className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">QR Code Scanner</p>
                    <p className="text-sm text-gray-400">
                      Point your camera here
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scan the QR code at the gym entrance to check in automatically
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Classes */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Today's Classes</h2>
        <div className="space-y-4">
          {todayClasses.map((classItem, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">
                        {classItem.name}
                      </h3>
                      <Badge
                        variant={
                          classItem.status === "booked"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {classItem.status === "booked" ? "Booked" : "Available"}
                      </Badge>
                      <Badge
                        variant={
                          classItem.checkInStatus === "checked-in"
                            ? "default"
                            : "outline"
                        }
                        className={
                          classItem.checkInStatus === "checked-in"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {classItem.checkInStatus === "checked-in"
                          ? "Checked In"
                          : "Not Checked In"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {classItem.time}
                      </span>
                      <span>{classItem.coach}</span>
                      {classItem.checkInTime && (
                        <span className="text-green-600">
                          Check-in: {classItem.checkInTime}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {classItem.status === "available" &&
                      classItem.checkInStatus === "not-checked-in" && (
                        <Button size="sm">
                          <CheckCircleIcon className="w-4 h-4 mr-2" />
                          Check In
                        </Button>
                      )}
                    {classItem.checkInStatus === "checked-in" && (
                      <Button variant="outline" size="sm">
                        Check Out
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Check-in History */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Recent Check-ins</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {checkInHistory.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{record.class}</div>
                    <div className="text-sm text-muted-foreground">
                      {record.date} • {record.time}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-green-600">
                      In: {record.checkInTime}
                    </div>
                    <div className="text-blue-600">
                      Out: {record.checkOutTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Check-in Tips */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Check-in Tips</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ClockIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Arrive Early</h3>
            <p className="text-muted-foreground">
              Check in 10-15 minutes before class starts to warm up properly
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPinIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Location Matters</h3>
            <p className="text-muted-foreground">
              Use the QR scanner at the main entrance for accurate check-in
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <AlertCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Check Out</h3>
            <p className="text-muted-foreground">
              Remember to check out when leaving to track your session duration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
