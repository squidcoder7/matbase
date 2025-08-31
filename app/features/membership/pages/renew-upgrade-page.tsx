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
import {
  CheckIcon,
  ArrowUpIcon,
  RefreshCwIcon,
  StarIcon,
  CrownIcon,
  ZapIcon,
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Renew & Upgrade | Wrestling Gym" },
    {
      name: "description",
      content: "Renew your membership or upgrade to a higher plan",
    },
  ];
};

export default function RenewUpgradePage() {
  const currentPlan = {
    name: "Basic",
    price: "₩50,000",
    status: "Expires in 15 days",
    features: [
      "Access to basic classes",
      "Open mat sessions (2x/week)",
      "Locker room access",
      "Basic equipment rental",
      "Email support",
    ],
  };

  const upgradeOptions = [
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
      savings: "₩30,000 more per month",
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
      savings: "₩70,000 more per month",
    },
  ];

  const renewalOptions = [
    {
      period: "1 Month",
      price: "₩50,000",
      originalPrice: "₩50,000",
      discount: "0%",
      popular: false,
    },
    {
      period: "3 Months",
      price: "₩135,000",
      originalPrice: "₩150,000",
      discount: "10%",
      popular: true,
    },
    {
      period: "6 Months",
      price: "₩240,000",
      originalPrice: "₩300,000",
      discount: "20%",
      popular: false,
    },
    {
      period: "12 Months",
      price: "₩420,000",
      originalPrice: "₩600,000",
      discount: "30%",
      popular: false,
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Renew & Upgrade
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Renew your current membership or upgrade to unlock more features and
          benefits. Choose the option that best fits your wrestling goals.
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Current Plan</h2>
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Renewal Options */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Renew Your Current Plan</h2>
        <div className="grid grid-cols-4 gap-6">
          {renewalOptions.map((option) => (
            <Card
              key={option.period}
              className={`relative ${option.popular ? "ring-2 ring-primary scale-105" : ""}`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Best Value
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{option.period}</CardTitle>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{option.price}</div>
                  {option.discount !== "0%" && (
                    <div className="text-sm text-muted-foreground line-through">
                      {option.originalPrice}
                    </div>
                  )}
                  {option.discount !== "0%" && (
                    <Badge variant="secondary" className="text-green-600">
                      Save {option.discount}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  className="w-full"
                  variant={option.popular ? "default" : "outline"}
                >
                  <RefreshCwIcon className="w-4 h-4 mr-2" />
                  {option.popular ? "Renew Now" : "Choose"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Upgrade Your Plan</h2>
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upgradeOptions.map((plan) => {
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
                <CardHeader className="text-center pb-6">
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
                  <p className="text-muted-foreground pt-4">
                    {plan.description}
                  </p>
                  <div className="text-sm text-muted-foreground pt-2">
                    {plan.savings} than your current plan
                  </div>
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
                    <ArrowUpIcon className="w-4 h-4 mr-2" />
                    {plan.popular ? "Upgrade Now" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Plan Comparison</h2>
        <Card>
          <CardContent className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-semibold">Features</th>
                    <th className="text-center py-4 font-semibold">Basic</th>
                    <th className="text-center py-4 font-semibold">Premium</th>
                    <th className="text-center py-4 font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b">
                    <td className="py-3">Monthly Price</td>
                    <td className="text-center py-3">₩50,000</td>
                    <td className="text-center py-3">₩80,000</td>
                    <td className="text-center py-3">₩120,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Class Access</td>
                    <td className="text-center py-3">Basic classes</td>
                    <td className="text-center py-3">Unlimited</td>
                    <td className="text-center py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Open Mat</td>
                    <td className="text-center py-3">2x/week</td>
                    <td className="text-center py-3">Unlimited</td>
                    <td className="text-center py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Guest Passes</td>
                    <td className="text-center py-3">0</td>
                    <td className="text-center py-3">2/month</td>
                    <td className="text-center py-3">5/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Private Coaching</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">2/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">24/7 Access</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Continue Your Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the option that best fits your wrestling goals and continue
          training with our international community of athletes.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/membership/payment">Renew or Upgrade</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/home/schedule">View Class Schedule</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
