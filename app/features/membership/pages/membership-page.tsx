import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { CheckIcon, StarIcon, CrownIcon, ZapIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Membership Plans | Wrestling Gym" },
    {
      name: "description",
      content:
        "Choose your perfect membership plan and start your wrestling journey",
    },
  ];
};

export default function MembershipPage() {
  const plans = [
    {
      name: "Basic",
      price: "₩50,000",
      period: "per month",
      description: "Perfect for beginners starting their wrestling journey",
      features: [
        "Access to basic classes",
        "Open mat sessions (2x/week)",
        "Locker room access",
        "Basic equipment rental",
        "Email support",
      ],
      popular: false,
      icon: ZapIcon,
      color: "bg-blue-500",
    },
    {
      name: "Premium",
      price: "₩80,000",
      period: "per month",
      description: "Most popular choice for serious wrestlers",
      features: [
        "All Basic features",
        "Unlimited class access",
        "Open mat sessions (unlimited)",
        "Personalized training plan",
        "Priority booking",
        "Guest passes (2/month)",
        "24/7 gym access",
      ],
      popular: true,
      icon: StarIcon,
      color: "bg-yellow-500",
    },
    {
      name: "Elite",
      price: "₩120,000",
      period: "per month",
      description: "Ultimate experience for competitive athletes",
      features: [
        "All Premium features",
        "Private coaching sessions (2/month)",
        "Competition entry fees covered",
        "Nutrition consultation",
        "Recovery room access",
        "Guest passes (5/month)",
        "Exclusive events access",
      ],
      popular: false,
      icon: CrownIcon,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Select the perfect membership plan that fits your wrestling goals and
          lifestyle. All plans include our multilingual support and
          international community access.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <div
                  className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{plan.price}</div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <p className="text-muted-foreground pt-4">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold">Membership Benefits</h2>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold">International Community</h3>
            <p className="text-muted-foreground">
              Connect with wrestlers from around the world, including US
              military personnel
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-semibold">Multilingual Support</h3>
            <p className="text-muted-foreground">
              Classes and support available in Korean, English, and Russian
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold">Competition Ready</h3>
            <p className="text-muted-foreground">
              Train with experienced coaches to prepare for local and national
              competitions
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our community today and begin your wrestling journey with
          world-class training and an international community of athletes.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/membership/payment">Sign Up Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/home/schedule">View Class Schedule</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
