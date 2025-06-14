
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./Dashboard";
import WeeklyCheckIn from "./WeeklyCheckIn";
import RiskAlerts from "./RiskAlerts";
import Medications from "./Medications";
import Nutrition from "./Nutrition";
import AIAssistant from "./AIAssistant";
import Progress from "./Progress";
import Settings from "./Settings";
import { AppSidebar } from "./AppSidebar";

const MainApp = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

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
        <AppSidebar onNavigate={setActiveSection} />
      </div>
      {renderContent()}
    </DashboardLayout>
  );
};

export default MainApp;
