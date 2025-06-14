
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
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard/dashboard",
    icon: Home,
    id: "dashboard"
  },
  {
    title: "Weekly Check-in",
    url: "/dashboard/checkin",
    icon: Calendar,
    id: "checkin"
  },
  {
    title: "Risk Alerts",
    url: "/dashboard/alerts",
    icon: AlertTriangle,
    id: "alerts"
  },
  {
    title: "Medications",
    url: "/dashboard/medications",
    icon: Pill,
    id: "medications"
  },
  {
    title: "Nutrition",
    url: "/dashboard/nutrition",
    icon: Apple,
    id: "nutrition"
  },
  {
    title: "AI Assistant",
    url: "/dashboard/assistant",
    icon: MessageSquare,
    id: "assistant"
  },
  {
    title: "Progress",
    url: "/dashboard/progress",
    icon: BarChart3,
    id: "progress"
  },
];

interface AppSidebarProps {
  onNavigate?: (id: string) => void;
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    // Update active item based on current route
    const currentPath = location.pathname;
    const activeSection = menuItems.find(item => currentPath.includes(item.id));
    if (activeSection) {
      setActiveItem(activeSection.id);
    }
  }, [location.pathname]);

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.id);
    navigate(item.url);
    onNavigate?.(item.id);
  };

  const handleSettingsClick = () => {
    setActiveItem("settings");
    navigate("/dashboard/settings");
    onNavigate?.("settings");
  };

  return (
    <Sidebar className="border-r border-blue-200 bg-white/95 backdrop-blur-sm">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">SMARTMAMA-AI</h2>
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
                    onClick={() => handleItemClick(item)}
                    className={`${
                      activeItem === item.id 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    } transition-colors cursor-pointer`}
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
                  onClick={handleSettingsClick}
                  className={`${
                    activeItem === "settings" 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  } transition-colors cursor-pointer`}
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
