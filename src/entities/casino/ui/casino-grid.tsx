import React from 'react';
import { cn } from '@/shared/lib/css';
import CasinoCard from './casino-card';

const CasinoGrid = ({ casinos, horizontalyScrollable = false }: {casinos: Casino[], horizontalyScrollable?: boolean}) => {
    const horizontalyScrollableClass = 'flex overflow-x-scroll lg:overflow-auto md:flex-col gap-5 mt-5' 

    return (
        <div className={cn('grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 no-scrollbar', horizontalyScrollable ? horizontalyScrollableClass : '')}>
            {casinos?.map((casino) => (
                <CasinoCard 
                    key={casino.uuid}
                    uuid={casino.uuid} 
                    name={casino.name}
                    bonusTitle={casino.bonus_title} 
                    logoUrl={casino.logoUrl} 
                    features={casino.features} 
                    rating={casino.rating} 
                    casinoType={casino.casinoType}                    
                />
            ))}
        </div>
    );
};

export default CasinoGrid;