import React from 'react';
import { BonusCard } from '@/entities/bonus';

const BonusGrid = ({ bonuses }: {bonuses: Bonus[]}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {bonuses?.map((bonus) => (
                <div key={bonus.uuid}>
                    <BonusCard
                        casinoName={bonus.casinoName}
                        bonusSubtitle={bonus.bonusSubtitle}
                        bonusTitle={bonus.bonusTitle}
                        casinoLogo={bonus.casinoLogo}
                        info={bonus.info}
                        casinoUuid={bonus.casinoUuid}
                        uuid={bonus.uuid}
                        mainBonusTypeForUrl={bonus.bonusTypeForUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default BonusGrid;