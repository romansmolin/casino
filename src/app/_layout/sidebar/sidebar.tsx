'use client'

import Link from 'next/link'

import * as React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    useSidebar,
} from '@/shared/ui/sidebar'

import Logo from '../../../../public/assets/logo'
import { SidebarMenuList } from './sidebar-menu'

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { open } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props} className="bg-transparent dark:bg-muted/50">
            <SidebarHeader className="pt-2 flex items-center justify-center">
                {open && (
                    <Link href="/" className="flex gap-3 items-center py-4">
                        <Logo />
                        <span className="text-4xl">BetBoost</span>
                    </Link>
                )}

                {!open && <Logo className="p-2" />}
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenuList />

                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default AppSidebar
