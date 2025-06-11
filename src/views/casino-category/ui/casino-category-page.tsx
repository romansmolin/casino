import React from 'react'

import { CasinoGridWithPagination } from '@/features/casino'

interface CasinoCategoryPageProps {
    category: string
    currentPage: number
}

const CasinoCategoryPage: React.FC<CasinoCategoryPageProps> = ({ category, currentPage }) => {
    return <CasinoGridWithPagination casinosCategory={category} currentPage={currentPage} />
}

export default CasinoCategoryPage
