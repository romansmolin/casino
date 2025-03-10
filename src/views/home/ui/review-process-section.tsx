import Typography from '@/shared/components/typography/typography'
import { Building2Icon, SquarePen, Binoculars } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

const ReviewProcessSection = async () => {
    const t = await getTranslations('review-process')


    return (
        <>
            {/* Icon Blocks */}
            <div className="relative bento-block animate-bento-block grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[unset] lg:grid-cols-5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-3xl" />
                <div className="lg:col-span-3">
                    {/* Grid */}
                    <div className="grid gap-12 ">
                        <div>
                            <Typography as="h2" variant='h1'>{t('title')}</Typography>
                            <p className="mt-3 text-muted-foreground text-pretty text-justify">
                                {t('subtitle')}
                            </p>
                        </div>
                        <div className="space-y-6 lg:space-y-10">
                            {/* Icon Block */}
                            <div className="flex">
                                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        {t('first-pargraph.title')}
                                    </h3>
                                    <p className="mt-1 text-muted-foreground text-pretty text-justify">
                                        {t('first-pargraph.text')}
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex">
                                <Binoculars className="flex-shrink-0 mt-2 h-6 w-6" />
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        {t('second-pargraph.title')}
                                    </h3>
                                    <p className="mt-1 text-muted-foreground text-pretty text-justify">
                                        {t('second-pargraph.text')}
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                            {/* Icon Block */}
                            <div className="flex">
                                <SquarePen className="flex-shrink-0 mt-2 h-6 w-6" />
                                <div className="ms-5 sm:ms-8">
                                    <h3 className="text-base sm:text-lg font-semibold">
                                        {t('third-pargraph.title')}
                                    </h3>
                                    <p className="mt-1 text-muted-foreground text-pretty text-justify">
                                        {t('third-pargraph.text')}
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                    {/* End Grid */}
                </div>
                <div className='flex justify-center items-center flex-1 lg:col-span-2'>
                    <Image
                        src={'/assets/review_process.png'}
                        alt='Review Procees'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            {/* End Icon Blocks */}
        </>
    )
}

export default ReviewProcessSection