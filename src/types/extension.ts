
import { LucideIcon } from "lucide-react";

export interface Extension {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  isActive: boolean;
}
