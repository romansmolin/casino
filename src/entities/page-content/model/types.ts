export type StrapiContentItem = {
    type: string
    text?: string
    bold?: boolean
    url?: string
    children?: StrapiContentItem[]
}

export type StrapiContent = {
    type: 'paragraph' | 'heading' | 'list'
    children: StrapiContentItem[]
}
