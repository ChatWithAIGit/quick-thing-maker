
import React, { useState, useEffect } from "react";
import ExtensionCard from "./ExtensionCard";
import FilterTabs from "./FilterTabs";
import { Extension } from "@/types/extension";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface ExtensionsListProps {
  extensions: Extension[];
  onToggle: (id: string, active: boolean) => void;
  onRemove: (id: string) => void;
  onShowDetails?: (id: string) => void;
}

type FilterType = "all" | "active" | "inactive";
type SortType = "name" | "newest" | "oldest" | "category";

const ExtensionsList = ({ 
  extensions, 
  onToggle, 
  onRemove,
  onShowDetails
}: ExtensionsListProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortType>("name");
  const [filteredExtensions, setFilteredExtensions] = useState<Extension[]>(extensions);

  useEffect(() => {
    // First filter by active status
    let result = extensions.filter((extension) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "active") return extension.isActive;
      if (activeFilter === "inactive") return !extension.isActive;
      return true;
    });

    // Then filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (extension) =>
          extension.name.toLowerCase().includes(query) ||
          extension.description.toLowerCase().includes(query)
      );
    }

    // Then sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return (a.category || "").localeCompare(b.category || "");
        case "newest":
          return parseInt(b.id) - parseInt(a.id); // Assuming higher id means newer
        case "oldest":
          return parseInt(a.id) - parseInt(b.id); // Assuming lower id means older
        default:
          return 0;
      }
    });

    setFilteredExtensions(result);
  }, [extensions, activeFilter, searchQuery, sortBy]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
        <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              type="text"
              placeholder="Search extensions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-2 text-sm"
            />
          </div>
          
          <div className="min-w-[150px]">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortType)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {filteredExtensions.length > 0 ? (
          filteredExtensions.map((extension) => (
            <ExtensionCard
              key={extension.id}
              name={extension.name}
              description={extension.description}
              icon={extension.icon}
              iconColor={extension.iconColor}
              isActive={extension.isActive}
              category={extension.category}
              version={extension.version}
              lastUpdated={extension.lastUpdated}
              author={extension.author}
              website={extension.website}
              onToggle={(active) => onToggle(extension.id, active)}
              onRemove={() => onRemove(extension.id)}
              showDetails={onShowDetails ? () => onShowDetails(extension.id) : undefined}
            />
          ))
        ) : (
          <div className="col-span-full py-8 text-center text-slate-500 dark:text-slate-400">
            No extensions found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtensionsList;
