
import React from "react";
import { LucideIcon } from "lucide-react";

interface ExtensionIconProps {
  icon: LucideIcon;
  color: string;
  size?: number;
}

const ExtensionIcon = ({ icon: Icon, color, size = 20 }: ExtensionIconProps) => {
  return (
    <div
      className="rounded-md flex items-center justify-center p-1"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon size={size} color={color} />
    </div>
  );
};

export default ExtensionIcon;
