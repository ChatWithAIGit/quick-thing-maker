
import React from "react";
import { cn } from "@/lib/utils";

type FilterType = "all" | "active" | "inactive";

interface FilterTabsProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

const FilterTabs = ({ activeFilter, setActiveFilter }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-2 my-4">
      <button
        className={cn(
          "filter-button",
          activeFilter === "all" ? "active" : "inactive"
        )}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
      <button
        className={cn(
          "filter-button",
          activeFilter === "active" ? "active" : "inactive"
        )}
        onClick={() => setActiveFilter("active")}
      >
        Active
      </button>
      <button
        className={cn(
          "filter-button",
          activeFilter === "inactive" ? "active" : "inactive"
        )}
        onClick={() => setActiveFilter("inactive")}
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterTabs;
