
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionIconProps {
  icon: LucideIcon;
  color: string;
  size?: number;
  className?: string;
}

const ExtensionIcon: React.FC<ExtensionIconProps> = ({
  icon: Icon,
  color,
  size = 20,
  className,
}) => {
  if (!Icon) return null;

  return (
    <div
      className={cn(
        "rounded-md flex items-center justify-center p-1.5",
        className
      )}
      style={{
        backgroundColor: `${color}20`, // adds transparency, e.g., #FC440F20
      }}
    >
      {React.createElement(Icon, { size, color, strokeWidth: 2 })}
    </div>
  );
};

export default ExtensionIcon;
