
import { useAuth } from "@/hooks/useAuth";
import AuthPage from "@/pages/AuthPage";
import MainApp from "@/components/MainApp";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Loading SMARTMAMA-AI...</p>
        </div>
      </div>
    );
  }

  // If user is on /auth route or not authenticated, show auth page
  if (location.pathname === '/auth' || !isAuthenticated) {
    return <AuthPage />;
  }

  // If authenticated and on dashboard routes, show main app
  return <MainApp />;
};

export default Index;
