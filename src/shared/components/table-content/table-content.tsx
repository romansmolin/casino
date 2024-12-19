'use client'

import { Dices } from 'lucide-react';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getTableContentData = (contentData: StrapiContent[]) => {
    const tableContent: TableContentItem[] = []

    contentData.forEach((item, idx) => {
        if (item.type === 'heading') {
            tableContent.push({
                heading: item.children[0].text, 
                linkId: String(idx)
            })
        }
    })

    return tableContent
}

type TableContentItem = {
    heading: string;
    linkId: string
}

const TableContent = ({content}: {content:StrapiContent[] }) => {
    const pathname = usePathname()
    const tableContent = getTableContentData(content)
    
    return (
        <div className={'flex flex-col lg:max-w-86 rounded-xl'}>
            <h3 className="font-bold">Table Of Content</h3>
            <ul>
                {tableContent.map((item) => (
                    <li key={item.heading}>
                        <Link
                            href={`#${item.linkId}`}
                            className={`flex items-center gap-3 py-2 ${item.linkId === pathname ? 'bg-muted/40 text-primary' : ''} transition-all hover:text-primary`}
                        >
                            {<Dices className="w-5 h-5 flex-shrink-0"/>}
                            {item.heading}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableContent