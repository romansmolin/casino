'use client'

import * as React from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from '@/shared/ui/sidebar'
import { SidebarBonusesMenu } from './sidebar-bonuses-menu'
import { menu } from './sidebar-menu-consts'
import Typography from '@/shared/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className='pt-2 flex flex-row gap-2 items-center'>
                {open && (
                    <>
                        <Link href="/">
                            <Image src='/assets/logo.webp' alt='Logo' width={75} height={20} />
                        </Link>
                        <Typography variant='h2' as="h4">BetBoost</Typography>
                    </>
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
