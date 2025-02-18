'use client'

import * as React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from '@/shared/ui/sidebar'
import { SidebarBonusesMenu } from './sidebar-bonuses-menu'
import { menu } from './sidebar-menu-consts'
import Typography from '@/shared/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open, isMobile } = useSidebar()
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
                <SidebarBonusesMenu items={menu.bonuses} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
