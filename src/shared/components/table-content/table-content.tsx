'use client'

import { Dices } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { useEffect } from 'react'

import { cn } from '@/shared/lib/css'
import { Card, CardContent } from '@/shared/ui/card'

import Typography from '../typography/typography'

const getTableContentData = (contentData: StrapiContent[]) => {
    const tableContent: TableContentItem[] = []

    contentData.forEach((item, idx) => {
        if (item.type === 'heading') {
            tableContent.push({
                heading: item.children[0].text,
                linkId: String(idx),
            })
        }
    })

    return tableContent
}

type TableContentItem = {
    heading: string
    linkId: string
}

const TableContent = ({ content }: { content: StrapiContent[] }) => {
    const pathname = usePathname()
    const tableContent = getTableContentData(content)

    return (
        <Card className={cn('bento-block lg:h-[calc(100vh-20px)] lg:top-[15px] lg:sticky')}>
            <CardContent className="border-0">
                <div className={'flex flex-col rounded-xl'}>
                    <Typography as="h3" variant="h4" className="font-bold mb-2">
                        Table Of Content
                    </Typography>
                    <ul>
                        {tableContent.map((item) => (
                            <li key={item.heading}>
                                <Link
                                    href={`#${item.linkId}`}
                                    className={`flex items-center gap-3 py-2 ${item.linkId === pathname ? 'bg-muted/40 text-primary' : ''} transition-all hover:text-primary`}
                                >
                                    {<Dices className="w-5 h-5 shrink-0" />}
                                    {item.heading}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default TableContent
