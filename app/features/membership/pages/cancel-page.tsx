import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Textarea } from "~/common/components/ui/textarea";
import { Label } from "~/common/components/ui/label";
import {
  AlertTriangleIcon,
  CalendarIcon,
  CreditCardIcon,
  HeartIcon,
  XIcon,
  CheckIcon,
  InfoIcon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Cancel Membership | Wrestling Gym" },
    {
      name: "description",
      content: "Cancel your membership or provide feedback",
    },
  ];
};

export default function CancelPage() {
  const currentPlan = {
    name: "Premium",
    status: "Active",
    nextBilling: "2024-02-15",
    price: "₩80,000",
    features: [
      "Unlimited class access",
      "Open mat sessions (unlimited)",
      "Personalized training plan",
      "Priority booking",
      "Guest passes (2/month)",
      "24/7 gym access",
    ],
  };

  const cancellationReasons = [
    "Too expensive",
    "Not enough time to train",
    "Moving to a different location",
    "Health issues",
    "Found another gym",
    "Not satisfied with classes",
    "Personal reasons",
    "Other",
  ];

  const alternatives = [
    {
      name: "Downgrade to Basic",
      price: "₩50,000",
      description: "Keep training with limited access",
      savings: "Save ₩30,000/month",
    },
    {
      name: "Pause Membership",
      price: "₩20,000",
      description: "Freeze your account for up to 3 months",
      savings: "Save ₩60,000/month",
    },
    {
      name: "Switch to Pay-per-Class",
      price: "₩15,000",
      description: "Pay only for classes you attend",
      savings: "Flexible pricing",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Cancel Membership
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          We're sorry to see you go. Before you cancel, please let us know why
          you're leaving and consider some alternatives that might better suit
          your needs.
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Your Current Plan</h2>
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    {currentPlan.name} Plan
                  </h3>
                  <Badge variant="secondary" className="mt-2">
                    {currentPlan.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Current Features:</h4>
                  <ul className="space-y-1">
                    {currentPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckIcon className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{currentPlan.price}</div>
                <div className="text-muted-foreground">per month</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Next billing: {currentPlan.nextBilling}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alternatives */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Consider These Alternatives</h2>
        <div className="grid grid-cols-3 gap-8">
          {alternatives.map((alternative) => (
            <Card key={alternative.name}>
              <CardHeader>
                <CardTitle className="text-xl">{alternative.name}</CardTitle>
                <div className="text-2xl font-bold">{alternative.price}</div>
                <p className="text-muted-foreground">
                  {alternative.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge variant="secondary" className="text-green-600">
                  {alternative.savings}
                </Badge>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cancellation Form */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Cancellation Details</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XIcon className="w-6 h-6" />
              Cancel Membership
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Cancellation Reason */}
            <div className="space-y-4">
              <Label className="text-base font-medium">
                Why are you cancelling?
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {cancellationReasons.map((reason) => (
                  <div key={reason} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id={reason}
                      name="cancellation-reason"
                      value={reason}
                      className="w-4 h-4 text-primary"
                    />
                    <Label htmlFor={reason} className="cursor-pointer">
                      {reason}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Feedback */}
            <div className="space-y-4">
              <Label htmlFor="feedback" className="text-base font-medium">
                Additional feedback (optional)
              </Label>
              <Textarea
                id="feedback"
                placeholder="Tell us more about your experience and how we could improve..."
                rows={4}
              />
            </div>

            {/* Cancellation Date */}
            <div className="space-y-4">
              <Label className="text-base font-medium">
                When would you like to cancel?
              </Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="immediate"
                    name="cancellation-date"
                    value="immediate"
                    className="w-4 h-4 text-primary"
                    defaultChecked
                  />
                  <Label htmlFor="immediate" className="cursor-pointer">
                    <div className="font-medium">Immediate cancellation</div>
                    <div className="text-sm text-muted-foreground">
                      Your membership ends today, no refund for current month
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="end-of-period"
                    name="cancellation-date"
                    value="end-of-period"
                    className="w-4 h-4 text-primary"
                  />
                  <Label htmlFor="end-of-period" className="cursor-pointer">
                    <div className="font-medium">
                      End of current billing period
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Continue until {currentPlan.nextBilling}, then cancel
                    </div>
                  </Label>
                </div>
              </div>
            </div>

            {/* Final Confirmation */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <strong>Important:</strong> Once cancelled, you'll lose access
                  to all Premium features. You can reactivate your membership at
                  any time, but you may need to pay a reactivation fee.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm-cancellation"
                  className="w-4 h-4 text-primary mt-1"
                />
                <Label
                  htmlFor="confirm-cancellation"
                  className="text-sm cursor-pointer"
                >
                  I understand that cancelling will end my membership and I'll
                  lose access to Premium features. I also understand that I can
                  reactivate my membership later if I change my mind.
                </Label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex-1">
                <HeartIcon className="w-4 h-4 mr-2" />
                Keep My Membership
              </Button>
              <Button variant="destructive" className="flex-1">
                <XIcon className="w-4 h-4 mr-2" />
                Confirm Cancellation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What Happens Next */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Happens Next?</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CalendarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Immediate Changes</h3>
            <p className="text-muted-foreground">
              Your membership will be cancelled according to your chosen date
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CreditCardIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Billing</h3>
            <p className="text-muted-foreground">
              No further charges will be made to your payment method
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <InfoIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Reactivation</h3>
            <p className="text-muted-foreground">
              You can reactivate your membership anytime by contacting us
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Still Want to Cancel?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We understand that circumstances change. If you're sure about
          cancelling, please complete the form above. We'll be here when you're
          ready to return.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
          <Button variant="outline" size="lg">
            <HeartIcon className="w-4 h-4 mr-2" />
            Change My Mind
          </Button>
        </div>
      </div>
    </div>
  );
}
