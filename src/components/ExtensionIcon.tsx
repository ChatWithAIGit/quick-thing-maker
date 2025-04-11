
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // asigură-te că acest `cn` există sau înlocuiește-l cu clsx

interface ExtensionIconProps {
  icon: LucideIcon;
  color: string; // ex: "#FC440F" sau "red"
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
        backgroundColor: `${color}20`, // adaugă transparență, gen: #FC440F20
      }}
    >
      <Icon size={size} color={color} strokeWidth={2} />
    </div>
  );
};

export default ExtensionIcon;
