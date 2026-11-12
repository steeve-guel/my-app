"use client"

import React from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Check, ChevronsUpDown, GalleryHorizontalEnd } from "lucide-react";
import { Button } from "./button";

export function VersionSwitcher({ versions, defaultVersion }: {
    versions: string[];
    defaultVersion: string;
}) {
    const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger render={<SidebarMenuButton/>}>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <GalleryHorizontalEnd className="size-4" />
                        </div>
                        <div className="flex flex-col gap-0.5 loading-none">
                            <span className="font-medium">Documents</span>
                            <span className="">v{selectedVersion}</span>
                        </div>
                        <ChevronsUpDown />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)" align="start">
                        {versions.map((version) => (
                            <DropdownMenuItem key={version} onSelect={() => setSelectedVersion(version)}>
                                v{version}{" "}
                                {version === selectedVersion && <Check className="ml-auto" />}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>

        </SidebarMenu>
    );
}