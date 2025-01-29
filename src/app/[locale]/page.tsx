import LoadingIndicator from "@/shared/components/loading-indicator/loading-indicator";
import { Locale } from "@/shared/lib/i18n/routing";
import { HomePage } from "@/views/home";
import { Suspense } from "react";

interface HomePageProps {
    params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: HomePageProps) {
    const { locale } = await params
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <HomePage locale={locale} />
        </Suspense>
    )
}
