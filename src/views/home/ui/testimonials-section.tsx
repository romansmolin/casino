'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import Typography from '@/shared/components/typography/typography'
import { Card, CardContent } from '@/shared/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/shared/ui/carousel'

interface TestimonialSliderCardProps {
    testimonials: {
        quote: string
        name: string
        role: string
        imgSrc: string
    }[]
}

export default function TestimonialSection({ testimonials }: TestimonialSliderCardProps) {
    return (
        <section className="relative bento-block animate-bento-block">
            {/* <div className="absolute inset-0 bg-linear-to-r from-primary to-primary-foreground opacity-20 blur-3xl" /> */}

            <Typography as="h2" variant="h1" className="text-center">
                Loved by business and individuals across the globe
            </Typography>
            <div className="mx-auto lg:max-w-6xl px-3">
                <Carousel
                    opts={{
                        loop: true,
                        align: 'start',
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="shadow-xs">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="flex flex-col px-4 py-5 sm:p-6">
                                            <q className="flex-1 text-gray-600 dark:text-gray-300">
                                                {testimonial.quote}
                                            </q>
                                            <div className="mt-6 flex gap-3">
                                                <span className="inline-flex rounded-full">
                                                    <Image
                                                        className="h-10 w-10 rounded-full"
                                                        height={40}
                                                        width={40}
                                                        alt={testimonial.name}
                                                        src={testimonial.imgSrc}
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 fill-black" />
                    <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 fill-black" />
                </Carousel>
            </div>
        </section>
    )
}
