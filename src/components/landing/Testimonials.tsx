
import { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Chen',
    role: 'Software Engineering Graduate',
    text: 'PinPoint Apply helped me tailor my CV to highlight my relevant skills, resulting in a 70% interview callback rate compared to my previous 10%. The match score feature was a game-changer.',
    rating: 5,
    highlight: 'Match Score',
    avatar: 'JC',
    delay: 100,
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Business Administration Graduate',
    text: 'As someone with limited work experience, the AI-crafted cover letters made me sound professional while staying authentic. I received compliments from 3 different hiring managers on my applications.',
    rating: 5,
    highlight: 'AI Cover Letters',
    avatar: 'MW',
    delay: 300,
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    role: 'Psychology Graduate',
    text: 'The ATS-optimized templates helped my applications get past screening systems that previously rejected me. I secured a job within 3 weeks after struggling for months.',
    rating: 5,
    highlight: 'ATS Optimization',
    avatar: 'SR',
    delay: 500,
  },
];

const Testimonials = () => {
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
    <section ref={sectionRef} className="py-20 bg-white relative" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 right-1/4 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Fresh graduates who transformed their job search with PinPoint Apply
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
            >
              <Card className="h-full border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-5 h-5 text-primary/20" />
                  <p className="text-gray-700 text-sm leading-relaxed pl-4">{testimonial.text}</p>
                </div>
                
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
