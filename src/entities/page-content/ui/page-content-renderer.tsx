import React from 'react'

import { PageContentItem } from '../model/page-content.types'
import PageContentFaq from './page-content-faq'
import PageContentSection from './page-content-section'

interface ContentRendererProps {
    pageContent: PageContentItem[]
}

const content: Record<string, any> = {
    faq: (faq: any, idx: number) => <PageContentFaq faqs={faq.content[0].faqs} key={idx} />,
    contentSection: (contentItem: any, idx: number) => (
        <PageContentSection
            key={idx}
            className="flex-col"
            position={contentItem.position}
            text={contentItem.content}
            image={contentItem.image}
        />
    ),
}

const PageContentRenderer: React.FC<ContentRendererProps> = ({ pageContent }) => {
    return (
        <div className="flex flex-col rounded-xl gap-5 w-[100%] bg-clip-border">
            {pageContent?.map((contentItem, idx) => {
                const renderContent = content[contentItem.type]
                return renderContent ? renderContent(contentItem, idx) : null
            })}
        </div>
    )
}

export default PageContentRenderer
