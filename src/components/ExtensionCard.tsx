
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ExtensionIcon from "./ExtensionIcon";
import { LucideIcon } from "lucide-react";

interface ExtensionCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  isActive: boolean;
  onToggle: (active: boolean) => void;
  onRemove: () => void;
}

const ExtensionCard = ({
  name,
  description,
  icon,
  iconColor,
  isActive,
  onToggle,
  onRemove,
}: ExtensionCardProps) => {
  return (
    <div className="bg-dark-card rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <ExtensionIcon icon={icon} color={iconColor} />
        <div className="flex-1">
          <h3 className="font-medium text-white">{name}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={onRemove}
        >
          Remove
        </Button>
        <Switch checked={isActive} onCheckedChange={onToggle} />
      </div>
    </div>
  );
};

export default ExtensionCard;
