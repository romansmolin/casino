import { fetchPageContentBySlug, PageContentRenderer } from '@/entities/page-content'
import { BonusGridWithPagination } from '@/features/bonus'
import React from 'react'

const BonusCategoryPage = async ({ bonusCategory }: { bonusCategory: BonusCategoryType }) => {
    const { pageContent } = await fetchPageContentBySlug(bonusCategory)
    
    return (
        <> 
            <BonusGridWithPagination 
                bonusCategory={bonusCategory}
                currentPage={1}
                totalPages={1}
                totalItems={1}
                itemsPerPage={10}
            />
            <PageContentRenderer pageContent={pageContent}/>
        </>
    )
}

export default BonusCategoryPage