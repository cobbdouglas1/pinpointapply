
import { useState, useEffect, useRef } from 'react';
import { 
  UserCheck, 
  FileText, 
  FilePenLine, 
  BarChart4,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const featuresList = [
  {
    id: 1,
    title: 'Career Profile Builder',
    description: 'Create a comprehensive career profile in minutes that our AI uses to generate tailored job applications.',
    icon: UserCheck,
    delay: 100,
  },
  {
    id: 2,
    title: 'AI-Crafted CV',
    description: 'Generate professional CVs tailored to specific job descriptions for higher match rates.',
    icon: FileText,
    delay: 200,
  },
  {
    id: 3,
    title: 'Tailored Cover Letters',
    description: 'Craft compelling cover letters that highlight your relevant experience and skills for each position.',
    icon: FilePenLine,
    delay: 300,
  },
  {
    id: 4,
    title: 'Match Scores',
    description: 'Get instant feedback on how well your profile matches with job requirements.',
    icon: BarChart4,
    delay: 400,
  },
  {
    id: 5,
    title: 'ATS-Optimized Templates',
    description: 'Use templates designed to pass through Applicant Tracking Systems with higher success rates.',
    icon: FileCheck,
    delay: 500,
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const featuresRef = useRef<HTMLDivElement>(null);
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev % featuresList.length) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={featuresRef} className="py-20 bg-white relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="absolute -top-24 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to land your next job</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform streamlines the job application process, helping you create tailored applications that stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {featuresList.map((feature) => (
            <div 
              key={feature.id}
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div 
                className={`relative p-6 rounded-xl border h-full transition-all duration-300 cursor-pointer ${
                  activeFeature === feature.id
                    ? 'border-primary/30 bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-gray-100 bg-white hover:border-primary/20 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="feature-icon">
                  <feature.icon className="w-6 h-6" />
                  {activeFeature === feature.id && (
                    <div className="absolute inset-0 rounded-xl ring-2 ring-primary/20 animate-pulse"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/features" 
            className="inline-flex items-center text-primary font-medium hover:underline transition-colors"
          >
            Learn more about our features
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
