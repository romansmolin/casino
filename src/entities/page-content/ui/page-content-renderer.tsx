import React from 'react';
import PageContentSection from './page-content-section';
import { Accardion } from '@/shared/components/accardion';

type Content = {
    type: string;
    image: string;
    content: unknown | AccordionItem;
};

type AccordionItem = {
    label: string
    text: string
}

interface ContentRendererProps {
    pageContent: Content[];
}

const content: Record<string, any> = {
    faq: (faq: any) => <div className="flex-1 px-5 py-7 md:pr-5 space-y-8 rounded-xl bg-muted/50 md:min-h-min">
        <h2 className='text-4xl font-extrabold tracking-tight'>Frequently Asked Questions</h2>
        <Accardion items={faq.content[0].faqs} />
    </div>,
    contentSection: (contentItem: any, idx: number) => <PageContentSection key={idx} position={contentItem.position} text={contentItem.content} image={contentItem.image} imageBackgroundColor={contentItem.imageBackgroundColor} />
};

const PageContentRenderer: React.FC<ContentRendererProps> = ({ pageContent }) => {
    return (
        <div className="flex flex-col rounded-xl gap-5 w-[100%] bg-clip-border">
            {pageContent.map((contentItem, idx) => {
                const renderContent = content[contentItem.type];
                return renderContent ? renderContent(contentItem, idx) : null;
            })}
        </div>
    );
};

export default PageContentRenderer;