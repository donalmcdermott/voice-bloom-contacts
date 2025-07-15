import { useState } from "react";
import { MicButton } from "@/components/MicButton";

export function MicScreen() {
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Here you would integrate with actual voice recording logic
    if (!isRecording) {
      console.log("Started recording...");
    } else {
      console.log("Stopped recording...");
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-subtle p-8 pb-24">
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center space-y-8">
        {/* Status indicator */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            {isRecording ? "Recording..." : "Voice Contacts"}
          </h1>
          <p className="text-muted-foreground">
            {isRecording 
              ? "Speak clearly to record your voice note"
              : "Tap the microphone to start recording"
            }
          </p>
        </div>

        {/* Mic button */}
        <MicButton 
          isRecording={isRecording} 
          onToggleRecording={handleToggleRecording} 
        />

        {/* Recording duration */}
        {isRecording && (
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/80 rounded-full border border-border/50">
              <div className="w-2 h-2 bg-mic-recording rounded-full animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">
                00:05
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}