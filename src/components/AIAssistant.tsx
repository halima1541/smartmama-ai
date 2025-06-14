
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI health assistant. I can help answer questions about your pregnancy, medications, nutrition, and general health concerns. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "What foods should I avoid during pregnancy?",
    "Is it normal to feel tired in my second trimester?",
    "When should I call my doctor?",
    "What exercises are safe during pregnancy?",
    "How much weight should I gain?",
    "What are the signs of preterm labor?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (question: string): string => {
    const responses = {
      "tired": "It's completely normal to feel tired during pregnancy, especially in the first and third trimesters. Your body is working hard to support your growing baby. Make sure to get plenty of rest, eat nutritious meals, and stay hydrated. If fatigue is severe or accompanied by other symptoms, consult your healthcare provider.",
      "weight": "The recommended weight gain during pregnancy depends on your pre-pregnancy BMI. Generally, women with a normal BMI should gain 25-35 pounds. I recommend discussing your specific target with your healthcare provider for personalized guidance.",
      "exercise": "Most pregnant women can safely continue moderate exercise. Walking, swimming, and prenatal yoga are excellent options. Always consult your doctor before starting any exercise program and avoid high-impact activities or contact sports.",
      "food": "During pregnancy, avoid raw or undercooked meats, high-mercury fish, unpasteurized dairy products, raw eggs, and excessive caffeine. Focus on eating a balanced diet rich in folate, iron, calcium, and protein.",
      "default": "That's a great question! Based on your current pregnancy stage (week 24), I'd recommend discussing this with your healthcare provider for personalized advice. In the meantime, make sure you're taking your prenatal vitamins and following a healthy diet."
    };

    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key) && key !== 'default') {
        return response;
      }
    }
    return responses.default;
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI Health Assistant</h2>
            <p className="text-gray-600">Get instant answers to your pregnancy-related questions</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="card-shadow border-0 h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-blue-600" />
                <span>Chat with AI Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'ai' && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
                          {message.type === 'user' && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4" />
                          <div className="animate-pulse">Thinking...</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="flex space-x-2 mt-4">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about your pregnancy..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isLoading}
                />
                <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Questions */}
        <div>
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle>Quick Questions</CardTitle>
              <CardDescription>Common pregnancy questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-3 text-sm"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
