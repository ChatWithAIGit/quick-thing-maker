
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ExtensionIcon from "./ExtensionIcon";
import { LucideIcon, Info, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ExtensionCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  isActive: boolean;
  onToggle: (active: boolean) => void;
  onRemove: () => void;
  category?: string;
  version?: string;
  lastUpdated?: string;
  author?: string;
  website?: string;
  showDetails?: () => void;
}

const ExtensionCard = ({
  name,
  description,
  icon,
  iconColor,
  isActive,
  onToggle,
  onRemove,
  category = "Utility",
  version = "1.0.0",
  lastUpdated,
  author = "Developer",
  website,
  showDetails,
}: ExtensionCardProps) => {
  return (
    <div className="card-container rounded-lg p-5 flex flex-col gap-4 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-900">
      <div className="flex items-start gap-3">
        <ExtensionIcon icon={icon} color={iconColor} size={24} />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium text-lg text-slate-800 dark:text-white">{name}</h3>
            <Badge variant="outline" className="text-xs px-2 py-0">
              {category}
            </Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5">{description}</p>
        </div>
      </div>
      
      <div className="text-xs flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 dark:text-slate-500 mt-1">
        <span className="flex items-center gap-1">
          <span className="font-medium">v{version}</span>
        </span>
        {lastUpdated && (
          <span className="flex items-center gap-1">
            <span>Updated: {lastUpdated}</span>
          </span>
        )}
        {author && (
          <span className="flex items-center gap-1">
            <span>By: {author}</span>
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-800 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800"
            onClick={onRemove}
          >
            Remove
          </Button>
          
          {showDetails && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-800 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800"
              onClick={showDetails}
            >
              <Info size={14} className="mr-1" />
              Details
            </Button>
          )}
          
          {website && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-800 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800"
                  onClick={() => window.open(website, '_blank')}
                >
                  <ExternalLink size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit website</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span className={`text-xs ${isActive ? 'text-green-500' : 'text-slate-500'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </span>
          <Switch checked={isActive} onCheckedChange={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
