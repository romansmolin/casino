'use client'

import * as React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    useSidebar,
} from '@/shared/ui/sidebar'
import { SidebarMenuList } from './sidebar-menu'
import { menu } from './sidebar-menu-consts'
import Link from 'next/link'
import Logo from '../../../../public/assets/logo'

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { open } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="pt-2 flex items-center justify-center">
                {open && (
                    <Link href="/" className="flex gap-3 items-center py-4">
                        <Logo />
                        <span className="text-4xl">BetBoost</span>
                    </Link>
                )}
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenuList items={menu.bonuses} />

                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default AppSidebar
