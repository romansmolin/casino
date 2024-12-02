'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Badge } from '../../ui/badge'
import { NavigationLinkProps } from './navigation-link.types'


const NavigationLink: React.FC<NavigationLinkProps> = ({ href, icon: Icon, label, active, badge }) => {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg p-3 ${pathname === href ? 'bg-muted/40' : 'text-black dark:text-white'} transition-all hover:text-primary`}
        >
            {Icon}
            {label}
            {badge && (
                <Badge className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    {badge}
                </Badge>
            )}
        </Link>
    )
}

export default NavigationLink