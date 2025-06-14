
import { Heart, Calendar, AlertTriangle, Pill, Apple, MessageSquare, BarChart3, Settings, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    id: "dashboard"
  },
  {
    title: "Weekly Check-in",
    url: "#",
    icon: Calendar,
    id: "checkin"
  },
  {
    title: "Risk Alerts",
    url: "#",
    icon: AlertTriangle,
    id: "alerts"
  },
  {
    title: "Medications",
    url: "#",
    icon: Pill,
    id: "medications"
  },
  {
    title: "Nutrition",
    url: "#",
    icon: Apple,
    id: "nutrition"
  },
  {
    title: "AI Assistant",
    url: "#",
    icon: MessageSquare,
    id: "assistant"
  },
  {
    title: "Progress",
    url: "#",
    icon: BarChart3,
    id: "progress"
  },
];

interface AppSidebarProps {
  onNavigate?: (id: string) => void;
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    onNavigate?.(id);
  };

  return (
    <Sidebar className="border-r border-blue-200 bg-white/95 backdrop-blur-sm">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">HAWI-AI</h2>
            <p className="text-xs text-gray-500">Maternal Health Assistant</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-700 font-semibold">
            Health Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleItemClick(item.id)}
                    className={`${
                      activeItem === item.id 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    } transition-colors`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-700 font-semibold">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => handleItemClick("settings")}
                  className={`${
                    activeItem === "settings" 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  } transition-colors`}
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
