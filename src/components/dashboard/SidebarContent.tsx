
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Mail,
  Settings,
  Gift,
  CreditCard,
  RefreshCcw,
  Headphones,
  Crown,
  Users,
  LogOut,
} from "lucide-react";
import { MenuItem } from "./MenuItem";

export interface SidebarContentProps {
  activeMenu: string;
  setActiveMenu: (id: string) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export const SidebarContent = ({ activeMenu, setActiveMenu, onLogout, isLoggedIn }: SidebarContentProps) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", id: "dashboard", count: 0 },
    { icon: Mail, label: "Inbox", id: "inbox", count: 2 },
    { icon: Gift, label: "Bonuses", id: "bonuses", count: 0 },
    { icon: CreditCard, label: "Payout", id: "payout", count: 0 },
    { icon: RefreshCcw, label: "Internal Transfer", id: "transfer", count: 0 },
    { icon: Headphones, label: "Support", id: "support", count: 0 },
    { icon: Crown, label: "Upgrade", id: "upgrade", count: 0 },
    { icon: Users, label: "Top Members", id: "members", count: 0 },
    { icon: Settings, label: "Settings", id: "settings", count: 0 },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              {...item}
              isActive={activeMenu === item.id}
              onClick={setActiveMenu}
            />
          ))}
        </nav>
      </div>
      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign out
        </Button>
      </div>
    </div>
  );
};
