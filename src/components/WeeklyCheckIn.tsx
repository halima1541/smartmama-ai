
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/hooks/useAuth";
import { Calendar, Heart, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WeeklyCheckIn = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    weight: "",
    bloodPressure: "",
    symptoms: [] as string[],
    mood: "",
    sleepHours: "",
    exerciseMinutes: "",
    notes: ""
  });

  const commonSymptoms = [
    "Nausea/Morning sickness",
    "Fatigue",
    "Headaches",
    "Back pain",
    "Swelling",
    "Heartburn",
    "Constipation",
    "Shortness of breath",
    "Frequent urination",
    "Mood changes"
  ];

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        symptoms: [...prev.symptoms, symptom]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        symptoms: prev.symptoms.filter(s => s !== symptom)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Weekly check-in submitted:", formData);
    
    toast({
      title: "Check-in Completed! ✅",
      description: "Your weekly health data has been recorded successfully.",
    });

    // Reset form
    setFormData({
      weight: "",
      bloodPressure: "",
      symptoms: [],
      mood: "",
      sleepHours: "",
      exerciseMinutes: "",
      notes: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Weekly Check-in</h2>
            <p className="text-gray-600">Week {user?.pregnancyWeek} • Complete your health assessment</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Vital Signs */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Vital Signs</span>
              </CardTitle>
              <CardDescription>Record your key health measurements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="weight">Current Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  placeholder="e.g., 150"
                />
              </div>
              <div>
                <Label htmlFor="bloodPressure">Blood Pressure (systolic/diastolic)</Label>
                <Input
                  id="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={(e) => setFormData(prev => ({ ...prev, bloodPressure: e.target.value }))}
                  placeholder="e.g., 120/80"
                />
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Lifestyle Factors</CardTitle>
              <CardDescription>Track your daily habits and activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="sleepHours">Hours of Sleep (per night)</Label>
                <Input
                  id="sleepHours"
                  type="number"
                  value={formData.sleepHours}
                  onChange={(e) => setFormData(prev => ({ ...prev, sleepHours: e.target.value }))}
                  placeholder="e.g., 8"
                />
              </div>
              <div>
                <Label htmlFor="exerciseMinutes">Exercise Minutes (per day)</Label>
                <Input
                  id="exerciseMinutes"
                  type="number"
                  value={formData.exerciseMinutes}
                  onChange={(e) => setFormData(prev => ({ ...prev, exerciseMinutes: e.target.value }))}
                  placeholder="e.g., 30"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Symptoms */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span>Symptoms</span>
            </CardTitle>
            <CardDescription>Select any symptoms you've experienced this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonSymptoms.map((symptom) => (
                <div key={symptom} className="flex items-center space-x-2">
                  <Checkbox
                    id={symptom}
                    checked={formData.symptoms.includes(symptom)}
                    onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                  />
                  <Label htmlFor={symptom} className="text-sm cursor-pointer">{symptom}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mood & Notes */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle>Mood & Additional Notes</CardTitle>
            <CardDescription>How are you feeling emotionally and physically?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Overall Mood This Week</Label>
              <RadioGroup
                value={formData.mood}
                onValueChange={(value) => setFormData(prev => ({ ...prev, mood: value }))}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="excellent" />
                  <Label htmlFor="excellent">😊 Excellent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="good" />
                  <Label htmlFor="good">🙂 Good</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="fair" />
                  <Label htmlFor="fair">😐 Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="poor" />
                  <Label htmlFor="poor">😔 Poor</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Share any additional concerns, questions, or observations..."
                className="mt-2"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="px-8 py-2 gradient-bg text-white">
            Complete Check-in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WeeklyCheckIn;
