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
  Menu,
  X,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navItems = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Colors", href: "/theme", icon: Palette },
  { label: "Buttons & Toggle", href: "/buttons", icon: MousePointerClick },
  { label: "Inputs & Forms", href: "/inputs", icon: FormInput },
  { label: "Cards & Containers", href: "/cards", icon: PanelTop },
  { label: "Feedback & Overlays", href: "/feedback", icon: MessageSquare },
  { label: "Layout & Navigation", href: "/layout", icon: Navigation },
  { label: "Data Display", href: "/data-display", icon: Table2 },
  { label: "Typography & Misc", href: "/typography", icon: Type },
  { label: "Surfaces & Layers", href: "/surfaces", icon: Layers },
];

function SidebarContent({
  onNavClick,
}: {
  onNavClick?: () => void;
}) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      <div className="p-4 pb-2">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/flint-logo-no-container.png`} alt="Flint logo" width={18} height={18} className="w-[18px] h-[18px]" />
          <h1 className="text-[18px] font-bold text-sidebar-foreground tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Flint
          </h1>
        </div>
        <p className="text-[10px] text-sidebar-foreground/60 ml-[26px]">Component Library</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Separator className="bg-sidebar-border" />
      <div className="p-3">
        {mounted && (
          <div className="flex items-center justify-between">
            <Label
              htmlFor="dark-mode"
              className="flex items-center gap-2 text-xs text-sidebar-foreground/70 cursor-pointer"
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
              className="data-[state=unchecked]:bg-brand-brown"
            />
          </div>
        )}
      </div>
    </>
  );
}

export function MobileHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="md:hidden sticky top-0 z-40 flex items-center gap-3 border-b border-sidebar-border bg-sidebar px-4 py-3">
      <button
        onClick={onMenuClick}
        className="text-sidebar-foreground"
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}/flint-logo-no-container.png`} alt="Flint logo" width={16} height={16} className="w-4 h-4" />
      <span className="text-sm font-bold text-sidebar-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Flint
      </span>
    </header>
  );
}

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-2">
          <button
            onClick={onClose}
            className="text-sidebar-foreground/70 hover:text-sidebar-foreground p-1"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>
        <SidebarContent onNavClick={onClose} />
      </aside>
    </>
  );
}

export function AppSidebar() {
  return (
    <aside className="hidden md:flex w-60 min-w-60 border-r border-sidebar-border bg-sidebar h-screen sticky top-0 flex-col">
      <SidebarContent />
    </aside>
  );
}
