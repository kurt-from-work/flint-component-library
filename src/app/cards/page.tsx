"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export default function CardsPage() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Cards &amp; Containers
      </h1>
      <p className="text-muted-foreground mb-8">
        Cards, accordions, and collapsible containers.
      </p>

      <ShowcaseSection title="Card" description="A versatile container with header, content, and footer slots.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Activity Report</CardTitle>
              <CardDescription>Your weekly student engagement summary.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-sm text-muted-foreground">sessions completed this week</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Activity</CardTitle>
              <CardDescription>Design a new learning activity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Activity title" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g. Mathematics" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Cancel</Button>
              <Button>Create</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Accordion" description="Vertically stacked expandable sections.">
        <Accordion type="single" collapsible className="w-full max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Flint?</AccordionTrigger>
            <AccordionContent>
              Flint is an AI-powered platform designed for K-12 education,
              helping teachers create engaging learning activities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do activities work?</AccordionTrigger>
            <AccordionContent>
              Teachers create activities with prompts, and students interact
              with an AI tutor that guides them through the learning process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is student data safe?</AccordionTrigger>
            <AccordionContent>
              Yes. Flint is FERPA and COPPA compliant, and all student data
              is encrypted at rest and in transit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      <ShowcaseSection title="Collapsible" description="An interactive component that expands and collapses.">
        <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              3 recent activities
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            Creative Writing Workshop
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">
              Math Problem Solving
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">
              Science Lab Report
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      <ShowcaseSection title="Badge" description="Small status indicators and labels.">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
