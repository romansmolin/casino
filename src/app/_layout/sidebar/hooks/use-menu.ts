import { useQuery } from '@apollo/client'
import { Bot, Gem, Gift, Info, Landmark, SquareTerminal } from 'lucide-react'

import React, { useMemo } from 'react'

import { Locale } from '@/shared/lib/i18n/routing'

import { GET_SIDEBAR_MENU } from '../model/menu.schema'

interface ServerMenuData {
    getMenu: {
        sections: Array<{
            title: string
            isActive: boolean
            menuLink: Array<{
                type: 'bonus' | 'casino' | null
                title: string
                slug: string
            }>
        }>
    }
}

interface MenuItem {
    title: string
    url: string
    icon?: any
    isActive?: boolean
    items?: Array<{
        title: string
        url: string
        icon?: any
    }>
}

interface MenuHookResult {
    menuItems: MenuItem[]
    loading: boolean
    error?: any
    refetch?: () => void
}

function generateUrl(
    type: 'bonus' | 'casino' | null | 'top' | 'static',
    slug: string
): string {
    if (type === 'bonus') {
        return `bonuses/${slug}`
    }

    if (type === 'casino') {
        return `casinos/${slug}`
    }

    if (type === 'top') {
        return `top/${slug}`
    }

    if (type === 'static') {
        return `${slug}`
    }

    return '#'
}

export function useMenu(locale: Locale): MenuHookResult {
    const { data, loading, error, refetch } = useQuery<{ getMenu: ServerMenuData['getMenu'] }>(
        GET_SIDEBAR_MENU,
        {
            variables: { locale },
            errorPolicy: 'all',
            fetchPolicy: 'cache-first',
            nextFetchPolicy: 'cache-first',
            notifyOnNetworkStatusChange: false,
        }
    )

    const transformedMenuItems = useMemo(() => {
        if (!data?.getMenu?.sections) {
            return []
        }

        return data.getMenu.sections.map((section) => {
            const sectionKey = section.title
            const sectionIcon = Gem

            const items = section.menuLink.map((link) => ({
                title: link.title,
                url: generateUrl(link.type, link.slug),
                icon: null,
            }))

            return {
                title: sectionKey,
                url: '#',
                icon: sectionIcon,
                isActive: section.isActive,
                items,
            }
        })
    }, [data, loading])

    return {
        menuItems: transformedMenuItems,
        loading,
        error,
        refetch,
    }
}
