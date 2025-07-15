import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { MicScreen } from "./MicScreen";
import { ContactsScreen } from "./ContactsScreen";
import { SettingsScreen } from "./SettingsScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mic");

  const renderScreen = () => {
    switch (activeTab) {
      case "contacts":
        return <ContactsScreen />;
      case "mic":
        return <MicScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <MicScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto">
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
