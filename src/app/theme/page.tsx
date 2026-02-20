"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";

const brandColors = [
  { name: "Brand Orange", var: "brand-orange", hex: "#F05023" },
  { name: "Brand Cream", var: "brand-cream", hex: "#FAF0E1" },
  { name: "Brand White", var: "brand-white", hex: "#FFFFFF" },
  { name: "Brand Dark", var: "brand-dark", hex: "#160D0E" },
];

const uiCream = [
  { name: "Pale Cream", var: "brand-pale-cream", hex: "#FFF8EC" },
  { name: "Cream", var: "brand-cream", hex: "#FAF0E1" },
  { name: "Warm Cream", var: "warm-cream", hex: "#F2E5D3" },
  { name: "Dark Cream", var: "dark-cream", hex: "#EADECD" },
];

const uiBrown = [
  { name: "Brown", var: "brand-brown", hex: "#5C3330" },
  { name: "Dark Hover", var: "brand-dark-hover", hex: "#370D0E" },
  { name: "Deep Brown", var: "brand-deep-brown", hex: "#24100F" },
  { name: "Dark Accent", var: "dark-accent", hex: "#1E0A0A" },
];

const uiOrange = [
  { name: "Orange 100", var: "ui-orange-100", hex: "#FED7AA" },
  { name: "Orange Hover", var: "ui-orange-hover", hex: "#F05023" },
  { name: "Orange 500", var: "ui-orange", hex: "#D8441A" },
  { name: "Orange 900", var: "ui-orange-900", hex: "#7C2D12" },
];

const uiRed = [
  { name: "Red 100", var: "ui-red-100", hex: "#FECDD3" },
  { name: "Red Hover", var: "ui-red-hover", hex: "#E11D48" },
  { name: "Red 500", var: "ui-red", hex: "#BE123C" },
  { name: "Red 900", var: "ui-red-900", hex: "#881337" },
];

const uiBlue = [
  { name: "Blue 100", var: "ui-blue-100", hex: "#BAE6FD" },
  { name: "Blue Hover", var: "ui-blue-hover", hex: "#0EA5E9" },
  { name: "Blue 500", var: "ui-blue", hex: "#0369A1" },
  { name: "Blue 900", var: "ui-blue-900", hex: "#0C4A6E" },
];

const uiGreen = [
  { name: "Green 100", var: "ui-green-100", hex: "#D1FAE5" },
  { name: "Green Hover", var: "ui-green-hover", hex: "#10B981" },
  { name: "Green 500", var: "ui-green", hex: "#047857" },
  { name: "Green 900", var: "ui-green-900", hex: "#064E3B" },
];

const learningPastels = [
  { name: "Cream", var: "learning-cream", hex: "#F7EBDA" },
  { name: "Peach", var: "learning-peach", hex: "#F5CBA7" },
  { name: "Blue", var: "learning-blue", hex: "#DAE6F2" },
  { name: "Green", var: "learning-green", hex: "#C5E0B4" },
  { name: "Mauve", var: "learning-mauve", hex: "#D4A5B9" },
];

const semanticTokens = [
  { name: "Background", var: "background", fg: "foreground" },
  { name: "Card", var: "card", fg: "card-foreground" },
  { name: "Popover", var: "popover", fg: "popover-foreground" },
  { name: "Primary", var: "primary", fg: "primary-foreground" },
  { name: "Secondary", var: "secondary", fg: "secondary-foreground" },
  { name: "Muted", var: "muted", fg: "muted-foreground" },
  { name: "Accent", var: "accent", fg: "accent-foreground" },
  { name: "Destructive", var: "destructive", fg: "destructive-foreground" },
];

const sidebarColors = [
  { name: "Sidebar", var: "sidebar", fg: "sidebar-foreground" },
  { name: "Sidebar Primary", var: "sidebar-primary", fg: "sidebar-primary-foreground" },
  { name: "Sidebar Accent", var: "sidebar-accent", fg: "sidebar-accent-foreground" },
];

function ColorSwatch({ name, cssVar, hex }: { name: string; cssVar: string; hex: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 rounded-md border border-border shrink-0"
        style={{ backgroundColor: `var(--${cssVar})` }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{hex}</p>
      </div>
    </div>
  );
}

function ColorScaleRow({ colors: scaleColors, label }: { colors: typeof uiOrange; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex gap-1 rounded-lg overflow-hidden">
        {scaleColors.map((c) => (
          <div key={c.var} className="flex-1">
            <div
              className="h-12 w-full"
              style={{ backgroundColor: `var(--${c.var})` }}
            />
            <p className="text-[10px] text-muted-foreground font-mono mt-1 text-center">{c.hex}</p>
          </div>
        ))}
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
      <h1 className="text-3xl font-bold tracking-tight mb-2">Flint Design Tokens</h1>
      <p className="text-muted-foreground mb-8">
        Complete color system, typography, and spacing tokens for the Flint K12 design system.
      </p>

      <ShowcaseSection title="Brand Core" description="Immutable brand marks — the foundation of the Flint identity.">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brandColors.map((c) => (
            <ColorSwatch key={c.var} name={c.name} cssVar={c.var} hex={c.hex} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Brand Gradient" description="The signature 3-stage gradient (orange → red → purple).">
        <div className="space-y-3">
          <div
            className="h-20 w-full rounded-lg"
            style={{ background: "linear-gradient(135deg, #F05023 0%, #E11D48 70%, #9828D9 100%)" }}
          />
          <p className="text-xs text-muted-foreground font-mono">
            135deg · #F05023 (0%) → #E11D48 (70%) → #9828D9 (100%)
          </p>
          <div
            className="h-20 w-full rounded-lg"
            style={{ background: "linear-gradient(135deg, #F97316 0%, #F43F5E 70%, #A855F7 100%)" }}
          />
          <p className="text-xs text-muted-foreground font-mono">
            Hover: 135deg · #F97316 (0%) → #F43F5E (70%) → #A855F7 (100%)
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="UI Color Scales" description="Muted functional colors for daily UI use. Each has 100/500/hover/900 stops.">
        <div className="space-y-6">
          <ColorScaleRow colors={uiCream} label="Cream (Neutrals Light)" />
          <ColorScaleRow colors={uiBrown} label="Brown (Neutrals Dark)" />
          <ColorScaleRow colors={uiOrange} label="Orange (Primary)" />
          <ColorScaleRow colors={uiRed} label="Red (Destructive)" />
          <ColorScaleRow colors={uiBlue} label="Blue (Accent)" />
          <ColorScaleRow colors={uiGreen} label="Green (Success)" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Learning Pastels" description="Soft subject-area category colors.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {learningPastels.map((c) => (
            <ColorSwatch key={c.var} name={c.name} cssVar={c.var} hex={c.hex} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Semantic Tokens" description="Theme-aware background/foreground pairs (swap between light and dark).">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticTokens.map((c) => (
            <PairedSwatch key={c.var} name={c.name} bg={c.var} fg={c.fg} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sidebar Tokens" description="Colors used in the dark navigation sidebar.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sidebarColors.map((c) => (
            <PairedSwatch key={c.var} name={c.name} bg={c.var} fg={c.fg} />
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

      <ShowcaseSection title="Typography" description="Font families and type scale.">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Display</p>
            <p className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              GT Super — Bold & Energetic
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Body</p>
            <p className="text-base">
              Inter — Clean and readable body text for the interface.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Mono</p>
            <p className="text-sm font-mono">
              Geist Mono — For code and technical content.
            </p>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
