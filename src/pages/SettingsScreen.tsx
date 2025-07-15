import { useState } from "react";
import { Download, Moon, Trash2 } from "lucide-react";
import { SettingItem } from "@/components/SettingItem";
import { useToast } from "@/hooks/use-toast";

export function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const { toast } = useToast();

  const handleImportContacts = () => {
    toast({
      title: "Import Started",
      description: "Importing contacts from Google...",
    });
    
    // Here you would integrate with Google Contacts API
    setTimeout(() => {
      toast({
        title: "Import Complete",
        description: "Successfully imported 23 contacts",
      });
    }, 2000);
  };

  const handleDarkModeToggle = (enabled: boolean) => {
    setDarkMode(enabled);
    toast({
      title: enabled ? "Dark Mode Enabled" : "Light Mode Enabled",
      description: "Theme preference updated",
    });
    
    // Here you would persist the theme preference
  };

  const handleClearContacts = () => {
    toast({
      title: "Contacts Cleared",
      description: "All contacts have been removed",
      variant: "destructive",
    });
    
    // Here you would clear all contacts from storage
  };

  return (
    <div className="flex-1 bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4">
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
      </div>

      {/* Settings list */}
      <div className="p-4 space-y-4">
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Account</h2>
          
          <SettingItem
            icon={<Download className="w-5 h-5" />}
            title="Import Contacts"
            type="button"
            onClick={handleImportContacts}
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Appearance</h2>
          
          <SettingItem
            icon={<Moon className="w-5 h-5" />}
            title="Dark Mode"
            description="Use dark theme throughout the app"
            type="toggle"
            value={darkMode}
            onToggle={handleDarkModeToggle}
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium text-foreground">Data</h2>
          
          <SettingItem
            icon={<Trash2 className="w-5 h-5" />}
            title="Clear All Contacts"
            type="destructive"
            onClick={handleClearContacts}
          />
        </div>

        {/* App info */}
        <div className="pt-8 pb-4 border-t border-border/50">
          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground">Voice Contacts</p>
            <p className="text-xs text-muted-foreground">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}