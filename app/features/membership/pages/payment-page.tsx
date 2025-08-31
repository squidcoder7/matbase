import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Badge } from "~/common/components/ui/badge";
import { CheckIcon, CreditCardIcon, LockIcon, ShieldIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Payment | Wrestling Gym" },
    {
      name: "description",
      content: "Complete your membership signup with secure payment",
    },
  ];
};

export default function PaymentPage() {
  const selectedPlan = {
    name: "Premium",
    price: "₩80,000",
    period: "per month",
    features: [
      "Unlimited class access",
      "Open mat sessions (unlimited)",
      "Personalized training plan",
      "Priority booking",
      "Guest passes (2/month)",
      "24/7 gym access",
    ],
  };

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit/Debit Card",
      icon: CreditCardIcon,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: CreditCardIcon,
      description: "Direct bank transfer (2-3 business days)",
    },
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">
          Complete Your Signup
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Secure your membership with our safe and encrypted payment system.
          Your information is protected with bank-level security.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Payment Form */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCardIcon className="w-6 h-6" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Method Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Payment Method</Label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="radio"
                        id={method.id}
                        name="payment-method"
                        value={method.id}
                        className="w-4 h-4 text-primary"
                        defaultChecked={method.id === "credit-card"}
                      />
                      <Label
                        htmlFor={method.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <method.icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {method.description}
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credit Card Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="font-mono"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="font-mono"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardholder">Cardholder Name</Label>
                    <Input id="cardholder" placeholder="John Doe" />
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Billing Address</Label>
                <div className="space-y-4">
                  <Input placeholder="Street Address" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="City" />
                    <Input placeholder="Postal Code" />
                  </div>
                  <Input placeholder="Country" />
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <ShieldIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong>Secure Payment:</strong> Your payment information is
                  encrypted and secure. We use industry-standard SSL encryption
                  to protect your data.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selected Plan */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{selectedPlan.name} Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Monthly subscription
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {selectedPlan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {selectedPlan.period}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Plan Features:</h4>
                  <ul className="space-y-1">
                    {selectedPlan.features.map((feature, index) => (
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

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{selectedPlan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Billed monthly, cancel anytime
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-primary mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="w-4 h-4 text-primary mt-1"
                  />
                  <Label htmlFor="marketing" className="text-sm cursor-pointer">
                    I agree to receive marketing communications about new
                    classes, events, and special offers
                  </Label>
                </div>
              </div>

              {/* Complete Payment Button */}
              <Button className="w-full" size="lg">
                <LockIcon className="w-4 h-4 mr-2" />
                Complete Payment
              </Button>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t">
                <Badge variant="outline" className="flex items-center gap-2">
                  <ShieldIcon className="w-4 h-4" />
                  SSL Secure
                </Badge>
                <Badge variant="outline" className="flex items-center gap-2">
                  <LockIcon className="w-4 h-4" />
                  PCI Compliant
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our support team is here to help with any questions about your
                membership or payment.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
