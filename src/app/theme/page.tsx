"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";

const colors = [
  { name: "Background", var: "background", fg: "foreground" },
  { name: "Card", var: "card", fg: "card-foreground" },
  { name: "Popover", var: "popover", fg: "popover-foreground" },
  { name: "Primary", var: "primary", fg: "primary-foreground" },
  { name: "Secondary", var: "secondary", fg: "secondary-foreground" },
  { name: "Muted", var: "muted", fg: "muted-foreground" },
  { name: "Accent", var: "accent", fg: "accent-foreground" },
  { name: "Destructive", var: "destructive", fg: "destructive" },
];

const semanticColors = [
  { name: "Border", var: "border" },
  { name: "Input", var: "input" },
  { name: "Ring", var: "ring" },
];

const chartColors = [
  { name: "Chart 1", var: "chart-1" },
  { name: "Chart 2", var: "chart-2" },
  { name: "Chart 3", var: "chart-3" },
  { name: "Chart 4", var: "chart-4" },
  { name: "Chart 5", var: "chart-5" },
];

const sidebarColors = [
  { name: "Sidebar", var: "sidebar" },
  { name: "Sidebar Foreground", var: "sidebar-foreground" },
  { name: "Sidebar Primary", var: "sidebar-primary" },
  { name: "Sidebar Accent", var: "sidebar-accent" },
  { name: "Sidebar Border", var: "sidebar-border" },
];

function ColorSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 rounded-md border border-border shrink-0"
        style={{ backgroundColor: `var(--${cssVar})` }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">--{cssVar}</p>
      </div>
    </div>
  );
}

function PairedSwatch({ name, bg, fg }: { name: string; bg: string; fg: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-20 rounded-md border border-border shrink-0 flex items-center justify-center text-xs font-medium"
        style={{
          backgroundColor: `var(--${bg})`,
          color: `var(--${fg})`,
        }}
      >
        Aa
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">--{bg}</p>
      </div>
    </div>
  );
}

export default function ThemePage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Theme</h1>
      <p className="text-muted-foreground mb-8">
        All CSS custom properties defined by the shadcn/ui theme.
      </p>

      <ShowcaseSection title="Core Colors" description="Background/foreground pairs used across the UI.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colors.map((c) => (
            <PairedSwatch key={c.var} name={c.name} bg={c.var} fg={c.fg} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Semantic Colors" description="Border, input, and focus ring colors.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticColors.map((c) => (
            <ColorSwatch key={c.var} name={c.name} cssVar={c.var} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Chart Colors" description="Colors used in data visualization.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chartColors.map((c) => (
            <ColorSwatch key={c.var} name={c.name} cssVar={c.var} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sidebar Colors" description="Colors for the sidebar navigation.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sidebarColors.map((c) => (
            <ColorSwatch key={c.var} name={c.name} cssVar={c.var} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Radius" description="Border radius tokens.">
        <div className="flex flex-wrap gap-4">
          {["sm", "md", "lg", "xl", "2xl"].map((size) => (
            <div key={size} className="text-center">
              <div
                className={`h-16 w-16 bg-primary rounded-${size} mb-2`}
              />
              <p className="text-xs text-muted-foreground font-mono">
                radius-{size}
              </p>
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
