'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/temp');
  };
  const handleProfessionalPlan = () => {
    router.push('/temp');
  };
  const handleEnterprisePlan = () => {
    router.push('/temp');
  };
  const handleScheduleDemo = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for individual developers and small projects',
      price: billingCycle === 'monthly' ? 'Free' : 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 AI models',
        'Basic API access',
        'Community support',
        '10GB data processing',
        'Standard analytics',
        'Basic security features',
      ],
      cta: 'Start Building',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Best for growing teams and production applications',
      price: billingCycle === 'monthly' ? '$99' : '$79',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited AI models',
        'Advanced API suite',
        'Priority support',
        '1TB data processing',
        'Real-time analytics',
        'Enterprise security',
        'Team collaboration',
        'Custom integrations',
        '99.9% uptime SLA',
      ],
      cta: 'Start Free Trial',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with mission-critical needs',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Unlimited data processing',
        '24/7 dedicated support',
        'Custom model training',
        'Advanced compliance',
        '99.99% uptime SLA',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your AI Innovation
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Without Limits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to accelerate your AI development. Transparent pricing, no
            hidden costs, scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom AI solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored AI infrastructure and consulting for enterprises with unique
            requirements. Let's discuss how Example Tech can accelerate your AI transformation.
          </p>
          <Button variant="outline" size="lg" onClick={handleScheduleDemo}>
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
