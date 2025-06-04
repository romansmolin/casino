import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'
import Link from 'next/link'
import React from 'react'
import { StrapiContent, StrapiContentItem } from '../model/types'

const StrapiTextRenderer = ({ contentData }: { contentData: StrapiContent[] }) => {
    return contentData.map((item: StrapiContent, index: number) => {
        if (item.type === 'heading' && item.children[0]?.text) {
            return (
                <Typography
                    as="h2"
                    variant="h1"
                    key={index}
                    className="text-3xl md:text-5xl scroll-my-14 font-bold break-words">
                    {item.children[0].text}
                </Typography>
            )
        } else if (item.type === 'paragraph') {
            return (
                <div key={index} className="text-justify leading-8">
                    {item.children.map((text: StrapiContentItem, childIndex: number) =>
                        text.type === 'link' && text.url && text.children?.[0]?.text ? (
                            <Link
                                key={`${text.url}-${childIndex}`}
                                href={text.url}
                                className="text-primary underline">
                                {text.children[0].text}
                            </Link>
                        ) : (
                            <span
                                key={`${text.text}-${childIndex}`}
                                className={cn(text.bold ? 'font-bold text-primary' : '')}>
                                {text.text}
                            </span>
                        )
                    )}
                </div>
            )
        } else {
            return null
        }
    })
}

export default StrapiTextRenderer
