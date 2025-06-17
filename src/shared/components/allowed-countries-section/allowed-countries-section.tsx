'use client'

import Image from 'next/image'

import React, { useEffect } from 'react'

import useAllCountries from '@/shared/hooks/use-get-all-countries'

const AllowedCountriesSection = ({ allowedCountries }: { allowedCountries: string[] }) => {
    const { countries, error } = useAllCountries()
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {countries
                .filter((country) => allowedCountries.includes(country.name))
                .map((country) => (
                    <div
                        key={country.code}
                        className="flex items-center gap-2 p-2 border rounded-md"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                            alt={`${country.name} flag`}
                            className="w-9 h-7 rounded-[5px]"
                        />
                        <span className="text-sm font-medium text-green-500">
                            {country.name}
                        </span>
                    </div>
                ))}
        </div>
    )
}

export default AllowedCountriesSection
