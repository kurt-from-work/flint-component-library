"use client";

import { useState } from "react";
import { AppSidebar, MobileHeader, MobileDrawer } from "./app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <AppSidebar />

      {/* Mobile header + drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className="flex-1 flex flex-col md:h-screen">
        <MobileHeader onMenuClick={() => setDrawerOpen(true)} />
        <ScrollArea className="flex-1 md:h-screen">
          <main className="max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:p-8">
            {children}
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
