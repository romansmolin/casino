'use client'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { cn } from '@/shared/lib/css'
import { Locale } from '@/shared/lib/i18n/routing'
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from '@/shared/ui/sidebar'
import { Skeleton } from '@/shared/ui/skeleton'

import { useMenu } from '../hooks/use-menu'

export function SidebarMenuList() {
    const t = useTranslations('sidebar')
    const locale = useLocale() as Locale
    const { isMobile } = useSidebar()

    const { menuItems, loading, error, refetch } = useMenu(locale)

    // Loading state with skeleton
    if (loading) {
        return (
            <SidebarGroup>
                <SidebarMenu>
                    {Array.from({ length: 3 }).map((_, sectionIndex) => (
                        <SidebarMenuItem key={sectionIndex}>
                            <div className="flex items-center gap-2 p-2">
                                <Skeleton className="h-4 w-4 rounded" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                            <SidebarMenuSub>
                                {Array.from({ length: 3 }).map((_, itemIndex) => (
                                    <SidebarMenuSubItem key={itemIndex}>
                                        <div className="flex items-center gap-2 p-2 ml-6">
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        )
    }

    // Error state
    if (error) {
        return (
            <SidebarGroup>
                <div className="p-4 text-center">
                    <p className="text-red-500 text-sm mb-2">
                        Error loading menu: {error.message}
                    </p>
                    <button
                        onClick={() => refetch?.()}
                        className="text-xs px-2 py-1 bg-primary text-white rounded hover:bg-primary/80"
                    >
                        Retry
                    </button>
                </div>
            </SidebarGroup>
        )
    }

    // Main menu content
    return (
        <SidebarGroup>
            <SidebarMenu>
                {menuItems.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem className={cn(isMobile ? 'text-white' : 'text-dark')}>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem
                                            key={subItem.title}
                                            className="hover:bg-primary hover:text-white rounded-md"
                                        >
                                            <SidebarMenuSubButton asChild className="h-10 ">
                                                <Link
                                                    href={`/${locale}/${subItem.url}`}
                                                    className="flex gap-2"
                                                >
                                                    {/* {subItem.icon && <subItem.icon />} */}
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
