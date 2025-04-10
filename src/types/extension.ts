
import { LucideIcon } from "lucide-react";

export interface Extension {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  isActive: boolean;
  category?: string;
  version?: string;
  lastUpdated?: string;
  author?: string;
  website?: string;
  tags?: string[];
  permissions?: string[];
  size?: string;
  rating?: number;
}
