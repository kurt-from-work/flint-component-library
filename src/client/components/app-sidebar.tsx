"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  MousePointerClick,
  FormInput,
  PanelTop,
  MessageSquare,
  Layers,
  Table2,
  Navigation,
  Type,
  Palette,
  Sun,
  Moon,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Buttons & Toggle", href: "/buttons", icon: MousePointerClick },
  { label: "Inputs & Forms", href: "/inputs", icon: FormInput },
  { label: "Cards & Containers", href: "/cards", icon: PanelTop },
  { label: "Feedback & Overlays", href: "/feedback", icon: MessageSquare },
  { label: "Layout & Navigation", href: "/layout", icon: Navigation },
  { label: "Data Display", href: "/data-display", icon: Table2 },
  { label: "Typography & Misc", href: "/typography", icon: Type },
  { label: "Surfaces & Layers", href: "/surfaces", icon: Layers },
  { label: "Theme", href: "/theme", icon: Palette },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <aside className="w-60 min-w-60 border-r border-border bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="p-4 pb-2">
        <h1 className="text-sm font-bold text-sidebar-foreground">Flint</h1>
        <p className="text-[10px] text-muted-foreground">Component Library</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Separator />
      <div className="p-3">
        {mounted && (
          <div className="flex items-center justify-between">
            <Label
              htmlFor="dark-mode"
              className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer"
            >
              {isDark ? <Moon size={14} /> : <Sun size={14} />}
              {isDark ? "Dark" : "Light"} mode
            </Label>
            <Switch
              id="dark-mode"
              checked={isDark}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
              aria-label="Toggle dark mode"
            />
          </div>
        )}
      </div>
    </aside>
  );
}
