'use client'

import Image from 'next/image'

import React, { useEffect } from 'react'

import useAllCountries from '@/shared/hooks/use-get-all-countries'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip'

const AllowedCountriesSection = ({ allowedCountries }: { allowedCountries: string[] }) => {
    const { countries, error } = useAllCountries()
    return (
        <TooltipProvider>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
                {countries
                    .filter((country) => allowedCountries.includes(country.name))
                    .map((country) => (
                        <Tooltip key={country.code}>
                            <TooltipTrigger asChild className="cursor-pointer">
                                <div
                                    key={country.code}
                                    className="flex items-center gap-2 p-2 border rounded-md bg-primary/10 border-primary min-w-0"
                                >
                                    <Image
                                        width={50}
                                        height={50}
                                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                                        alt={`${country.name} flag`}
                                        className="w-9 h-7 rounded-[5px] shrink-0"
                                    />
                                    <span className="text-sm font-medium truncate cursor- min-w-0">
                                        {country.name}
                                    </span>
                                </div>
                            </TooltipTrigger>

                            <TooltipContent>
                                <p>{country.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
            </div>
        </TooltipProvider>
    )
}

export default AllowedCountriesSection
