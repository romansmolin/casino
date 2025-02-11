"use client"

import { useState, useEffect } from "react"

import { Search } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { useGlobalSearch } from "../api/global-search.api"
import { useLocale } from "next-intl"
import { Link, Locale } from "@/shared/lib/i18n/routing"
import Typography from "@/shared/components/typography/typography"
import { bonusrUrlFriendly } from "@/shared/utils/text-formaters"

export interface SearchResult {
    id: number
    title: string
    description: string
}

export default function GlobalSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const locale = useLocale()

    const { triggerSearch, casinoSearchResult, bonusSearchResult, loading, error } = useGlobalSearch(locale as Locale);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchTerm.trim().length > 0) {
            setIsModalOpen(true);
            triggerSearch(searchTerm); // Trigger the search
        }
    };

    return (
        <>
            <form onSubmit={handleSearch} className="relative w-full max-w-sm">
                <Input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-12"
                />
                <Button type="submit" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
            </form>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[460px] flex flex-col gap-8">
                    <DialogHeader>
                        <DialogTitle>Search Results for &quot;{searchTerm}&quot;</DialogTitle>
                    </DialogHeader>

                    <div>
                        {loading ? (
                            <p className="text-center text-muted-foreground">Loading...</p>
                        ) : error ? (
                            <p className="text-center text-red-500">Error: {error.message}</p>
                        ) : (
                            <>
                                {casinoSearchResult?.length === 0 && bonusSearchResult.length === 0 ? (
                                    <p className="text-center text-muted-foreground">No results found</p>
                                ) : (
                                    <ul className="max-h-[300px] overflow-auto">
                                        {casinoSearchResult?.map((result) => (
                                            <li key={result.casinoName} className="mb-4 last:mb-0">
                                                <Link
                                                    href={{
                                                        pathname: `/casino-review/${bonusrUrlFriendly(result.casinoName)}`,
                                                        query: {
                                                            id: result.casinoUuid,
                                                        },
                                                    }}
                                                    className="hover:text-primary"
                                                    onClick={() => setIsModalOpen(false)}
                                                >
                                                    <Typography as="h3" className="font-medium text-lg">{result.casinoName} Review</Typography>
                                                </Link>
                                            </li>
                                        ))}
                                        {bonusSearchResult?.map((result) => (
                                            <li key={result.bonusTitle} className="mb-4 last:mb-0">
                                                <Link
                                                    href={{
                                                        pathname: `/${bonusrUrlFriendly(result.primaryBonusType)}/${bonusrUrlFriendly(result.casinoName)}`,
                                                        query: { uuid: result.bonusUuid }
                                                    }}
                                                    className="hover:text-primary"
                                                    onClick={() => setIsModalOpen(false)}
                                                >
                                                    <Typography as="h3" className="font-medium text-lg">{result.casinoName} {result.bonusTitle}</Typography>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}   