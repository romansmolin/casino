import { BonusCategoryPage } from '@/views/bonus-category';
import React from 'react';

interface BonusCategoryProps {
    params: {
        bonusCategory: BonusCategoryType;
    };
    searchParams: Promise<{ [key: string]: string | undefined }>
}

const BonusCategory: React.FC<BonusCategoryProps> = async ({ params, searchParams }) => {
    const { bonusCategory } = await params;
    const sp = await searchParams;
    const { page } = sp

    return <BonusCategoryPage bonusCategory={bonusCategory} currentPage={page ? parseInt(page) : 1} />;
};

export default BonusCategory;