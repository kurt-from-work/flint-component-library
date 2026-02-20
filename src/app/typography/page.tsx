"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  Smile,
} from "lucide-react";

export default function TypographyPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Typography &amp; Misc
      </h1>
      <p className="text-muted-foreground mb-8">
        Flint type scale, fonts, command palette, and formatting components.
      </p>

      <ShowcaseSection title="Display Font" description="GT Super — used for headings and hero text.">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Bold &amp; Energetic
          </h1>
          <h2 className="scroll-m-20 text-3xl font-medium tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Warm &amp; Inviting
          </h2>
          <p className="text-sm text-muted-foreground">
            Font family: &apos;GT Super&apos;, Georgia, serif
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Body Type Scale" description="Inter — used for all body text and UI elements.">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">h1 — 2.25rem / 500</p>
            <h1 className="text-4xl font-medium tracking-tight">
              Heading 1
            </h1>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">h2 — 1.875rem / 500</p>
            <h2 className="text-3xl font-medium tracking-tight">
              Heading 2
            </h2>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">h3 — 1.5rem / 500</p>
            <h3 className="text-2xl font-medium tracking-tight">
              Heading 3
            </h3>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">h4 — 1.25rem / 500</p>
            <h4 className="text-xl font-medium tracking-tight">
              Heading 4
            </h4>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">base — 1rem / 400</p>
            <p className="leading-7">
              This is body text. The quick brown fox jumps over the lazy dog. Flint
              helps K-12 teachers create engaging AI-powered learning activities
              for their students.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">sm — 0.875rem</p>
            <p className="text-sm text-muted-foreground">
              This is small/muted text used for descriptions and secondary content.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">xs — 0.75rem</p>
            <p className="text-xs text-muted-foreground">
              This is extra-small text for captions and metadata.
            </p>
          </div>
          <blockquote className="mt-4 border-l-2 border-primary pl-6 italic">
            &ldquo;The best way to predict the future is to create it.&rdquo;
          </blockquote>
          <p className="font-mono text-sm">
            Geist Mono — monospace for code and technical content.
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Inline Code & Formatting">
        <div className="space-y-3">
          <p>
            Use the <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">Button</code> component
            from <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">@/components/ui/button</code>.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Label</Badge>
            <Badge variant="secondary">Category</Badge>
            <Badge variant="outline">Tag</Badge>
            <Badge variant="destructive">Alert</Badge>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Keyboard Shortcut (Kbd)" description="Styled keyboard key indicators for shortcuts and hotkeys.">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Save:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>S</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Copy:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>C</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Search:</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Kbd>Enter</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Command (Search Palette)" description="A command menu for searching and executing actions.">
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
