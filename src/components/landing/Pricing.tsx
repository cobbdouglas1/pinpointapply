
import { useRef, useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Test-drive your perfect CV for free.',
    price: {
      monthly: 0,
    },
    features: [
      '1 Career Profile',
      '3 CVs per month',
      '3 Cover Letters per month',
      'Basic CV templates',
      'Email support',
    ],
    cta: 'Start Free',
    ctaLink: '/dashboard',
    delay: 100,
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Unlock unlimited applications. Apply faster.',
    price: {
      monthly: 12,
      annually: 99,
    },
    features: [
      '1 Career Profile',
      '30 CVs per month',
      '30 Cover Letters per month',
      'Premium CV templates',
      'Priority email support',
      'CV performance analytics',
    ],
    cta: 'Upgrade to Pro',
    ctaLink: '/dashboard',
    delay: 300,
    highlight: true,
    savings: 45,
  },
  {
    id: 'premium',
    name: 'Pinpoint Premium',
    description: 'Full control of your career journey.',
    price: {
      monthly: 29,
      annually: 249,
    },
    features: [
      'Unlimited Career Profiles',
      'Unlimited CVs',
      'Unlimited Cover Letters',
      'All Premium templates',
      '24/7 priority support',
      'Advanced analytics',
      'Personalized career coaching',
    ],
    cta: 'Go Premium',
    ctaLink: '/dashboard',
    delay: 500,
    highlight: false,
    savings: 99,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-gray-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that fits your needs. No hidden fees.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                  billingCycle === 'annually' 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setBillingCycle('annually')}
              >
                Annually
                <span className="absolute -top-3 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 30%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${plan.delay}ms` }}
            >
              <Card className={`relative overflow-hidden h-full flex flex-col ${
                plan.highlight 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-gray-200'
              }`}>
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-primary"></div>
                )}
                
                <CardHeader className="pt-8 pb-4">
                  {plan.highlight && (
                    <Badge variant="default" className="mb-4 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pb-4 flex-grow">
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' ? plan.price.monthly : (plan.price.annually || 0) / 12}
                      </span>
                      <span className="text-gray-600 ml-1 mb-1">/month</span>
                    </div>
                    
                    {billingCycle === 'annually' && plan.price.annually && (
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="text-green-600 font-medium">${plan.savings} saved</span> with annual billing
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Link 
                    to={plan.ctaLink} 
                    className={`w-full py-2.5 rounded-lg text-center font-medium transition-colors ${
                      plan.highlight
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'border border-primary bg-white text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm text-gray-600">
            All plans include access to our CV builder, cover letter generator, and matching algorithms. 
            Need a custom solution for your company or university? <a href="/contact" className="text-primary hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
