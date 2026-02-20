"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Terminal, AlertCircle, Info, CheckCircle2 } from "lucide-react";

export default function FeedbackPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Feedback &amp; Overlays
      </h1>
      <p className="text-muted-foreground mb-8">
        Alerts, dialogs, sheets, toasts, tooltips, and progress.
      </p>

      <ShowcaseSection title="Alert" description="Contextual feedback messages.">
        <div className="space-y-3 max-w-lg">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components using the shadcn CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Dialog" description="A modal dialog interrupts the user with important content.">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Activity</DialogTitle>
              <DialogDescription>
                Make changes to your activity here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Creative Writing" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subject" className="text-right">Subject</Label>
                <Input id="subject" defaultValue="English" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      <ShowcaseSection title="Alert Dialog" description="A confirmation dialog requiring user acknowledgment.">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Activity</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the activity and all associated
                student sessions. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      <ShowcaseSection title="Sheet" description="A panel that slides in from the edge of the screen.">
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet (Right)</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Activity Settings</SheetTitle>
                <SheetDescription>
                  Configure the activity parameters and AI behavior.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="max-turns">Max turns</Label>
                  <Input id="max-turns" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" defaultValue="0.7" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet (Left)</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Browse your activities.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Drawer" description="A drawer that slides up from the bottom.">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick Actions</DrawerTitle>
              <DrawerDescription>Choose what you&apos;d like to do.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-2">
              <Button className="w-full" variant="outline">Create Activity</Button>
              <Button className="w-full" variant="outline">Import from Library</Button>
              <Button className="w-full" variant="outline">Start a Chat</Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ShowcaseSection>

      <ShowcaseSection title="Toast (Sonner)" description="Non-intrusive notification messages.">
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => toast("Activity created successfully.")}
          >
            Default Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Activity published!", {
                description: "Students can now access this activity.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("Failed to save", {
                description: "Please try again.",
              })
            }
          >
            Error Toast
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Tooltip & Hover Card" description="Contextual information on hover.">
        <div className="flex flex-wrap gap-6 items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@flintk12</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Flint K12</h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered platform for K-12 education. Helping teachers
                  create engaging learning experiences.
                </p>
                <div className="flex items-center pt-2">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2023
                  </span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Progress" description="A progress bar showing completion state.">
        <div className="space-y-4 max-w-sm">
          <div>
            <p className="text-sm text-muted-foreground mb-2">25%</p>
            <Progress value={25} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">60%</p>
            <Progress value={60} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">100%</p>
            <Progress value={100} />
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
