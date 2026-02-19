"use client";

import { ShowcaseLayout } from "@/client/components/showcase-layout";
import { ShowcaseSection } from "@/client/components/showcase-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LayoutPage() {
  return (
    <ShowcaseLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Layout &amp; Navigation
      </h1>
      <p className="text-muted-foreground mb-8">
        Tabs, breadcrumbs, menus, pagination, and layout primitives.
      </p>

      <ShowcaseSection title="Tabs" description="Tabbed content navigation.">
        <Tabs defaultValue="overview" className="max-w-lg">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View your activity summary and recent student engagement.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track session metrics, completion rates, and student progress.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Configure moderation, AI behavior, and sharing preferences.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Breadcrumb" description="Hierarchical navigation trail.">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/layout">Activities</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Creative Writing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseSection>

      <ShowcaseSection title="Navigation Menu" description="A desktop navigation menu with dropdowns.">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="text-sm font-medium">My Activities</div>
                    <p className="text-xs text-muted-foreground">
                      View and manage your created activities.
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="text-sm font-medium">Shared Library</div>
                    <p className="text-xs text-muted-foreground">
                      Browse activities shared by other teachers.
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[300px]">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="text-sm font-medium">General</div>
                    <p className="text-xs text-muted-foreground">
                      Account and organization settings.
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Menubar" description="An application-style menu bar.">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Activity <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarItem>Import <MenubarShortcut>⌘I</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>Redo <MenubarShortcut>⌘⇧Z</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Select All <MenubarShortcut>⌘A</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Grid View</MenubarItem>
              <MenubarItem>List View</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ShowcaseSection>

      <ShowcaseSection title="Pagination" description="Navigate between pages of content.">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      <ShowcaseSection title="Separator" description="A visual divider between content.">
        <div className="max-w-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Activity Details</h4>
            <p className="text-sm text-muted-foreground">Manage your activity settings.</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Overview</div>
            <Separator orientation="vertical" />
            <div>Analytics</div>
            <Separator orientation="vertical" />
            <div>Settings</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Resizable Panels" description="Drag-to-resize panel layout.">
        <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-lg rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Footer</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
