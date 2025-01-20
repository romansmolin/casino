import { fetchPageContentBySlug, PageContentRenderer } from '@/entities/page-content'
import { BonusGridWithPagination } from '@/features/bonus'
import React from 'react'

const BonusCategoryPage = async ({ bonusCategory, currentPage }: { bonusCategory: BonusCategoryType, currentPage: number }) => {
    const { pageContent } = await fetchPageContentBySlug(bonusCategory)
    
    return (
        <> 
            <BonusGridWithPagination 
                bonusCategory={bonusCategory}
                currentPage={currentPage}
            />
            {pageContent && (
                <PageContentRenderer pageContent={pageContent}/>
            )}
        </>
    )
}

export default BonusCategoryPage