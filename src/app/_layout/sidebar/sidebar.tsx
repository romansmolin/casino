'use client'

import * as React from 'react'


import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/shared/ui/sidebar'
import { SidebarBonusesMenu } from './sidebar-bonuses-menu'
import { menu } from './sidebar-menu-consts'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
            <SidebarContent>
                <SidebarBonusesMenu items={menu.bonuses} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
