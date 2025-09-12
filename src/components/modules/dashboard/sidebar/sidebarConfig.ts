import { SidebarData } from "@/types";
import {
  IconDashboard,
  IconListDetails,
  IconChartBar,
  IconFolder,
  IconUsers,
  IconUser,
  IconSettings,
  IconHelp,
  IconSearch,
} from "@tabler/icons-react";


export const sidebarConfig: Record<"ADMIN" | "DOCTOR" | "PATIENT", SidebarData> = {
  ADMIN: {
    navMain: [
      { title: "Dashboard", url: "/dashboard/admin", icon: IconDashboard },
      { title: "Doctor", url: "/dashboard/admin/doctors", icon: IconListDetails },
      { title: "Patient", url: "/dashboard/admin/patient", icon: IconChartBar },
      { title: "Specialties", url: "/dashboard/admin/specialties", icon: IconFolder },
      { title: "Admin Management", url: "/dashboard/admin/own", icon: IconUsers },
    ],
    navSecondary: [
      { title: "Profile", url: "/dashboard/admin/profile", icon: IconUser },
      { title: "Settings", url: "#", icon: IconSettings },
      { title: "Get Help", url: "#", icon: IconHelp },
      { title: "Search", url: "#", icon: IconSearch },
    ],
  },

  DOCTOR: {
    navMain: [
      { title: "Dashboard", url: "/dashboard/doctor", icon: IconDashboard },
      { title: "My Patients", url: "/dashboard/doctor/patients", icon: IconListDetails },
      { title: "Appointments", url: "/dashboard/doctor/appointments", icon: IconChartBar },
    ],
    navSecondary: [
      { title: "Profile", url: "/dashboard/doctor/profile", icon: IconUser },
      { title: "Settings", url: "#", icon: IconSettings },
    ],
  },

  PATIENT: {
    navMain: [
      { title: "Dashboard", url: "/dashboard/patient", icon: IconDashboard },
      { title: "Doctors", url: "/dashboard/patient/doctors", icon: IconListDetails },
      { title: "Appointments", url: "/dashboard/patient/appointments", icon: IconChartBar },
    ],
    navSecondary: [
      { title: "Profile", url: "/dashboard/patient/profile", icon: IconUser },
      { title: "Settings", url: "#", icon: IconSettings },
      { title: "Help", url: "#", icon: IconHelp },
    ],
  },
};

export const getSidebarData = (role: keyof typeof sidebarConfig): SidebarData => {
  return sidebarConfig[role] || { navMain: [], navSecondary: [] };
};
