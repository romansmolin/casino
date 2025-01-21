import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator';
import { BonusCategoryPage } from '@/views/bonus-category';
import React, { Suspense } from 'react';

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

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <BonusCategoryPage bonusCategory={bonusCategory} currentPage={page ? parseInt(page) : 1} />;
        </Suspense>
    )
};

export default BonusCategory;