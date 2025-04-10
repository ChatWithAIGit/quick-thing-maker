
import React from "react";
import { Extension } from "@/types/extension";
import { Button } from "@/components/ui/button";
import ExtensionIcon from "./ExtensionIcon";
import { RotateCcw } from "lucide-react";

interface RemovedExtensionsListProps {
  removedExtensions: Extension[];
  onRestore: (id: string) => void;
}

const RemovedExtensionsList = ({ 
  removedExtensions,
  onRestore
}: RemovedExtensionsListProps) => {
  if (removedExtensions.length === 0) {
    return (
      <div className="rounded-lg p-4 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
        <p className="text-slate-600 dark:text-slate-400">No removed extensions</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {removedExtensions.map((extension) => (
        <div 
          key={extension.id} 
          className="rounded-lg p-3 flex items-center gap-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <ExtensionIcon icon={extension.icon} color={extension.iconColor} size={16} />
          <div className="flex-1">
            <h4 className="font-medium text-sm text-slate-800 dark:text-white">{extension.name}</h4>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs flex items-center gap-1"
            onClick={() => onRestore(extension.id)}
          >
            <RotateCcw size={14} />
            Restore
          </Button>
        </div>
      ))}
    </div>
  );
};

export default RemovedExtensionsList;
