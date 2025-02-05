
import { routing } from "@/shared/lib/i18n/routing";
import BaseLayout from "./_layout/base-layout/base-layout";
import NotFoundPage from "@/views/not-found/ui/not-found-page";

export default function GlobalNotFound() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <NotFoundPage />
        </BaseLayout>
    )
}