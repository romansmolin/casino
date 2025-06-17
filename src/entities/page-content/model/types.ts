export type StrapiContentItem = {
    type: string
    text?: string
    bold?: boolean
    url?: string
    children?: StrapiContentItem[]
}

export type StrapiContent = {
    type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image'
    children: StrapiContentItem[]
    level: number
    format: 'unordered' | 'ordered'
    image?: {
        url: string
    }
}
