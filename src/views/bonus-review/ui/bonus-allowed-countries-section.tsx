import CountryFlags from '@/shared/utils/country-flag'
import React from 'react'

const BonusAllowedCountriesSection = ({ countries }: { countries: string[] }) => {
    return (
        <div className='flex gap-4 flex-wrap'>
            {countries.map(country => {
                const FlagComponent = CountryFlags[country]; // Get the component
                
                return FlagComponent ? <FlagComponent key={country} /> : null
            })}
        </div>
    );
}

export default BonusAllowedCountriesSection;
