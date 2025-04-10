
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionIconProps {
  icon: LucideIcon;
  color: string;
  className?: string;
}

const ExtensionIcon = ({ icon: Icon, color, className }: ExtensionIconProps) => {
  return (
    <div
      className={cn("extension-icon", className)}
      style={{ backgroundColor: color }}
    >
      <Icon size={20} />
    </div>
  );
};

export default ExtensionIcon;
