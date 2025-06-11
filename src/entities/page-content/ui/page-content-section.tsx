import Image from 'next/image'

import React from 'react'

import { cn } from '@/shared/lib/css'

import { StrapiContent } from '../model/types'
import StrapiTextRenderer from './strapi-text-renderer'

// Import or define the correct Strapi content types
type StrapiContentItem = {
    type: string
    text?: string
    bold?: boolean
    url?: string
    children?: StrapiContentItem[]
    severity?: string
}

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
    bgColorClass?: string
    className?: string
    animateOnHover?: boolean
    disableAnimation?: boolean
    noBorder?: boolean
}

// Extracted style constants
const BASE_SECTION_STYLES = 'bento-block border border-border'
const IMAGE_WRAPPER_BASE = `
    relative group flex justify-center items-center w-full max-w-[90%] 
    h-[300px] lg:h-[400px] rounded-2xl overflow-hidden
    transition-all duration-300
    before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))] before:z-10
    after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)] after:z-10
    shadow-[0_0_50px_0_rgba(0,0,0,0.1)]
    bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-transparent to-[rgba(0,0,0,0.1)]
    border border-[rgba(255,255,255,0.1)]
    backdrop-blur-[2px]
`

const ContentImage: React.FC<ImageProps> = ({
    url,
    altText,
    skewDirection,
    bgColorClass = 'bg-primary',
    animateOnHover = true,
}) => {
    const skewClass = skewDirection === 'left' ? 'skew-y-3' : '-skew-y-3'
    const imageSkewClass = skewDirection === 'left' ? '-skew-y-3' : 'skew-y-3'

    return (
        <div className="w-full flex justify-center">
            <div
                className={cn(
                    IMAGE_WRAPPER_BASE,
                    bgColorClass,
                    skewClass,
                    animateOnHover &&
                        'hover:scale-[1.02] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)]'
                )}
            >
                {/* Animated background patterns */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.05),transparent_30%)] animate-pulse delay-75" />
                </div>
                <div
                    className={cn(
                        'relative z-20 transform transition-transform duration-300',
                        imageSkewClass,
                        animateOnHover && 'group-hover:scale-105'
                    )}
                >
                    <Image
                        src={url}
                        alt={altText}
                        width={200}
                        height={200}
                        className="object-contain filter drop-shadow-lg"
                        style={{
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '280px',
                            maxHeight: '320px',
                        }}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

const PageContentSection: React.FC<ContentSectionProps> = ({
    text,
    image,
    position = 'left',
    bgColorClass = 'bg-primary',
    className,
    animateOnHover = true,
    disableAnimation,
    noBorder,
}) => {
    const isLeft = position === 'left'

    const Content = (
        <div className={cn('space-y-5', isLeft ? 'lg:pr-8' : 'lg:pl-8')}>
            <StrapiTextRenderer contentData={text} />
        </div>
    )

    return (
        <section
            className={cn(
                BASE_SECTION_STYLES,
                !disableAnimation && 'animate-bento-block',
                !noBorder && 'border border-border',
                className
            )}
        >
            {image ? (
                <div className="flex flex-col gap-12 lg:flex-row justify-center items-center lg:gap-5">
                    {isLeft ? (
                        <>
                            <ContentImage
                                url={image.url}
                                altText={image.altText}
                                skewDirection="left"
                                bgColorClass={bgColorClass}
                                animateOnHover={animateOnHover}
                            />
                            {Content}
                        </>
                    ) : (
                        <>
                            {Content}
                            <ContentImage
                                url={image.url}
                                altText={image.altText}
                                skewDirection="right"
                                bgColorClass={bgColorClass}
                                animateOnHover={animateOnHover}
                            />
                        </>
                    )}
                </div>
            ) : (
                Content
            )}
        </section>
    )
}

export default PageContentSection
