
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Info, Phone } from "lucide-react";

const RiskAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "high",
      title: "Blood Pressure Monitoring",
      description: "Your recent blood pressure reading was slightly elevated (135/85). Please monitor closely.",
      action: "Contact your healthcare provider within 24 hours",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      type: "medium",
      title: "Weight Gain Rate",
      description: "You've gained 3 pounds in the past week, which is above the recommended rate.",
      action: "Review your diet and exercise routine",
      icon: Info,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      type: "low",
      title: "Prenatal Vitamin Reminder",
      description: "You missed taking your prenatal vitamins for 2 consecutive days.",
      action: "Resume your vitamin schedule today",
      icon: Info,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const emergencyContacts = [
    { name: "Your OB/GYN", number: "(555) 123-4567", available: "24/7" },
    { name: "Hospital Labor & Delivery", number: "(555) 987-6543", available: "24/7" },
    { name: "Nurse Hotline", number: "(555) 456-7890", available: "9 AM - 9 PM" }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Risk Alerts & Notifications</h2>
            <p className="text-gray-600">Stay informed about important health indicators</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Alerts */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
          
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card key={alert.id} className={`card-shadow border-2 ${alert.borderColor} ${alert.bgColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-6 h-6 ${alert.color} mt-1`} />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                          <Badge variant={getBadgeVariant(alert.type)}>
                            {alert.type.toUpperCase()} PRIORITY
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{alert.description}</p>
                        <p className="text-sm font-medium text-gray-900">{alert.action}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="outline">Mark as Reviewed</Button>
                    {alert.type === "high" && (
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Doctor
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* All Clear Message */}
          <Card className="card-shadow border-2 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">Overall Health Status: Good</h4>
                  <p className="text-gray-700">Your pregnancy is progressing normally. Keep up the great work!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <div>
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Emergency Contacts</span>
              </CardTitle>
              <CardDescription>Important numbers for urgent situations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <h4 className="font-medium text-gray-900">{contact.name}</h4>
                  <p className="text-sm text-blue-600 font-mono">{contact.number}</p>
                  <p className="text-xs text-gray-500">{contact.available}</p>
                </div>
              ))}
              
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
                <h4 className="font-medium text-red-900">When to Call 911</h4>
                <ul className="text-xs text-red-800 mt-1 space-y-1">
                  <li>• Severe bleeding</li>
                  <li>• Severe abdominal pain</li>
                  <li>• Signs of stroke</li>
                  <li>• Difficulty breathing</li>
                  <li>• Loss of consciousness</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskAlerts;
