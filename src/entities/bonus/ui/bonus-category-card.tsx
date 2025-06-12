import Link from 'next/link'

import React from 'react'

import { Locale } from '@/shared/lib/i18n/routing'

import { BonusCategory } from '../model/bonus.types'

interface BonusCategoryCardProps extends BonusCategory {
    locale: Locale
}

const BonusCategoryCard: React.FC<BonusCategoryCardProps> = ({
    slug,
    coverImage,
    title,
    locale,
}) => {
    return (
        <Link
            key={slug}
            href={`${locale}/bonuses/${slug}`}
            className="group h-[450px] md:h-[unset] relative overflow-hidden rounded-2xl aspect-[4/5] transform transition-all duration-500 hover:-translate-y-2"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110"
                style={{
                    backgroundImage: `url(${coverImage})`,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 group-hover:bg-black/70 group-hover:backdrop-blur-md">
                        <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                            {title}
                        </h3>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-primary text-sm font-medium">
                                Explore Offers →
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-colors duration-500" />
        </Link>
    )
}

export default BonusCategoryCard
