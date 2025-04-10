
import React from "react";
import { Extension } from "@/types/extension";
import { Button } from "@/components/ui/button";
import ExtensionIcon from "./ExtensionIcon";
import { RotateCcw, ArrowUpDown, Clock } from "lucide-react";

interface RemovedExtensionsListProps {
  removedExtensions: Extension[];
  onRestore: (id: string) => void;
}

const RemovedExtensionsList = ({ 
  removedExtensions,
  onRestore
}: RemovedExtensionsListProps) => {
  const [sortByNewest, setSortByNewest] = React.useState(true);
  
  const sortedExtensions = React.useMemo(() => {
    return [...removedExtensions].sort((a, b) => {
      if (sortByNewest) {
        return parseInt(b.id) - parseInt(a.id); // Assuming higher id means newer
      } else {
        return parseInt(a.id) - parseInt(b.id); // Assuming lower id means older
      }
    });
  }, [removedExtensions, sortByNewest]);

  if (removedExtensions.length === 0) {
    return (
      <div className="rounded-lg p-6 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
        <Clock className="w-12 h-12 mx-auto text-slate-400 dark:text-slate-600 mb-3" />
        <p className="text-slate-600 dark:text-slate-400">No removed extensions</p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Extensions you remove will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {removedExtensions.length} extension{removedExtensions.length !== 1 ? 's' : ''} removed
        </p>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs flex items-center gap-1"
          onClick={() => setSortByNewest(!sortByNewest)}
        >
          <ArrowUpDown size={14} />
          {sortByNewest ? 'Newest first' : 'Oldest first'}
        </Button>
      </div>
      
      <div className="space-y-3">
        {sortedExtensions.map((extension) => (
          <div 
            key={extension.id} 
            className="rounded-lg p-3 flex items-center gap-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-sm transition-all duration-200"
          >
            <ExtensionIcon icon={extension.icon} color={extension.iconColor} size={16} />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-slate-800 dark:text-white truncate">{extension.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{extension.description}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-xs flex items-center gap-1 shrink-0"
              onClick={() => onRestore(extension.id)}
            >
              <RotateCcw size={14} />
              Restore
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemovedExtensionsList;
