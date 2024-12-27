import { Locale } from "@/shared/lib/i18n/routing";
import { HomePage } from "@/views/home";

interface HomePageProps {
    params: {
        locale: Locale;
    };
}

export default function Home({ params }: HomePageProps) {
    const {locale} = params
    return <HomePage locale={locale}/>
}
