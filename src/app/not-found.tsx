import NotFoundPage from '@/views/not-found/ui/not-found-page'

import { routing } from '@/shared/lib/i18n/routing'

import { BaseLayout } from './_layout'

export default function GlobalNotFound() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <NotFoundPage />
        </BaseLayout>
    )
}
