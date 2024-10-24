import { Book, ChevronDown, File, Paperclip, User } from "lucide-react";

import useRole from "@/hooks/useRole";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function AppSidebar() {
  const { role } = useRole();
  const navItems = [
    {
      icon: Book,
      title: "Courses",
      href: "/",
      roles: ["student", "teacher"],
    },
    {
      icon: File,
      title: "Assignments",
      href: "/assignment",
      roles: ["student", "teacher"],
    },
    {
      icon: Paperclip,
      title: "Submissions",
      href: "/submission",
      roles: ["student"],
    },
  ];

  const courseItems = [
    {
      title: "Biology",
      href: "/course/1231233513",
    },
    {
      title: "Math",
      href: "/course/345345",
    },
    {
      title: "Chemistry",
      href: "/course/4354351",
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-center items-center">
        <p className="font-semibold">Assignment App</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems
                .filter((item) => item.roles.includes(role))
                .map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.href === location.pathname}
                    >
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Courses
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {courseItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.href === location.pathname}
                      >
                        <a href={item.href}>
                          <Book />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/profile" className="">
                <Avatar className="w-10 h-10">
                  <AvatarImage alt="@shadcn" />
                  <AvatarFallback>
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold">User Name</p>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
