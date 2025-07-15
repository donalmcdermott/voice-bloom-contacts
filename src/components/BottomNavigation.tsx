import { Mic, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "contacts", label: "Contacts", icon: Users },
    { id: "mic", label: "Mic", icon: Mic },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around px-4 py-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isMic = tab.id === "mic";
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center transition-all duration-300 p-3",
                isMic && "relative -mt-6"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center rounded-full transition-all duration-300",
                  isMic ? (
                    isActive ? 
                      "w-16 h-16 bg-gradient-primary shadow-glow" : 
                      "w-14 h-14 bg-mic-primary shadow-lg"
                  ) : (
                    isActive ? 
                      "w-10 h-10 bg-primary/20" : 
                      "w-10 h-10"
                  )
                )}
              >
                <Icon
                  className={cn(
                    "transition-all duration-300",
                    isMic ? "w-8 h-8" : "w-5 h-5",
                    isActive ? "text-foreground" : "text-muted-foreground",
                    isMic && isActive && "text-primary-foreground"
                  )}
                />
              </div>
              {!isMic && (
                <span
                  className={cn(
                    "text-xs mt-1 transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {tab.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}