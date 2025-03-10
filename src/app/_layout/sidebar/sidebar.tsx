'use client'

import * as React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from '@/shared/ui/sidebar'
import { SidebarMenuList } from './sidebar-menu'
import { menu } from './sidebar-menu-consts'
import Image from 'next/image'
import Link from 'next/link'

const AppSidebar =({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { open } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className='pt-2 flex items-center justify-center'>
                {open && (
                        <Link href="/">
                            <Image src='/assets/logo.svg' alt='Logo' width={195} height={250} className='p-2 w-80'/>
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