
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Heart, Shield, Brain, Users } from "lucide-react";

const LoginPage = () => {
  const { login, loading } = useAuth();

  const features = [
    {
      icon: Heart,
      title: "Maternal Care",
      description: "AI-powered weekly check-ins and personalized health guidance"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is secured on the Internet Computer blockchain"
    },
    {
      icon: Brain,
      title: "Smart Alerts",
      description: "Intelligent risk assessment and timely medication reminders"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with healthcare providers and other expecting mothers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            HAWI-AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Maternal Health with AI on the ICP Blockchain
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Login Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md card-shadow border-0">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Welcome Back
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Sign in with Internet Identity to access your maternal health dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  onClick={login}
                  disabled={loading}
                  className="w-full h-12 gradient-bg hover:opacity-90 text-white font-semibold"
                >
                  {loading ? "Connecting..." : "Sign in with Internet Identity"}
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  Secure authentication powered by the Internet Computer
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Your Pregnancy Journey, Reimagined
            </h2>
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
