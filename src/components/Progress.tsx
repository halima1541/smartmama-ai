
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Calendar, Target } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Progress = () => {
  const { user } = useAuth();
  
  const pregnancyProgress = user ? (user.pregnancyWeek / 40) * 100 : 0;
  
  const milestones = [
    { week: 12, title: "End of First Trimester", completed: true, description: "Major organs formed" },
    { week: 20, title: "Anatomy Scan", completed: true, description: "Detailed ultrasound check" },
    { week: 24, title: "Viability Milestone", completed: true, description: "Baby can survive outside womb" },
    { week: 28, title: "Third Trimester", completed: false, description: "Final stretch begins" },
    { week: 36, title: "Full Term Soon", completed: false, description: "Baby considered full term at 37 weeks" },
    { week: 40, title: "Due Date", completed: false, description: "Expected delivery date" }
  ];

  const healthMetrics = [
    { metric: "Weight Gain", current: "18 lbs", target: "25-35 lbs", percentage: 60, trend: "up" },
    { metric: "Check-ins", current: "24", target: "40", percentage: 60, trend: "up" },
    { metric: "Exercise", current: "4 days/week", target: "5 days/week", percentage: 80, trend: "stable" },
    { metric: "Medication Adherence", current: "95%", target: "100%", percentage: 95, trend: "up" }
  ];

  const weeklyStats = [
    { week: 20, weight: 155, symptoms: 2, mood: 4 },
    { week: 21, weight: 156, symptoms: 1, mood: 4 },
    { week: 22, weight: 157, symptoms: 3, mood: 3 },
    { week: 23, weight: 158, symptoms: 2, mood: 4 },
    { week: 24, weight: 160, symptoms: 1, mood: 5 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pregnancy Progress</h2>
            <p className="text-gray-600">Track your journey and health metrics</p>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="card-shadow border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-600" />
            <span>Overall Pregnancy Progress</span>
          </CardTitle>
          <CardDescription>Week {user?.pregnancyWeek} of 40</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{Math.round(pregnancyProgress)}% Complete</span>
            </div>
            <ProgressBar value={pregnancyProgress} className="h-3" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Conception</span>
              <span>Due Date</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Milestones */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span>Pregnancy Milestones</span>
            </CardTitle>
            <CardDescription>Key moments in your pregnancy journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-4 h-4 rounded-full mt-1 ${
                    milestone.completed ? 'bg-green-500' : 
                    milestone.week === user?.pregnancyWeek ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className={`font-medium ${milestone.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                        Week {milestone.week}: {milestone.title}
                      </h4>
                      {milestone.completed && <Badge className="bg-green-100 text-green-800">✓</Badge>}
                      {milestone.week === user?.pregnancyWeek && <Badge className="bg-blue-100 text-blue-800">Current</Badge>}
                    </div>
                    <p className="text-sm text-gray-500">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Health Metrics</span>
            </CardTitle>
            <CardDescription>Your key health indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{metric.percentage}%</Badge>
                      <TrendingUp className={`w-4 h-4 ${
                        metric.trend === 'up' ? 'text-green-500' : 
                        metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                      }`} />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Current: {metric.current}</span>
                    <span>Target: {metric.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Trends */}
      <Card className="card-shadow border-0">
        <CardHeader>
          <CardTitle>Weekly Trends</CardTitle>
          <CardDescription>Your health data over the past 5 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Week</th>
                  <th className="text-left py-2">Weight (lbs)</th>
                  <th className="text-left py-2">Symptoms</th>
                  <th className="text-left py-2">Mood (1-5)</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {weeklyStats.map((stat, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 font-medium">{stat.week}</td>
                    <td className="py-2">{stat.weight}</td>
                    <td className="py-2">
                      <Badge variant={stat.symptoms <= 1 ? "default" : stat.symptoms <= 2 ? "secondary" : "destructive"}>
                        {stat.symptoms}
                      </Badge>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center space-x-1">
                        <span>{stat.mood}</span>
                        <div className="flex">
                          {[1,2,3,4,5].map((star) => (
                            <span key={star} className={`text-sm ${star <= stat.mood ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;
