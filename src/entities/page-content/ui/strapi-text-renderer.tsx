import Image from 'next/image'
import Link from 'next/link'

import React, { ElementType } from 'react'

import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'

import { StrapiContent, StrapiContentItem } from '../model/types'

const StrapiTextRenderer = ({ contentData }: { contentData: StrapiContent[] }) => {
    return contentData?.map((item: StrapiContent, index: number) => {
        if (item.type === 'heading' && item.children[0]?.text) {
            return (
                <Typography
                    as={item.level ? (`h${item.level}` as ElementType) : 'h3'}
                    variant="h1"
                    key={index}
                    className="text-3xl md:text-5xl scroll-my-14 font-bold break-words"
                >
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
                                className="text-primary underline"
                            >
                                {text.children[0].text}
                            </Link>
                        ) : (
                            <span
                                key={`${text.text}-${childIndex}`}
                                className={cn(text.bold ? 'font-bold text-primary' : '')}
                            >
                                {text.text}
                            </span>
                        )
                    )}
                </div>
            )
        } else if (item.type === 'list' && item.format === 'ordered') {
            return (
                <ol
                    key={`${index}`}
                    className="flex flex-col gap-5 list-decimal list-inside pl-8"
                >
                    {item.children.map((listItem, listIndex) => (
                        // @ts-ignore
                        <li key={`listItem.type-${listIndex}`} className="leading-relaxed">
                            {listItem.children?.map(
                                (text: StrapiContentItem, childIndex: number) =>
                                    text.type === 'link' &&
                                    text.url &&
                                    text.children?.[0]?.text ? (
                                        <Link
                                            key={`${text.url}-${childIndex}`}
                                            href={text.url}
                                            className="text-primary underline"
                                        >
                                            {text.children[0].text} ddd
                                        </Link>
                                    ) : (
                                        <span
                                            key={`${text.text}-${childIndex}`}
                                            className={cn(
                                                text.bold ? 'font-bold text-primary' : ''
                                            )}
                                        >
                                            {text.text}
                                        </span>
                                    )
                            )}
                        </li>
                    ))}
                </ol>
            )
        } else if (item.type === 'list' && item.format === 'unordered') {
            return (
                <ul
                    key={`${index}`}
                    className="flex flex-col gap-5 list-disc list-inside pl-8"
                >
                    {item.children.map((listItem, listIndex) => (
                        // @ts-ignore
                        <li key={`listItem.type-${listIndex}`} className="leading-relaxed">
                            {listItem.children?.map(
                                (text: StrapiContentItem, childIndex: number) =>
                                    text.type === 'link' &&
                                    text.url &&
                                    text.children?.[0]?.text ? (
                                        <Link
                                            key={`${text.url}-${childIndex}`}
                                            href={text.url}
                                            className="text-primary underline"
                                        >
                                            {text.children[0].text} ddd
                                        </Link>
                                    ) : (
                                        <span
                                            key={`${text.text}-${childIndex}`}
                                            className={cn(
                                                text.bold ? 'font-bold text-primary' : ''
                                            )}
                                        >
                                            {text.text}
                                        </span>
                                    )
                            )}
                        </li>
                    ))}
                </ul>
            )
        } else if (item.type === 'quote') {
            return (
                <blockquote
                    key={`${index}`}
                    className="mt-6 border-l-2 pl-6 italic text-justify leading-relaxed"
                >
                    {item.children?.map((text: StrapiContentItem, childIndex: number) =>
                        text.type === 'link' && text.url && text.children?.[0]?.text ? (
                            <Link
                                key={`${text.url}-${childIndex}`}
                                href={text.url}
                                className="text-primary underline"
                            >
                                {text.children[0].text} ddd
                            </Link>
                        ) : (
                            <span
                                key={`${text.text}-${childIndex}`}
                                className={cn(text.bold ? 'font-bold text-primary' : '')}
                            >
                                {text.text}
                            </span>
                        )
                    )}
                </blockquote>
            )
        } else if (item.type === 'image' && item.image?.url) {
            return (
                <Image
                    key={item.image?.url}
                    src={item.image?.url}
                    width={600}
                    height={400}
                    alt={'Review Image'}
                    className="max-w-full h-auto rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
            )
        } else {
            return null
        }
    })
}

export default StrapiTextRenderer
