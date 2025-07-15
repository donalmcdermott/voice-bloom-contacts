import { ReactNode } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SettingItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
  type: "toggle" | "button" | "destructive";
  value?: boolean;
  onToggle?: (value: boolean) => void;
  onClick?: () => void;
  disabled?: boolean;
}

export function SettingItem({
  icon,
  title,
  description,
  type,
  value,
  onToggle,
  onClick,
  disabled = false,
}: SettingItemProps) {
  const renderControl = () => {
    switch (type) {
      case "toggle":
        return (
          <Switch
            checked={value}
            onCheckedChange={onToggle}
            disabled={disabled}
          />
        );
      case "button":
        return (
          <Button
            variant="outline"
            size="sm"
            onClick={onClick}
            disabled={disabled}
            className="bg-primary/10 border-primary/20 hover:bg-primary/20"
          >
            {title}
          </Button>
        );
      case "destructive":
        return (
          <Button
            variant="destructive"
            size="sm"
            onClick={onClick}
            disabled={disabled}
            className="bg-destructive/20 border-destructive/40 hover:bg-destructive/30 text-destructive"
          >
            {title}
          </Button>
        );
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50",
        type !== "toggle" && "hover:bg-secondary/30 transition-colors duration-200"
      )}
    >
      <div className="text-muted-foreground">{icon}</div>
      
      <div className="flex-1 min-w-0">
        {type === "toggle" && (
          <>
            <h3 className="font-medium text-foreground">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </>
        )}
      </div>
      
      <div className="flex-shrink-0">{renderControl()}</div>
    </div>
  );
}