import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface MicButtonProps {
  isRecording: boolean;
  onToggleRecording: () => void;
}

export function MicButton({ isRecording, onToggleRecording }: MicButtonProps) {
  const [showRipple, setShowRipple] = useState(false);

  const handleClick = () => {
    setShowRipple(true);
    onToggleRecording();
    setTimeout(() => setShowRipple(false), 1000);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Ripple effect */}
      {showRipple && (
        <div
          className={cn(
            "absolute inset-0 rounded-full border-2 animate-ripple",
            isRecording ? "border-mic-recording/50" : "border-mic-glow/50"
          )}
        />
      )}
      
      {/* Recording pulse ring */}
      {isRecording && (
        <div className="absolute inset-0 rounded-full border-2 border-mic-recording/30 animate-mic-pulse" />
      )}
      
      {/* Main button */}
      <button
        onClick={handleClick}
        className={cn(
          "relative w-24 h-24 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30",
          isRecording
            ? "bg-mic-recording shadow-glow scale-110 animate-mic-pulse"
            : "bg-gradient-primary shadow-card hover:shadow-glow hover:scale-105"
        )}
      >
        {isRecording ? (
          <MicOff className="w-10 h-10 text-white mx-auto" />
        ) : (
          <Mic className="w-10 h-10 text-white mx-auto" />
        )}
      </button>
      
      {/* Status text */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-muted-foreground font-medium">
          {isRecording ? "Tap to stop" : "Tap to record"}
        </p>
      </div>
    </div>
  );
}