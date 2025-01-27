import { CasinoGridWithPagination } from '@/features/casino';
import React from 'react'

interface CasinoCategoryPageProps {
    category: string;
    currentPage: number
}

const CasinoCategoryPage: React.FC<CasinoCategoryPageProps> = ({ category, currentPage }) => {

    return (
        <CasinoGridWithPagination casinosCategory={category} currentPage={currentPage}/>
    )
}

export default CasinoCategoryPage