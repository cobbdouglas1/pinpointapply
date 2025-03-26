
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const exampleCVs = [
  {
    id: 1,
    title: 'Software Engineer CV',
    imageUrl: '/lovable-uploads/5ed00384-d043-4cb0-a77d-b7dd3e3773cd.png',
    description: 'ATS-optimized CV for software engineering roles highlighting technical skills and project accomplishments.',
  },
  {
    id: 2,
    title: 'Marketing Professional CV',
    imageUrl: '/lovable-uploads/5ed00384-d043-4cb0-a77d-b7dd3e3773cd.png',
    description: 'Results-driven marketing CV featuring campaign metrics and brand development experience.',
  },
  {
    id: 3,
    title: 'Finance Graduate CV',
    imageUrl: '/lovable-uploads/5ed00384-d043-4cb0-a77d-b7dd3e3773cd.png',
    description: 'Entry-level finance CV showcasing relevant coursework and internship experiences.',
  },
  {
    id: 4,
    title: 'Healthcare Professional CV',
    imageUrl: '/lovable-uploads/5ed00384-d043-4cb0-a77d-b7dd3e3773cd.png',
    description: 'Healthcare CV highlighting patient care achievements and relevant certifications.',
  },
];

const Examples = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">CV & Cover Letter Examples</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse our collection of professionally crafted CVs and cover letters tailored for different industries and career stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {exampleCVs.map((example, index) => (
              <div 
                key={example.id}
                className={`transform transition-all duration-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                    <p className="text-gray-600 mb-4">{example.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <img 
                        src={example.imageUrl} 
                        alt={example.title} 
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to create your own professional CV?</h2>
            <p className="text-gray-600 mb-6">
              PinPoint Apply helps you create tailored CVs and cover letters that stand out to employers and pass ATS screening.
            </p>
            <Link to="/dashboard" className="primary-button inline-block">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Examples;
