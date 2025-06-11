import { Check } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import React from 'react'

import RatingCircle from '@/shared/components/rating-circle/rating-circle'
import Typography from '@/shared/components/typography/typography'
import { AnimatedCircularProgressBar } from '@/shared/magicui/animated-circular-progress-bar'
import { Card, CardContent } from '@/shared/ui/card'

interface CasinoReviewHighlightsProps {
    casinoName: string
    features: string[]
    rating: number
}

const getRatingColor = (rating: number) => {
    if (rating <= 20) return 'oklch(63.7% .237 25.331)'
    if (rating > 20 && rating <= 60) return 'oklch(85.2% .199 91.936)'
    return 'oklch(72.3% .219 149.579)'
}

const CasinoReviewHighlights: React.FC<CasinoReviewHighlightsProps> = async ({
    casinoName,
    features,
    rating,
}) => {
    const t = await getTranslations('casino-review-highlights')
    const ratingColor = getRatingColor(rating)

    console.log(ratingColor)
    return (
        <Card className="flex-1">
            <CardContent className="bento-block space-y-5 h-full">
                <div className="flex flex-col rounded-xl lg:w-[100%] h-full">
                    <Typography variant="h1" as="h1" className="font-bold pb-4 border-b-2">
                        {casinoName} Review
                    </Typography>

                    <div className="grow flex flex-col justify-between mt-5 lg:flex-row gap-4">
                        <div>
                            <ul className="space-y-4 max-w- text-left">
                                {features?.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex text-justify items-center space-x-3 rtl:space-x-reverse"
                                    >
                                        <span className="p-1 rounded-full flex items-center justify-center bg-primary/20">
                                            <Check />
                                        </span>
                                        <span>{t(feature)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 sm:mt-0 flex flex-col gap-2 items-center justify-center ">
                            <AnimatedCircularProgressBar
                                max={100}
                                min={0}
                                value={rating}
                                gaugePrimaryColor={ratingColor}
                                gaugeSecondaryColor="var(--muted)"
                            />
                            <span
                                className="text-2xl font-bold"
                                style={{ color: ratingColor }}
                            >
                                Rating
                            </span>
                        </div>
                    </div>

                    <div className="grow flex flex-col justify-end mt-6 text-primary-600 font-bold">
                        <span className="text-sm">
                            Terms & Conditions Apply. You must be at least 18 years old to
                            visit this casino. Gamble Responsibly!
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CasinoReviewHighlights
