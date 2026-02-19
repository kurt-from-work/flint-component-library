"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronRight,
  Mail,
  Loader2,
} from "lucide-react";

export default function ButtonsPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Buttons &amp; Toggle
      </h1>
      <p className="text-muted-foreground mb-8">
        Interactive button variants, toggles, and toggle groups.
      </p>

      <ShowcaseSection title="Button Variants" description="All available button styles.">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Sizes" description="Extra-small to extra-large.">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Mail size={16} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button States" description="Disabled and loading states.">
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Buttons with Icons" description="Leading and trailing icon patterns.">
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail /> Login with Email
          </Button>
          <Button variant="outline">
            Next <ChevronRight />
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle" description="A two-state button that can be on or off.">
        <div className="flex gap-3">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle Group" description="A group of toggles — single or multiple selection.">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Single select</p>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Multiple select</p>
            <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
