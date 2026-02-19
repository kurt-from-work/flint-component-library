import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { Badge } from "@/components/ui/badge";

const componentGroups = [
  { name: "Buttons & Toggle", count: 4, href: "/buttons" },
  { name: "Inputs & Forms", count: 10, href: "/inputs" },
  { name: "Cards & Containers", count: 4, href: "/cards" },
  { name: "Feedback & Overlays", count: 8, href: "/feedback" },
  { name: "Layout & Navigation", count: 7, href: "/layout" },
  { name: "Data Display", count: 5, href: "/data-display" },
  { name: "Typography & Misc", count: 3, href: "/typography" },
  { name: "Surfaces & Layers", count: 3, href: "/surfaces" },
  { name: "Theme", count: 1, href: "/theme" },
];

export default function Home() {
  return (
    <ShowcaseLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Flint Component Library
        </h1>
        <p className="text-muted-foreground text-lg">
          A living reference of every shadcn/ui component installed in the Flint
          project. Click any category to see live, interactive examples.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {componentGroups.map((group) => (
          <a
            key={group.href}
            href={group.href}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {group.name}
              </h3>
              <Badge variant="secondary">{group.count}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              View {group.count} component{group.count !== 1 ? "s" : ""}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-muted/50 border border-border p-6">
        <h2 className="font-semibold mb-2">Stack</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Next.js 16</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind CSS v4</Badge>
          <Badge>shadcn/ui</Badge>
          <Badge>Radix Primitives</Badge>
          <Badge>Lucide Icons</Badge>
        </div>
      </div>
    </ShowcaseLayout>
  );
}
