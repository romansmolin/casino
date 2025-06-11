import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ru'],

    // Used when no locale matches
    defaultLocale: 'en',
})

export type Locale = (typeof routing.locales)[number]
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing)
