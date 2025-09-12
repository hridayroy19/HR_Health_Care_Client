"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavDocuments } from "./nav-ducoment";
import { NavSecondary } from "./nav-secoundray";
import { NavUser } from "./nav-user";
import { useUser } from "@/context/UserContext";
import { getSidebarData } from "./sidebarConfig";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const role = user?.role as "ADMIN" | "DOCTOR" | "PATIENT" | undefined;

  if (!role) {
    return null;
  }

  const { navMain, navSecondary } = getSidebarData(role);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-[#120b22] ">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5 text-white" />
                <span className=" text-white hover:text-black font-semibold">
                  HR Helath Care
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#120b22] text-white">
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-[#120b22] text-white  ">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
