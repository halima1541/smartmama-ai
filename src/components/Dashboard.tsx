
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { Calendar, Heart, AlertTriangle, Pill, Apple, Activity, Clock, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  const pregnancyProgress = user ? (user.pregnancyWeek / 40) * 100 : 0;
  const daysUntilDueDate = user ? (40 - user.pregnancyWeek) * 7 : 0;

  const quickStats = [
    {
      title: "Current Week",
      value: user?.pregnancyWeek || 0,
      subtitle: "of 40 weeks",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Days Until Due",
      value: daysUntilDueDate,
      subtitle: "estimated",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Check-ins",
      value: "12",
      subtitle: "completed",
      icon: CheckCircle,
      color: "text-purple-600"
    },
    {
      title: "Health Score",
      value: "95%",
      subtitle: "excellent",
      icon: Activity,
      color: "text-emerald-600"
    }
  ];

  const todayTasks = [
    { task: "Take prenatal vitamins", completed: true, time: "8:00 AM" },
    { task: "Drink 8 glasses of water", completed: false, time: "Throughout day" },
    { task: "Weekly check-in", completed: false, time: "Evening" },
    { task: "Light exercise (30 min)", completed: true, time: "2:00 PM" }
  ];

  const upcomingAppointments = [
    { title: "Routine Check-up", date: "June 20, 2025", doctor: "Dr. Smith" },
    { title: "Ultrasound Scan", date: "June 27, 2025", doctor: "Dr. Johnson" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name}! 👋
            </h2>
            <p className="text-gray-600 mt-1">
              You're in week {user?.pregnancyWeek} of your pregnancy journey
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-2">🤱</div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Second Trimester
            </Badge>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pregnancy Progress</span>
            <span>{user?.pregnancyWeek}/40 weeks</span>
          </div>
          <Progress value={pregnancyProgress} className="h-2" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.subtitle}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>Today's Tasks</span>
            </CardTitle>
            <CardDescription>Keep track of your daily health activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <div>
                    <p className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                      {task.task}
                    </p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription>Your scheduled medical visits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <h4 className="font-medium text-gray-900">{appointment.title}</h4>
                <p className="text-sm text-gray-600">{appointment.date}</p>
                <p className="text-sm text-blue-600">{appointment.doctor}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-3">
              Schedule New Appointment
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-shadow border-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <Heart className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-2">Weekly Check-in</h3>
            <p className="text-sm opacity-90 mb-4">Complete your weekly health assessment</p>
            <Button variant="secondary" size="sm">Start Check-in</Button>
          </CardContent>
        </Card>

        <Card className="card-shadow border-0 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <Apple className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-2">Nutrition Guide</h3>
            <p className="text-sm opacity-90 mb-4">Get personalized meal recommendations</p>
            <Button variant="secondary" size="sm">View Guide</Button>
          </CardContent>
        </Card>

        <Card className="card-shadow border-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <Pill className="w-8 h-8 mb-3" />
            <h3 className="font-semibold mb-2">Medications</h3>
            <p className="text-sm opacity-90 mb-4">View your medication schedule</p>
            <Button variant="secondary" size="sm">Manage</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
