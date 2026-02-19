"use client";

import { AppSidebar } from "./app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <ScrollArea className="flex-1 h-screen">
        <main className="max-w-5xl mx-auto p-8">
          {children}
        </main>
      </ScrollArea>
    </div>
  );
}
