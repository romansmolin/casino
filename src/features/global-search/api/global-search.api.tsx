import { GLOBAL_SEARCH } from "../model/global-search.schema"
import { ApolloError, useLazyQuery } from "@apollo/client"
import { Locale } from "@/shared/lib/i18n/routing"


type useGlobalSearchResponse = {
    casinoSearchResult: {
        casinoName: string,
        casinoUuid: string,
    }[]
    bonusSearchResult: {
        bonusUuid: string,
        bonusTitle: string,
        casinoName: string
        primaryBonusType: BonusCategoryType
    }[]
    loading: boolean,
    error: ApolloError | undefined
    triggerSearch: (query: string) => void
}

//client-side
export const useGlobalSearch = (locale: Locale): useGlobalSearchResponse => {
    const [triggerSearch, { data, loading, error }] = useLazyQuery(GLOBAL_SEARCH, {
        variables: { locale }, 
        fetchPolicy: "network-only", // Ensures fresh data is always fetched
    });

    return {
        triggerSearch: (query: string) => triggerSearch({ variables: { query, locale } }),
        casinoSearchResult: data?.globalSearch?.casinoSearchResult,
        bonusSearchResult: data?.globalSearch?.bonusSearchResult,
        loading,
        error,
    };
};