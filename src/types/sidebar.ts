import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Icon, IconProps } from "@tabler/icons-react";

export type SidebarItem = {
  title: string;
  url: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

export type SidebarData = {
  navMain: SidebarItem[];
  navSecondary: SidebarItem[];
};
