
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionIconProps {
  icon: LucideIcon;
  color: string;
  size?: number;
  className?: string;
}

const ExtensionIcon = ({ 
  icon: Icon, 
  color, 
  size = 20, 
  className 
}: ExtensionIconProps) => {
  return (
    <div
      className={cn(
        "rounded-md flex items-center justify-center p-1.5",
        className
      )}
      style={{ backgroundColor: `${color}20` }}
    >
      {/* Make sure Icon is properly rendered as a React component */}
      <Icon size={size} color={color} strokeWidth={2} />
    </div>
  );
};

export default ExtensionIcon;
