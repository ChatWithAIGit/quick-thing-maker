
import React, { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import FilterTabs from "./FilterTabs";
import { Extension } from "@/types/extension";

interface ExtensionsListProps {
  extensions: Extension[];
  onToggle: (id: string, active: boolean) => void;
  onRemove: (id: string) => void;
}

type FilterType = "all" | "active" | "inactive";

const ExtensionsList = ({ extensions, onToggle, onRemove }: ExtensionsListProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredExtensions = extensions.filter((extension) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return extension.isActive;
    if (activeFilter === "inactive") return !extension.isActive;
    return true;
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      <div className="space-y-3 mt-6">
        {filteredExtensions.map((extension) => (
          <ExtensionCard
            key={extension.id}
            name={extension.name}
            description={extension.description}
            icon={extension.icon}
            iconColor={extension.iconColor}
            isActive={extension.isActive}
            onToggle={(active) => onToggle(extension.id, active)}
            onRemove={() => onRemove(extension.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtensionsList;
