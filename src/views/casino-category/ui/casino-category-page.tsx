import React from 'react'

import { CasinoGridWithPagination } from '@/features/casino'

interface CasinoCategoryPageProps {
    category: string
    currentPage: number
    title: string
}

const CasinoCategoryPage: React.FC<CasinoCategoryPageProps> = ({
    category,
    currentPage,
    title,
}) => {
    return (
        <CasinoGridWithPagination
            casinosCategory={category}
            currentPage={currentPage}
            title={title}
        />
    )
}

export default CasinoCategoryPage
