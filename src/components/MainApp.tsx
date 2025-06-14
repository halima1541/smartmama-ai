
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./Dashboard";
import WeeklyCheckIn from "./WeeklyCheckIn";
import RiskAlerts from "./RiskAlerts";
import Medications from "./Medications";
import Nutrition from "./Nutrition";
import AIAssistant from "./AIAssistant";
import Progress from "./Progress";
import Settings from "./Settings";

const MainApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract the active section from the URL path
  const getActiveSectionFromPath = () => {
    const path = location.pathname;
    if (path.includes('/checkin')) return 'checkin';
    if (path.includes('/alerts')) return 'alerts';
    if (path.includes('/medications')) return 'medications';
    if (path.includes('/nutrition')) return 'nutrition';
    if (path.includes('/assistant')) return 'assistant';
    if (path.includes('/progress')) return 'progress';
    if (path.includes('/settings')) return 'settings';
    return 'dashboard';
  };

  const [activeSection, setActiveSection] = useState(getActiveSectionFromPath());

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    navigate(`/dashboard/${section}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "checkin":
        return <WeeklyCheckIn />;
      case "alerts":
        return <RiskAlerts />;
      case "medications":
        return <Medications />;
      case "nutrition":
        return <Nutrition />;
      case "assistant":
        return <AIAssistant />;
      case "progress":
        return <Progress />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout>
      <div className="hidden">
        <div onNavigate={handleNavigate} />
      </div>
      {renderContent()}
    </DashboardLayout>
  );
};

export default MainApp;
