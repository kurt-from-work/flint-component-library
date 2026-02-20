"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";

const students = [
  { name: "Alice Johnson", email: "alice@school.edu", sessions: 12, status: "Active" },
  { name: "Bob Smith", email: "bob@school.edu", sessions: 8, status: "Active" },
  { name: "Carol White", email: "carol@school.edu", sessions: 3, status: "Inactive" },
  { name: "David Brown", email: "david@school.edu", sessions: 15, status: "Active" },
  { name: "Emma Davis", email: "emma@school.edu", sessions: 0, status: "Pending" },
];

const tags = Array.from({ length: 30 }).map((_, i) => `Activity ${i + 1}`);

const chartData = [
  { month: "Jan", sessions: 186, activities: 12 },
  { month: "Feb", sessions: 305, activities: 18 },
  { month: "Mar", sessions: 237, activities: 15 },
  { month: "Apr", sessions: 173, activities: 10 },
  { month: "May", sessions: 409, activities: 24 },
  { month: "Jun", sessions: 214, activities: 14 },
];

const chartConfig = {
  sessions: {
    label: "Sessions",
    color: "var(--color-primary)",
  },
  activities: {
    label: "Activities",
    color: "var(--color-secondary)",
  },
} satisfies ChartConfig;

export default function DataDisplayPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Data Display</h1>
      <p className="text-muted-foreground mb-8">
        Tables, avatars, skeletons, scroll areas, and carousels.
      </p>

      <ShowcaseSection title="Table" description="A structured data table with headers and rows.">
        <Table>
          <TableCaption>Student engagement for Creative Writing activity.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Sessions</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.email}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell className="text-right">{student.sessions}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      student.status === "Active"
                        ? "default"
                        : student.status === "Inactive"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {student.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar" description="User profile images with fallback initials.">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Skeleton" description="Loading placeholder content.">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[min(250px,60vw)]" />
            <Skeleton className="h-4 w-[min(200px,50vw)]" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Scroll Area" description="A scrollable container with custom scrollbar.">
        <ScrollArea className="h-48 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Activities</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </ShowcaseSection>

      <ShowcaseSection title="Carousel" description="A slideshow for cycling through elements.">
        <div className="mx-auto max-w-xs">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Aspect Ratio" description="Maintains consistent width-to-height ratio for responsive media.">
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          <div>
            <p className="text-sm text-muted-foreground mb-2">16:9</p>
            <AspectRatio ratio={16 / 9} className="rounded-md border bg-muted overflow-hidden">
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                16:9 — Video
              </div>
            </AspectRatio>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">4:3</p>
            <AspectRatio ratio={4 / 3} className="rounded-md border bg-muted overflow-hidden">
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                4:3 — Photo
              </div>
            </AspectRatio>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">1:1</p>
            <AspectRatio ratio={1} className="rounded-md border bg-muted overflow-hidden">
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                1:1 — Square
              </div>
            </AspectRatio>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">21:9</p>
            <AspectRatio ratio={21 / 9} className="rounded-md border bg-muted overflow-hidden">
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                21:9 — Ultrawide
              </div>
            </AspectRatio>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Chart" description="Data visualization using Recharts with theme-aware styling.">
        <Card className="max-w-lg">
          <CardHeader>
            <CardTitle>Student Engagement</CardTitle>
            <CardDescription>Sessions and activities over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart data={chartData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="sessions" fill="var(--color-sessions)" radius={4} />
                <Bar dataKey="activities" fill="var(--color-activities)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
