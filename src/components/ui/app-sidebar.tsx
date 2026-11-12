import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "./sidebar";
import { VersionSwitcher } from "./version-switcher";

const data = {
    versions: ["1.0.0", "1.1.0", "1.2.0"],
    currentVersion: "1.2.0",
    menuItems: [
        {
            title: "Dashboard",
            href: "/dashboard",
            items: [
                {
                    title: "Overview",
                    href: "/dashboard/overview"
                },
                {
                    title: "Analytics",
                    href: "/dashboard/analytics"
                }
            ]
        },
        {
            title: "Settings",
            href: "/settings",
            items: [
                {
                    title: "Profile",
                    href: "/settings/profile"
                },
                {
                    title: "Account",
                    href: "/settings/account"
                }
            ]
        }
    ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <VersionSwitcher versions={data.versions} defaultVersion={data.currentVersion} />
                {/* <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href="/dashboard">
                                <span className="text-base font-semibold">Copilote IA Inc.</span>
                            </a>
                        </SidebarMenuButton>

                    </SidebarMenuItem>
                </SidebarMenu> */}
            </SidebarHeader>
            <SidebarContent>
                {data.menuItems.map((menuItem, index) => (
                    <SidebarGroup key={index} title={menuItem.title}>
                        <SidebarGroupLabel>{menuItem.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItem.items.map((item, itemIndex) => (
                                    <SidebarMenuItem key={itemIndex}>
                                        <SidebarMenuButton>
                                            <a href={item.href}>{item.title}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>

                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail/>
        </Sidebar>
    );
}