import { Separator } from "@/components/ui/separator";

export function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      <div className="rounded-lg border border-border bg-card p-4 sm:p-6 overflow-x-auto">
        {children}
      </div>
      <Separator className="mt-10" />
    </section>
  );
}
