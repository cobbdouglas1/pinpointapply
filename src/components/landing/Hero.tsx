
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
              AI-crafted CVs &<br /> Cover Letters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Apply faster. Get hired sooner. Let our AI tailor your job applications to maximize your chance of landing interviews.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="primary-button group">
                <span className="flex items-center justify-center">
                  Start Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link to="/samples" className="secondary-button">
                See Samples
              </Link>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Mock CV preview - replace with actual image in production */}
              <div className="aspect-[4/3] bg-white p-6 border border-gray-100">
                <div className="h-8 w-40 bg-gray-100 rounded-md mb-4"></div>
                <div className="h-4 w-32 bg-gray-100 rounded-md mb-6"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-100 rounded-md"></div>
                  <div className="h-3 w-5/6 bg-gray-100 rounded-md"></div>
                  <div className="h-3 w-4/6 bg-gray-100 rounded-md"></div>
                </div>
                <div className="mt-6 mb-2 h-4 w-20 bg-gray-100 rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-100 rounded-md"></div>
                  <div className="h-3 w-full bg-gray-100 rounded-md"></div>
                  <div className="h-3 w-4/6 bg-gray-100 rounded-md"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-lg shadow-lg transform rotate-6 animate-subtle-float"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-100 rounded-lg shadow-lg transform -rotate-12 animate-subtle-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Percentage indicator */}
            <div className="absolute -right-6 bottom-10 glass-card py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">92% Match</span>
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
