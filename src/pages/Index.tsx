
import { useAuth } from "@/hooks/useAuth";
import LoginPage from "@/components/LoginPage";
import MainApp from "@/components/MainApp";

const Index = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Loading HAWI-AI...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {!isAuthenticated ? <LoginPage /> : <MainApp />}
    </div>
  );
};

export default Index;
