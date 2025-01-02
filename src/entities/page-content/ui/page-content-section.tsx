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
    image: {
        url: string
    }
    position?: 'rigth' | 'left'
    imageBackgroundColor?: string
}

const PageContentSection: React.FC<ContentSectionProps> = ({ text, image, position = 'left', imageBackgroundColor = 'bg-primary' }) => {
    const isLeft = position === 'left';

    return (
        <section className='px-5 py-7 pr-0 md:pr-5 flex-1 bg-muted/50 md:min-h-min rounded-xl'>
            <div className="flex justify-center items-center gap-5">
                {isLeft && (
                    <div className="w-full flex justify-center order-1 lg:order-1">
                        <div
                            style={{ backgroundColor: imageBackgroundColor }}
                            className={cn(
                                `flex justify-center w-[90%] h-[400px] rounded-xl  transform skew-y-3`,
                            )}
                        >
                            <Image
                                src={image.url}
                                alt="Href"
                                width={200}
                                height={200}
                                className="object-contain"
                                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                    </div>
                )}
                <div className={cn('space-y-8 ', isLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1')}>
                    <StrapiTextRenderer contentData={text} />
                </div>
                {!isLeft && (
                    <div className="w-full h-full flex justify-center items-center order-2 lg:order-3">
                        <div
                            style={{ backgroundColor: imageBackgroundColor }}
                            className={cn(
                                'flex justify-center w-[90%] h-[400px] rounded-xl transform -skew-y-3'
                            )}
                        >
                            <Image
                                src={image.url}
                                alt="Href"
                                width={200}
                                height={200}
                                className="object-contain"
                                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PageContentSection
