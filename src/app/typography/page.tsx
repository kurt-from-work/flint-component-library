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
        Type scale, command palette, and miscellaneous components.
      </p>

      <ShowcaseSection title="Type Scale" description="Heading and body text sizes using Geist font.">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading 1
          </h1>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Heading 2
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Heading 3
          </h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Heading 4
          </h4>
          <p className="leading-7">
            This is body text. The quick brown fox jumps over the lazy dog. Flint
            helps K-12 teachers create engaging AI-powered learning activities
            for their students.
          </p>
          <p className="text-sm text-muted-foreground">
            This is small/muted text used for descriptions and secondary content.
          </p>
          <p className="text-xs text-muted-foreground">
            This is extra-small text for captions and metadata.
          </p>
          <blockquote className="mt-4 border-l-2 pl-6 italic">
            &ldquo;The best way to predict the future is to create it.&rdquo;
          </blockquote>
          <p className="font-mono text-sm">
            This is monospace text — useful for code or technical content.
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
