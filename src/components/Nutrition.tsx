
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, Utensils, TrendingUp, Award } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Nutrition = () => {
  const { user } = useAuth();

  const weeklyRecommendations = [
    {
      category: "Protein",
      target: "75g daily",
      current: "68g",
      percentage: 91,
      foods: ["Lean chicken", "Greek yogurt", "Eggs", "Quinoa"]
    },
    {
      category: "Calcium",
      target: "1000mg daily",
      current: "850mg",
      percentage: 85,
      foods: ["Milk", "Cheese", "Leafy greens", "Almonds"]
    },
    {
      category: "Iron",
      target: "27mg daily",
      current: "22mg",
      percentage: 81,
      foods: ["Spinach", "Red meat", "Beans", "Fortified cereals"]
    },
    {
      category: "Folate",
      target: "600mcg daily",
      current: "580mcg",
      percentage: 97,
      foods: ["Leafy greens", "Citrus fruits", "Fortified grains"]
    }
  ];

  const mealSuggestions = [
    {
      meal: "Breakfast",
      suggestion: "Greek yogurt parfait with berries and granola",
      nutrients: ["Protein", "Calcium", "Folate"],
      calories: "320 cal"
    },
    {
      meal: "Lunch",
      suggestion: "Quinoa bowl with grilled chicken and vegetables",
      nutrients: ["Protein", "Iron", "Fiber"],
      calories: "450 cal"
    },
    {
      meal: "Snack",
      suggestion: "Apple slices with almond butter",
      nutrients: ["Healthy fats", "Fiber", "Protein"],
      calories: "180 cal"
    },
    {
      meal: "Dinner",
      suggestion: "Salmon with sweet potato and steamed broccoli",
      nutrients: ["Omega-3", "Vitamin A", "Calcium"],
      calories: "520 cal"
    }
  ];

  const foodsToAvoid = [
    "Raw or undercooked fish",
    "High-mercury fish (shark, swordfish)",
    "Raw or undercooked eggs",
    "Unpasteurized dairy products",
    "Deli meats (unless heated)",
    "Excessive caffeine (>200mg/day)"
  ];

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <Apple className="w-6 h-6 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Nutrition Guide</h2>
            <p className="text-gray-600">Week {user?.pregnancyWeek} • Personalized nutrition recommendations</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Nutrient Tracking */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Daily Nutrient Goals</span>
              </CardTitle>
              <CardDescription>Track your essential pregnancy nutrients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {weeklyRecommendations.map((nutrient, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">{nutrient.category}</h4>
                      <Badge variant={nutrient.percentage >= 90 ? "default" : "secondary"}>
                        {nutrient.percentage}%
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(nutrient.percentage)}`}
                        style={{ width: `${nutrient.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {nutrient.current} of {nutrient.target}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {nutrient.foods.map((food, foodIndex) => (
                        <Badge key={foodIndex} variant="outline" className="text-xs">
                          {food}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Meal Suggestions */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                <span>Today's Meal Suggestions</span>
              </CardTitle>
              <CardDescription>Nutritious meals tailored for week {user?.pregnancyWeek}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mealSuggestions.map((meal, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{meal.meal}</h4>
                        <p className="text-gray-700">{meal.suggestion}</p>
                      </div>
                      <Badge variant="outline">{meal.calories}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {meal.nutrients.map((nutrient, nutrientIndex) => (
                        <Badge key={nutrientIndex} className="text-xs bg-blue-100 text-blue-800">
                          {nutrient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievement */}
          <Card className="card-shadow border-0 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <Award className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Great Job!</h3>
              <p className="text-sm opacity-90 mb-3">You've met 85% of your nutrition goals this week!</p>
              <Badge className="bg-white text-green-600">On Track</Badge>
            </CardContent>
          </Card>

          {/* Foods to Avoid */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="text-red-600">Foods to Avoid</CardTitle>
              <CardDescription>Important restrictions during pregnancy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {foodsToAvoid.map((food, index) => (
                  <div key={index} className="p-2 bg-red-50 border border-red-200 rounded text-sm text-red-800">
                    {food}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Tip */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Weekly Nutrition Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Week {user?.pregnancyWeek} Focus</h4>
                <p className="text-sm text-blue-800">
                  Your baby's bones are hardening now. Focus on calcium-rich foods like dairy products, 
                  leafy greens, and fortified plant milks to support healthy bone development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
