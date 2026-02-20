import Link from "next/link";
import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { Badge } from "@/components/ui/badge";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const componentGroups = [
  { name: "Buttons & Toggle", count: 5, href: "/buttons" },
  { name: "Inputs & Forms", count: 14, href: "/inputs" },
  { name: "Cards & Containers", count: 4, href: "/cards" },
  { name: "Feedback & Overlays", count: 10, href: "/feedback" },
  { name: "Layout & Navigation", count: 7, href: "/layout" },
  { name: "Data Display", count: 7, href: "/data-display" },
  { name: "Typography & Misc", count: 5, href: "/typography" },
  { name: "Surfaces & Layers", count: 3, href: "/surfaces" },
  { name: "Colors", count: 1, href: "/theme" },
];

export default function Home() {
  return (
    <ShowcaseLayout>
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          Flint Design System
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Component Library
        </h1>
        <p className="text-muted-foreground text-lg">
          A living reference of every component in the Flint design system.
          Click any category to see live, interactive examples with all states.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {componentGroups.map((group) => (
          <Link
            key={group.href}
            href={group.href}
            className="group rounded-lg border border-border bg-brand-white dark:bg-card p-5 hover:border-primary hover:shadow-md dark:hover:border-primary/40 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-brand-dark dark:text-foreground">
                {group.name}
              </h3>
              <Badge variant="secondary">{group.count}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              View {group.count} component{group.count !== 1 ? "s" : ""}
            </p>
          </Link>
        ))}
      </div>

      {/* Brand Gradient Banner */}
      <div className="mt-10 relative mb-6 sm:mb-10">
        <div
          className="rounded-lg text-white relative"
          style={{ background: "linear-gradient(135deg, #F05023 0%, #E11D48 70%, #9828D9 100%)" }}
        >
          <div className="p-6 pr-32 sm:pr-40 md:pr-44">
            <h2 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
              The Flint Brand
            </h2>
            <p className="text-white/80 text-sm mb-4">
              Bold &amp; Energetic · Warm &amp; Inviting · Deep &amp; Grounded
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Next.js 16</Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">TypeScript</Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Tailwind CSS v4</Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">shadcn/ui</Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Radix Primitives</Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Lucide Icons</Badge>
            </div>
          </div>
        </div>
        {/* Sparky – anchored bottom-right of banner, popping out below */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/sparky-pennant-clear.png`}
          alt="Sparky mascot"
          className="hidden sm:block absolute right-4 md:right-6 bottom-0 w-[117px] md:w-[135px] lg:w-[155px] object-contain drop-shadow-lg"
          style={{ transform: "translateY(calc(30% - 20px))" }}
        />
      </div>
    </ShowcaseLayout>
  );
}
