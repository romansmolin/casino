'use client'

import Image from 'next/image'

import React from 'react'

import useGeolocation from '@/shared/hooks/use-geolocation'
import { Icons } from '@/shared/ui/icons'
import { Skeleton } from '@/shared/ui/skeleton'

const CasinoAvailability = ({ allowedCountries }: { allowedCountries: string[] }) => {
    const { location, error } = useGeolocation()
    const isAllowed = location ? allowedCountries.includes(location.country || '') : null

    if (error) return null

    return (
        <div className="bento-block p-5 transition-all duration-300">
            {location ? (
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                        {isAllowed ? (
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                <Icons.check className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                                <Icons.x className="w-5 h-5 text-red-600 dark:text-red-400" />
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <p
                            className={`text-base font-medium truncate ${isAllowed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                        >
                            {isAllowed
                                ? 'Available in Your Region'
                                : 'Not Available in Your Region'}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                            {location.country}
                        </p>
                    </div>

                    {location.countryCode !== 'Unknown' && (
                        <div className="flex-shrink-0">
                            <Image
                                width={50}
                                height={50}
                                src={`https://flagcdn.com/w80/${location.countryCode.toLowerCase()}.png`}
                                alt={`${location.country} flag`}
                                className="w-10 h-8 rounded-[10px] object-cover shadow-sm"
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                        <Skeleton className="h-5 w-[180px] mb-2" />
                        <Skeleton className="h-4 w-[120px]" />
                    </div>
                    <Skeleton className="w-10 h-8 rounded-md" />
                </div>
            )}
        </div>
    )
}

export default CasinoAvailability
