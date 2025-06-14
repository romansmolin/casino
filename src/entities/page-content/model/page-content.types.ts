import { ApiError } from '@/shared/utils/error-handler'

export interface PageContentItem {
    type: string
    image?: {
        url: string
    }
    position?: 'right' | 'left'
    imageBackgroundColor?: string
    content: Array<{
        type: string
        children: Array<{
            type: string
            text?: string
            bold?: boolean
            url?: string
            children?: Array<{
                text: string
            }>
        }>
        faqs?: Array<{
            label: string
            text: string
        }>
    }>
}

// API Response Types
export interface PageContentResponse {
    pageContent: PageContentItem[] | null
    error: ApiError | null
}

export interface PageSeoInfoResponse {
    title: string | null
    description: string | null
    keywords: string[] | null
    error: ApiError | null
}
