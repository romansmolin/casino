import { BonusCategoryPage } from '@/views/bonus-category';
import React from 'react';

interface BonusCategoryProps {
    params: {
        bonusCategory: BonusCategoryType;
    };
}

const BonusCategory: React.FC<BonusCategoryProps> = async ({ params }) => {
    const { bonusCategory } = params;
    
    return <BonusCategoryPage bonusCategory={bonusCategory}/>;
};

export default BonusCategory;