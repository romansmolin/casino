import React from 'react';
import PageContentSection from './page-content-section';

type Content = {
    type: string;
    image: string;
    content: any;
};

interface ContentRendererProps {
    pageContent: Content[];
}

const content: Record<string, any> = {
    // faq: (contentItem: any, idx: number) => <Faq key={idx} questions={contentItem.content[0].faqs} />,
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