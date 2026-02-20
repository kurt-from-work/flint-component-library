"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Loader2,
  Sparkles,
  Zap,
  Copy,
  Scissors,
  Clipboard,
} from "lucide-react";

export default function ButtonsPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Buttons &amp; Toggle
      </h1>
      <p className="text-muted-foreground mb-8">
        Button variants for every context — from the muted primary for daily UI
        to the special gradient for hero moments.
      </p>

      <ShowcaseSection
        title="Special Action (Gradient)"
        description="Reserved for the most important call-to-action on a page."
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="gradient" className="rounded-lg px-6 py-2.5 h-auto">
            <Sparkles className="w-4 h-4" />
            Get Started Free
          </Button>
          <Button variant="gradient" className="rounded-full px-6 py-2.5 h-auto">
            Subscribe Now
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="gradient" className="rounded-lg px-6 py-3.5 h-auto text-[1.0625rem]">
            <Zap className="w-5 h-5" />
            Upgrade to Pro
          </Button>
        </div>
        <div className="pt-4 border-t border-border mt-6">
          <p className="text-xs font-mono text-muted-foreground/60">
            class=&quot;bg-brand-gradient&quot; (includes hover scale &amp; shadow)
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Variants" description="Core button styles for different levels of emphasis.">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Sizes" description="Three sizes for different density contexts.">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Mail size={16} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button States" description="Interactive states for feedback.">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button className="ring-2 ring-primary ring-offset-2 ring-offset-card">Focused</Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading
          </Button>
          <Button disabled>Disabled</Button>
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

      <ShowcaseSection title="Button Group" description="Group buttons together with shared borders and separators.">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Horizontal</p>
            <ButtonGroup>
              <Button variant="outline"><ChevronLeft className="h-4 w-4" /></Button>
              <Button variant="outline">Today</Button>
              <Button variant="outline"><ChevronRight className="h-4 w-4" /></Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">With separators</p>
            <ButtonGroup>
              <Button variant="outline" size="sm"><Scissors className="h-4 w-4" /> Cut</Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="sm"><Copy className="h-4 w-4" /> Copy</Button>
              <ButtonGroupSeparator />
              <Button variant="outline" size="sm"><Clipboard className="h-4 w-4" /> Paste</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Vertical</p>
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle" description="A two-state button that can be on or off.">
        <div className="flex flex-wrap gap-3">
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
