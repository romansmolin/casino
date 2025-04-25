import React from 'react'
import Image from 'next/image'
import { cn } from '@/shared/lib/css'
import StrapiTextRenderer from './strapi-text-renderer'

type Paragraph = {
    type: string
    children: any
}

interface ContentSectionProps {
    text: Paragraph[]
    image?: {
        url: string
    }
    position?: 'rigth' | 'left'
    imageBackgroundColor?: string
    className?: string
}

const PageContentSection: React.FC<ContentSectionProps> = ({
    text,
    image,
    position = 'left',
    imageBackgroundColor = 'bg-primary',
    className,
}) => {
    const isLeft = position === 'left'

    return (
        <section className={cn('bento-block border border-border animate-bento-block', className)}>
            {image && (
                <>
                    <div className="flex flex-col gap-12 lg:flex-row justify-center items-center lg:gap-5">
                        {isLeft && (
                            <div className="w-full flex justify-center order-1 lg:order-1">
                                <div
                                    style={{ backgroundColor: imageBackgroundColor }}
                                    className={cn(
                                        `relative group flex justify-center items-center w-[90%] h-[400px] rounded-2xl transform skew-y-3 
                                        transition-all duration-300 hover:scale-[1.02] overflow-hidden
                                        before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))] before:z-10
                                        after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)] after:z-10
                                        shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)]
                                        bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-transparent to-[rgba(0,0,0,0.1)]
                                        border border-[rgba(255,255,255,0.1)]
                                        backdrop-blur-[2px]`
                                    )}>
                                    {/* Animated background patterns */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.05),transparent_30%)] animate-pulse delay-75" />
                                    </div>
                                    <div className="relative z-20 transform -skew-y-3 transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            src={image.url}
                                            alt="Content image"
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
                        )}
                        <div
                            className={cn(
                                'space-y-5 ',
                                isLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1'
                            )}>
                            <StrapiTextRenderer contentData={text} />
                        </div>
                        {!isLeft && (
                            <div className="w-full h-full flex justify-center items-center order-2 lg:order-3">
                                <div
                                    style={{ backgroundColor: imageBackgroundColor }}
                                    className={cn(
                                        `relative group flex justify-center items-center w-[90%] h-[400px] rounded-2xl transform -skew-y-3 
                                        transition-all duration-300 hover:scale-[1.02] overflow-hidden
                                        before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))] before:z-10
                                        after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)] after:z-10
                                        shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)]
                                        bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-transparent to-[rgba(0,0,0,0.1)]
                                        border border-[rgba(255,255,255,0.1)]
                                        backdrop-blur-[2px]`
                                    )}>
                                    {/* Animated background patterns */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.05),transparent_30%)] animate-pulse delay-75" />
                                    </div>
                                    <div className="relative z-20 transform skew-y-3 transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            src={image.url}
                                            alt="Content image"
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
                        )}
                    </div>
                </>
            )}

            {!image && (
                <div className={cn('space-y-5 ', isLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1')}>
                    <StrapiTextRenderer contentData={text} />
                </div>
            )}
        </section>
    )
}

export default PageContentSection
