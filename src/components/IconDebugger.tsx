
import React from "react";
import { LucideIcon, AlertCircle } from "lucide-react";

interface IconDebuggerProps {
  icon: LucideIcon;
}

const IconDebugger: React.FC<IconDebuggerProps> = ({ icon }) => {
  console.log("Icon received:", icon);
  console.log("Icon type:", typeof icon);
  
  // Safe fallback if icon is not a valid component
  const IconComponent = typeof icon === 'function' ? icon : AlertCircle;
  
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h3 className="text-lg font-bold mb-2">Icon Debugger</h3>
      <div className="flex items-center gap-2">
        <IconComponent size={24} />
        <span>Icon type: {typeof icon}</span>
      </div>
    </div>
  );
};

export default IconDebugger;
