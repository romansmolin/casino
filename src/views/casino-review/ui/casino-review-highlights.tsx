import RatingCircle from '@/shared/components/rating-circle/rating-circle'
import { Card, CardContent } from '@/shared/ui/card'
import { Check } from 'lucide-react'
import React from 'react'

type ReadableFeatures = {
    [key: string]: string
}

const readableFeatures: ReadableFeatures = {
    crypto_casino: 'Bet with the future! Enjoy seamless transactions with cryptocurrency.',
    no_deposit_bonus_available:
        'Winning starts before you even deposit! Claim your bonus without spending a dime.',
    support_available: 'Never play alone! Get instant support whenever you need it.',
    valid_license: 'Play with peace of mind! Our casino is fully licensed and regulated.',
    aviator_game_available: 'Take flight to big wins! Explore our exhilarating aviator games.',
    vip_available: 'Elevate your gaming experience! Unlock exclusive perks with our VIP program.',
}

interface CasinoReviewHighlightsProps {
    casinoName: string
    features: string[]
    rating: number
}

const CasinoReviewHighlights: React.FC<CasinoReviewHighlightsProps> = ({ casinoName, features, rating }) => {
    return (
        <Card>
            <CardContent className="bento-block space-y-8 ">
                <div className="flex flex-col rounded-xl lg:w-[100%]">
                    <h1 className="text-4xl text-gradient font-bold pb-4 border-b-2">{casinoName} Review</h1>

                    <div className="mt-5 flex flex-col lg:flex-row justify-between gap-12">
                        <div>
                            <ul className="space-y-4 max-w- text-left">
                                {features?.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex text-justify items-center space-x-3 rtl:space-x-reverse">
                                        <Check />
                                        <span>{readableFeatures[feature]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 sm:mt-0 flex flex-col gap-2 items-center justify-center">
                            <RatingCircle rating={rating} className="size-44" textClass="text-3xl" />
                            <span className="text-2xl font-bold text-primary-400">Rating</span>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-end mt-6 text-primary-600 font-bold">
                        <span className="text-sm">
                            Terms & Conditions Apply. You must be at least 18 years old to visit this casino.
                            Gamble Responsibly!
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CasinoReviewHighlights
