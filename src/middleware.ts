import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { routing } from './shared/lib/i18n/routing'

// export default createMiddleware(routing);
const handleI18nRouting = createMiddleware(routing)

export function middleware(request: NextRequest) {
    const res = handleI18nRouting(request)

    console.log('request in middleware')

    return res
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en)/:path*'],
}
