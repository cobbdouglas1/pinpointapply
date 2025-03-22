
import { useRef, useState, useEffect } from 'react';
import { 
  UserPlus, 
  FileUp, 
  BarChart3, 
  PenTool,
  ChevronRight,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Build your career profile',
    description: 'Create your comprehensive career profile in just 10 minutes. Add your experience, skills, and achievements.',
    icon: UserPlus,
  },
  {
    id: 2,
    title: 'Add job postings to the CV generator',
    description: 'Upload job descriptions or paste URLs from job boards to generate tailored CVs.',
    icon: FileUp,
  },
  {
    id: 3,
    title: 'View match score & personalize your CV',
    description: 'Get instant feedback on how well your profile matches the job requirements and make adjustments.',
    icon: BarChart3,
  },
  {
    id: 4,
    title: 'Tailor your cover letter with your unique CV',
    description: 'Generate a compelling cover letter based on your CV and the specific job requirements.',
    icon: PenTool,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden" id="how-it-works">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-gray-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process helps you create professional job applications in minutes, not hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`relative p-6 rounded-xl h-full transition-all duration-300 
                  ${activeStep === step.id
                    ? 'bg-white border-primary/20 border shadow-xl'
                    : 'bg-white/70 border border-gray-100 shadow-lg'
                  }
                `}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="step-number">
                      {step.id}
                    </div>
                    <div className="ml-4">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{step.description}</p>
                  
                  {step.id !== steps.length && (
                    <div className="hidden md:flex justify-center mt-4">
                      <ChevronRight className="w-6 h-6 text-primary/50" />
                    </div>
                  )}
                </div>
                
                {activeStep === step.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>
                )}
              </div>
              
              {/* Mobile step connector */}
              {step.id !== steps.length && (
                <div className="flex justify-center my-4 md:hidden">
                  <ChevronRight className="w-6 h-6 -rotate-90 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/signup" className="primary-button inline-flex items-center group">
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
