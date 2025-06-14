
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Brain, Users, Calendar, AlertTriangle, Pill, Apple, MessageSquare, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

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

  const appFeatures = [
    {
      icon: Calendar,
      title: "Weekly Check-ins",
      description: "Track your pregnancy progress with guided weekly assessments"
    },
    {
      icon: AlertTriangle,
      title: "Risk Alerts",
      description: "Get notified about potential health concerns early"
    },
    {
      icon: Pill,
      title: "Medication Reminders",
      description: "Never miss your vitamins or prescribed medications"
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Personalized meal recommendations for each pregnancy stage"
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "24/7 support with intelligent health guidance"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your health journey with detailed analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SMARTMAMA-AI</h1>
          </div>
          <Button 
            onClick={() => navigate('/auth')}
            className="gradient-bg hover:opacity-90 text-white"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            SMARTMAMA-AI
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Maternal Health with AI on the ICP Blockchain
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Your intelligent companion for a safe and healthy pregnancy journey. Get personalized care, 
            smart alerts, and 24/7 support powered by artificial intelligence and secured by blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/auth')}
              size="lg"
              className="gradient-bg hover:opacity-90 text-white text-lg px-8 py-3"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-blue-600 border-blue-300 hover:bg-blue-50 text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose SMARTMAMA-AI?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Revolutionizing maternal healthcare with cutting-edge technology
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 card-shadow bg-white/80 hover:bg-white transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Comprehensive Maternal Care Features
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Everything you need for a healthy pregnancy in one intelligent platform
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Smart Pregnancy Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of mothers who trust SMARTMAMA-AI for their maternal health needs
          </p>
          <Button 
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold">SMARTMAMA-AI</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering maternal health with AI on the Internet Computer blockchain
          </p>
          <p className="text-sm text-gray-500">
            © 2024 SMARTMAMA-AI. Built with ❤️ for mothers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
