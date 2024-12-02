import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import RatingCircle from '@/shared/components/rating-circle/rating-circle'

const CasinoTopCard = ({ casino }: {casino: CasinoEntry}) => {
    return (
        <div className="min-w-[305px] shadow-lg lg:w-[unset] grid grid-cols-1 md:grid-cols-5 justify-between gap-4 p-5 items-center rounded-xl box-border border">
            {/* Logo */}
            <div className="md:col-span-1 h-[170px] bg-primary p-4 rounded-xl flex items-center justify-center">
                <div className="w-full md:w-[150px] h-full flex justify-center items-center">
                    <Image src={casino.logo} alt={`${casino.title} Logo`} width={150} height={150} />
                </div>
            </div>

            {/* Text */}
            <div className="md:col-span-2 flex flex-col items-center justify-between lg:p-4 leading-normal text-center md:text-left">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gradient">{casino.title}</h5>
                <p className="mb-3 text-primary-400 text-center font-bold">{casino.main_bonus_title}</p>
            </div>

            {/* Rating */}
            <div className="md:col-span-1">
                <div className="flex flex-col items-center my-auto">
                    <RatingCircle rating={casino.rating} />
                    <span className="text-primary-400 font-bold">Rating</span>
                </div>
            </div>


            {/* Buttons */}
            <div className="md:col-span-1 flex justify-center w-full md:w-auto">
                <div className="flex flex-col gap-3 w-full lg:w-44">
                    <Button>Play Now!</Button>
                    <Button asChild>
                        <Link
                            href={{
                                // pathname: `/review/${getUserFriendlyUrl(name)}/`,
                                query: {
                                    id: casino.casino,
                                },
                            }}
                        >
                            Review
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CasinoTopCard