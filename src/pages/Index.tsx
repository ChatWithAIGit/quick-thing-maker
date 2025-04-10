import React, { useState } from "react";
import { 
  Code, 
  Palette, 
  Layout, 
  Zap, 
  Braces, 
  Layers, 
  Smartphone, 
  FileEdit, 
  Grid, 
  Droplets, 
  Link2, 
  FileCode, 
  Terminal,
  Sun,
  Moon,
  History,
  SearchIcon,
  Filter,
  Command,
  Shield,
  Cpu,
  Download,
  Clock
} from "lucide-react";
import { Extension } from "@/types/extension";
import ExtensionsList from "@/components/ExtensionsList";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "@/providers/ThemeProvider";
import RemovedExtensionsList from "@/components/RemovedExtensionsList";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null);
  const [extensions, setExtensions] = useState<Extension[]>([
    {
      id: "1",
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries.",
      icon: Layout,
      iconColor: "#388e3c",
      isActive: true,
      category: "Development",
      version: "1.2.0",
      lastUpdated: "2 weeks ago",
      author: "DevTools Inc.",
      website: "https://example.com/devlens",
      permissions: ["activeTab", "storage"],
      tags: ["inspection", "layout"],
      size: "1.2MB",
      rating: 4.7
    },
    {
      id: "2",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      icon: Code,
      iconColor: "#1976d2",
      isActive: true,
      category: "Design",
      version: "2.0.3",
      lastUpdated: "3 days ago",
      author: "Web Design Tools",
      website: "https://example.com/stylespy",
      permissions: ["activeTab", "clipboard"],
      tags: ["css", "design"],
      size: "0.8MB",
      rating: 4.9
    },
    {
      id: "3",
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to accelerate page loading.",
      icon: Zap,
      iconColor: "#ff9800",
      isActive: false,
      category: "Performance",
      version: "3.1.5",
      lastUpdated: "1 month ago",
      author: "Performance Labs",
      website: "https://example.com/speedboost",
      permissions: ["webRequest", "webRequestBlocking"],
      tags: ["performance", "optimization"],
      size: "2.4MB",
      rating: 4.2
    },
    {
      id: "4",
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser.",
      icon: Braces,
      iconColor: "#e91e63",
      isActive: true,
      category: "Development",
      version: "1.1.2",
      lastUpdated: "1 week ago",
      author: "JSON Tools",
      website: "https://example.com/jsonwizard",
      permissions: ["activeTab", "storage"],
      tags: ["json", "formatting"],
      size: "0.5MB",
      rating: 4.6
    },
    {
      id: "5",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      icon: Layers,
      iconColor: "#9c27b0",
      isActive: true,
      category: "Productivity",
      version: "2.3.1",
      lastUpdated: "2 months ago",
      author: "Tab Management",
      website: "https://example.com/tabmasterpro",
      permissions: ["activeTab", "storage"],
      tags: ["tabs", "organization"],
      size: "0.7MB",
      rating: 4.5
    },
    {
      id: "6",
      name: "ViewportBuddy",
      description: "Simulates various screen resolutions directly within the browser.",
      icon: Smartphone,
      iconColor: "#29b6f6",
      isActive: false,
      category: "Development",
      version: "1.0.4",
      lastUpdated: "1 month ago",
      author: "Viewport Tools",
      website: "https://example.com/viewportbuddy",
      permissions: ["activeTab", "storage"],
      tags: ["viewport", "simulator"],
      size: "0.3MB",
      rating: 4.3
    },
    {
      id: "7",
      name: "Markup Notes",
      description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      icon: FileEdit,
      iconColor: "#5e35b1",
      isActive: true,
      category: "Development",
      version: "1.2.1",
      lastUpdated: "2 weeks ago",
      author: "Markup Tools",
      website: "https://example.com/markupnotes",
      permissions: ["activeTab", "storage"],
      tags: ["annotation", "notes"],
      size: "0.6MB",
      rating: 4.8
    },
    {
      id: "8",
      name: "GridGuides",
      description: "Overlay customizable grids and alignment guides on any webpage.",
      icon: Grid,
      iconColor: "#3949ab",
      isActive: false,
      category: "Design",
      version: "1.1.0",
      lastUpdated: "1 week ago",
      author: "Grid Tools",
      website: "https://example.com/gridguides",
      permissions: ["activeTab", "storage"],
      tags: ["grid", "alignment"],
      size: "0.4MB",
      rating: 4.4
    },
    {
      id: "9",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      icon: Palette,
      iconColor: "#43a047",
      isActive: true,
      category: "Design",
      version: "1.0.5",
      lastUpdated: "2 weeks ago",
      author: "Palette Tools",
      website: "https://example.com/palettepicker",
      permissions: ["activeTab", "storage"],
      tags: ["color", "palette"],
      size: "0.2MB",
      rating: 4.7
    },
    {
      id: "10",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      icon: Link2,
      iconColor: "#ff7043",
      isActive: true,
      category: "Development",
      version: "1.1.3",
      lastUpdated: "1 month ago",
      author: "Link Tools",
      website: "https://example.com/linkchecker",
      permissions: ["activeTab", "storage"],
      tags: ["link", "check"],
      size: "0.3MB",
      rating: 4.6
    },
    {
      id: "11",
      name: "DOM Snapshot",
      description: "Capture and inspect DOM structures quickly.",
      icon: FileCode,
      iconColor: "#00acc1",
      isActive: false,
      category: "Development",
      version: "1.0.2",
      lastUpdated: "1 week ago",
      author: "DOM Tools",
      website: "https://example.com/domsnapshot",
      permissions: ["activeTab", "storage"],
      tags: ["dom", "snapshot"],
      size: "0.1MB",
      rating: 4.5
    },
    {
      id: "12",
      name: "ConsolePlus",
      description: "Enhanced developer console with advanced filtering and logging.",
      icon: Terminal,
      iconColor: "#4caf50",
      isActive: true,
      category: "Development",
      version: "1.1.1",
      lastUpdated: "2 weeks ago",
      author: "Console Tools",
      website: "https://example.com/consoleplus",
      permissions: ["activeTab", "storage"],
      tags: ["console", "logging"],
      size: "0.4MB",
      rating: 4.7
    },
  ]);
  
  const [removedExtensions, setRemovedExtensions] = useState<Extension[]>([]);

  const handleToggle = (id: string, active: boolean) => {
    setExtensions(
      extensions.map((ext) =>
        ext.id === id ? { ...ext, isActive: active } : ext
      )
    );
    
    const extension = extensions.find((ext) => ext.id === id);
    if (extension) {
      toast({
        title: `${extension.name} ${active ? "activated" : "deactivated"}`,
        description: active 
          ? "The extension is now enabled and running."
          : "The extension has been disabled.",
      });
    }
  };

  const handleRemove = (id: string) => {
    const extension = extensions.find((ext) => ext.id === id);
    if (extension) {
      // Add to removed extensions history
      setRemovedExtensions([...removedExtensions, extension]);
      
      // Remove from active extensions
      setExtensions(extensions.filter((ext) => ext.id !== id));
      
      toast({
        title: `${extension.name} removed`,
        description: "The extension has been moved to your removal history.",
      });
    }
  };

  const handleRestore = (id: string) => {
    const extension = removedExtensions.find((ext) => ext.id === id);
    if (extension) {
      // Add back to active extensions
      setExtensions([...extensions, extension]);
      
      // Remove from removed extensions history
      setRemovedExtensions(removedExtensions.filter((ext) => ext.id !== id));
      
      toast({
        title: `${extension.name} restored`,
        description: "The extension has been added back to your active list.",
      });
    }
  };
  
  const handleShowDetails = (id: string) => {
    const extension = extensions.find((ext) => ext.id === id);
    if (extension) {
      setSelectedExtension(extension);
    }
  };

  return (
    <div className="min-h-screen bg-lighter dark:bg-darker transition-colors duration-300">
      <div className="container py-8 px-4 mx-auto max-w-7xl">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v1a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-1a6 6 0 0 1 6-6h10Z"></path>
                  <path d="M7 8v6"></path>
                  <path d="M16 8v6"></path>
                  <path d="M12 8v6"></path>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-slate-800 dark:text-white text-2xl font-bold">Extensions</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your browser extensions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 text-xs"
              onClick={() => {
                toast({
                  title: "Extensions checked",
                  description: "All your extensions are up to date!",
                });
              }}
            >
              <Clock size={14} />
              Check for updates
            </Button>
            <button 
              className="w-9 h-9 text-slate-800 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center transition-colors duration-300"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4 mb-2">Extensions List</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">Manage your installed browser extensions</p>
            <ExtensionsList 
              extensions={extensions} 
              onToggle={handleToggle} 
              onRemove={handleRemove}
              onShowDetails={handleShowDetails}
            />
          </div>
          
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4 mb-2 flex items-center gap-2">
              <History size={20} />
              Removal History
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">Extensions you've previously removed</p>
            <RemovedExtensionsList 
              removedExtensions={removedExtensions} 
              onRestore={handleRestore} 
            />

            <div className="mt-8 bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                <Shield size={18} />
                Extension Health
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Status of your installed extensions</p>
              
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-900 rounded-md p-3 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-green-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">CPU Usage</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">Low</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-900 rounded-md p-3 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download size={16} className="text-blue-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">Memory Usage</span>
                    </div>
                    <span className="text-sm font-medium text-blue-500">12.4 MB</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-900 rounded-md p-3 border border-slate-200 dark:border-slate-800">
                  <Collapsible>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Command size={16} className="text-purple-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Permissions</span>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <ChevronDown className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent className="mt-2 space-y-1">
                      <div className="flex flex-wrap gap-1 pl-6">
                        <Badge variant="outline" className="text-xs">storage</Badge>
                        <Badge variant="outline" className="text-xs">activeTab</Badge>
                        <Badge variant="outline" className="text-xs">cookies</Badge>
                        <Badge variant="outline" className="text-xs">webRequest</Badge>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Extension Details Sheet */}
      <Sheet open={!!selectedExtension} onOpenChange={(open) => !open && setSelectedExtension(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Extension Details</SheetTitle>
            <SheetDescription>
              View detailed information about this extension
            </SheetDescription>
          </SheetHeader>
          
          {selectedExtension && (
            <div className="py-6">
              <div className="flex items-start gap-3 mb-6">
                <ExtensionIcon icon={selectedExtension.icon} color={selectedExtension.iconColor} size={28} />
                <div>
                  <h3 className="text-xl font-medium text-slate-800 dark:text-white">{selectedExtension.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {selectedExtension.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-1">General Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Version</span>
                      <span className="text-slate-800 dark:text-white">{selectedExtension.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Category</span>
                      <span className="text-slate-800 dark:text-white">{selectedExtension.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Author</span>
                      <span className="text-slate-800 dark:text-white">{selectedExtension.author}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Size</span>
                      <span className="text-slate-800 dark:text-white">{selectedExtension.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Last Updated</span>
                      <span className="text-slate-800 dark:text-white">{selectedExtension.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-1">Permissions</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedExtension.permissions?.map((permission, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-1">Tags</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedExtension.tags?.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setSelectedExtension(null);
                      if (selectedExtension.website) {
                        window.open(selectedExtension.website, '_blank');
                      }
                    }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;
