
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-xl shadow-lg text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
