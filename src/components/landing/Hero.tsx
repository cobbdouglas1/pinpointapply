
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
            <div className="inline-block mb-4">
              <span className="bg-primary/10 rounded-full py-1 px-4 text-sm font-medium text-primary">
                AI-Powered Job Application Assistant
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              Land interviews faster
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Save time with AI-personalized applications for every job.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="primary-button group">
                <span className="flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/examples" className="secondary-button">
                See Examples
              </Link>
            </div>
          </div>
          
          <div className={`relative flex justify-center transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
              {/* Marketing image */}
              <img 
                src="/lovable-uploads/5ed00384-d043-4cb0-a77d-b7dd3e3773cd.png" 
                alt="Job hunting illustration" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Title now placed below the image */}
            <p className="mt-4 text-center text-lg font-medium text-gray-800 italic">
              Turn your Job Hunting into Job Winning with Pinpoint Apply.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent -z-10"></div>
    </div>
  );
};

export default Hero;
