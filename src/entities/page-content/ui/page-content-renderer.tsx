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
    faq: (faq: any, idx: number) => 
        <section key={`faq-${idx}`} className="flex-1 space-y-8 bento-block">
            <h2 className='text-4xl font-extrabold tracking-tight'>Frequently Asked Questions</h2>
            <Accardion items={faq.content[0].faqs} />
        </section>,
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