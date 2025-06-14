
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Clock, Check, Plus } from "lucide-react";

const Medications = () => {
  const medications = [
    {
      id: 1,
      name: "Prenatal Vitamins",
      dosage: "1 tablet daily",
      time: "8:00 AM",
      taken: true,
      nextDue: "Tomorrow 8:00 AM",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Iron Supplement",
      dosage: "65mg",
      time: "12:00 PM",
      taken: false,
      nextDue: "Today 12:00 PM",
      color: "bg-red-100 text-red-800"
    },
    {
      id: 3,
      name: "Calcium",
      dosage: "500mg",
      time: "6:00 PM",
      taken: false,
      nextDue: "Today 6:00 PM",
      color: "bg-green-100 text-green-800"
    }
  ];

  const schedule = [
    { time: "8:00 AM", medication: "Prenatal Vitamins", status: "taken" },
    { time: "12:00 PM", medication: "Iron Supplement", status: "pending" },
    { time: "6:00 PM", medication: "Calcium", status: "upcoming" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Pill className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Medications & Supplements</h2>
              <p className="text-gray-600">Track your daily medications and supplements</p>
            </div>
          </div>
          <Button className="gradient-bg text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Medication
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your medication schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.medication}</h4>
                        <p className="text-sm text-gray-600">{item.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.status === "taken" && (
                        <>
                          <Badge className="bg-green-100 text-green-800">Taken</Badge>
                          <Check className="w-5 h-5 text-green-500" />
                        </>
                      )}
                      {item.status === "pending" && (
                        <>
                          <Badge className="bg-yellow-100 text-yellow-800">Due Now</Badge>
                          <Button size="sm">Mark Taken</Button>
                        </>
                      )}
                      {item.status === "upcoming" && (
                        <Badge className="bg-gray-100 text-gray-800">Upcoming</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medication List */}
          <Card className="card-shadow border-0 mt-6">
            <CardHeader>
              <CardTitle>All Medications</CardTitle>
              <CardDescription>Complete list of your current medications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medications.map((med) => (
                  <div key={med.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Pill className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{med.name}</h4>
                        <p className="text-sm text-gray-600">{med.dosage}</p>
                        <p className="text-xs text-gray-500">Next due: {med.nextDue}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={med.color}>Active</Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reminders & Tips */}
        <div className="space-y-6">
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800">Iron Supplement Due</h4>
                  <p className="text-sm text-yellow-700">Take with vitamin C for better absorption</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800">Prenatal Vitamin ✓</h4>
                  <p className="text-sm text-blue-700">Great job! Taken on time today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Medication Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Taking Iron</h4>
                  <p>Take on an empty stomach with orange juice for better absorption. May cause constipation.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">Prenatal Vitamins</h4>
                  <p>Take with food to reduce nausea. Best absorbed when taken consistently at the same time.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Medications;
