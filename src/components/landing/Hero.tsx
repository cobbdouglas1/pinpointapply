
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
      
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6">
              Apply Smart.<br />
              Land<br />
              Interviews<br />
              Faster.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Your dream job is closer than you think. We help you create smarter applications that open more doors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="primary-button group">
                <span className="flex items-center justify-center">
                  Start Applying Smarter
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
            <p className="text-gray-500 mt-6">
              Join 10,000+ job seekers getting more interviews
            </p>
          </div>
          
          <div className={`flex justify-center items-center transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
              <img 
                src="/lovable-uploads/89885c5f-526b-4561-aedf-3b6e7dd11e71.png" 
                alt="Application concept illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent -z-10"></div>
    </div>
  );
};

export default Hero;
