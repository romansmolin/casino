import { Dice2, FastForwardIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import { cn } from '@/shared/lib/css'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'

import { StrapiContent } from '../model/types'
import StrapiTextRenderer from './strapi-text-renderer'

interface ImageProps {
    url: string
    altText: string
    skewDirection: 'left' | 'right'
    bgColorClass?: string
    animateOnHover?: boolean
}

interface ContentSectionProps {
    text: StrapiContent[]
    image?: {
        url: string
        altText: string
    }
    position?: 'right' | 'left'
    className?: string
    badge: string
    actionButton: {
        title: string
        link: string
    }
}

// Extracted style constants
const BASE_SECTION_STYLES = 'bento-block border border-border'

const PageContentSection: React.FC<ContentSectionProps> = ({
    text,
    image,
    position = 'left',
    className,
    badge,
    actionButton,
}) => {
    const isLeft = position === 'left'

    const Content = (
        <div className={cn('space-y-5 flex-1', isLeft ? '' : '')}>
            <StrapiTextRenderer contentData={text} />
        </div>
    )

    return (
        <section className={cn(BASE_SECTION_STYLES, 'border border-border', className)}>
            {image ? (
                <div className="flex flex-col gap-5">
                    {badge && (
                        <div
                            className={cn(
                                'w-full flex',
                                !isLeft ? 'justify-start' : 'justify-end'
                            )}
                        >
                            <Badge className="w-fit py-2 px-4 flex gap-2 bg-primary/10">
                                <Dice2 className="size-4 animate-bounce" />
                                {badge}
                            </Badge>
                        </div>
                    )}
                    {isLeft ? (
                        <div className="gap-12 flex flex-col sm:flex-row items-stretch min-h-96">
                            <div className="flex justify-center items-center w-full sm:max-w-sm">
                                <Image
                                    src={image.url}
                                    alt={image.altText || 'Content image'}
                                    width={0}
                                    height={0}
                                    className="max-w-full h-auto min-w-48 sm:min-w-72 min-h-32 sm:min-h-48 object-cover rounded-md filter drop-shadow-lg"
                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 400px"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 gap-5">
                                {Content}
                                {actionButton && actionButton.title && actionButton.link && (
                                    <Button size={'lg'} className="w-fit">
                                        {actionButton.title} <FastForwardIcon />
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="gap-12 flex flex-col sm:flex-row items-stretch min-h-96">
                            <div className="flex flex-col justify-between flex-1 gap-5">
                                {Content}
                                {actionButton && actionButton.title && actionButton.link && (
                                    <Button size={'lg'} className="w-fit" asChild>
                                        <Link href={actionButton.link}>
                                            {actionButton.title}
                                            <FastForwardIcon />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                            <div className="flex justify-center items-center w-full sm:max-w-sm">
                                <Image
                                    src={image.url}
                                    alt={image.altText || 'Content image'}
                                    width={0}
                                    height={0}
                                    className="max-w-full h-auto min-w-48 sm:min-w-72 min-h-32 sm:min-h-48 object-cover rounded-md filter drop-shadow-lg"
                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 400px"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                Content
            )}
        </section>
    )
}

export default PageContentSection
