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
                casinosCategory: { slug: string } | null
                bonusCategory: { slug: string } | null
                topSlug: string
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
    type: 'bonus' | 'casino' | null | 'top',
    casinosCategory: { slug: string } | null,
    bonusCategory: { slug: string } | null,
    topSlug: string
): string {
    if (type === 'bonus' && bonusCategory?.slug) {
        return `bonuses/${bonusCategory.slug}`
    }

    if (type === 'casino' && casinosCategory?.slug) {
        return `casinos/${casinosCategory.slug}`
    }

    if (type === 'top' && topSlug) {
        return `top/${topSlug}`
    }

    // Fallback: try to determine from available data
    if (bonusCategory?.slug) {
        return `bonuses/${bonusCategory.slug}`
    }

    if (casinosCategory?.slug) {
        return `casinos/${casinosCategory.slug}`
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
                url: generateUrl(
                    link.type,
                    link.casinosCategory,
                    link.bonusCategory,
                    link.topSlug
                ),
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
