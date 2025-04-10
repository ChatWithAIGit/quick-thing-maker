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
  Moon
} from "lucide-react";
import { Extension } from "@/types/extension";
import ExtensionsList from "@/components/ExtensionsList";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "@/providers/ThemeProvider";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [extensions, setExtensions] = useState<Extension[]>([
    {
      id: "1",
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries.",
      icon: Layout,
      iconColor: "#388e3c",
      isActive: true,
    },
    {
      id: "2",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      icon: Code,
      iconColor: "#1976d2",
      isActive: true,
    },
    {
      id: "3",
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to accelerate page loading.",
      icon: Zap,
      iconColor: "#ff9800",
      isActive: false,
    },
    {
      id: "4",
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser.",
      icon: Braces,
      iconColor: "#e91e63",
      isActive: true,
    },
    {
      id: "5",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      icon: Layers,
      iconColor: "#9c27b0",
      isActive: true,
    },
    {
      id: "6",
      name: "ViewportBuddy",
      description: "Simulates various screen resolutions directly within the browser.",
      icon: Smartphone,
      iconColor: "#29b6f6",
      isActive: false,
    },
    {
      id: "7",
      name: "Markup Notes",
      description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      icon: FileEdit,
      iconColor: "#5e35b1",
      isActive: true,
    },
    {
      id: "8",
      name: "GridGuides",
      description: "Overlay customizable grids and alignment guides on any webpage.",
      icon: Grid,
      iconColor: "#3949ab",
      isActive: false,
    },
    {
      id: "9",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      icon: Palette,
      iconColor: "#43a047",
      isActive: true,
    },
    {
      id: "10",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      icon: Link2,
      iconColor: "#ff7043",
      isActive: true,
    },
    {
      id: "11",
      name: "DOM Snapshot",
      description: "Capture and inspect DOM structures quickly.",
      icon: FileCode,
      iconColor: "#00acc1",
      isActive: false,
    },
    {
      id: "12",
      name: "ConsolePlus",
      description: "Enhanced developer console with advanced filtering and logging.",
      icon: Terminal,
      iconColor: "#4caf50",
      isActive: true,
    },
  ]);

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
      setExtensions(extensions.filter((ext) => ext.id !== id));
      toast({
        title: `${extension.name} removed`,
        description: "The extension has been removed from your browser.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-lighter dark:bg-darker transition-colors duration-300">
      <div className="container py-6 px-4">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-500 rounded-md flex items-center justify-center">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v1a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-1a6 6 0 0 1 6-6h10Z"></path>
                  <path d="M7 8v6"></path>
                  <path d="M16 8v6"></path>
                  <path d="M12 8v6"></path>
                </svg>
              </div>
            </div>
            <h1 className="text-slate-800 dark:text-white text-xl font-semibold">Extensions</h1>
          </div>
          <button 
            className="w-7 h-7 text-slate-800 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center transition-colors duration-300"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-8 mb-2">Extensions List</h2>
        
        <ExtensionsList 
          extensions={extensions} 
          onToggle={handleToggle} 
          onRemove={handleRemove} 
        />
      </div>
    </div>
  );
};

export default Index;
