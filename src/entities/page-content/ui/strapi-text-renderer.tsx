import { cn } from '@/shared/lib/css';
import React from 'react'

const StrapiTextRenderer = ({ contentData }: { contentData: StrapiContent[] }) => {
    return (
        contentData.map((item: any, index: number) => {
            if (item.type === "heading") {
                return <h3 key={index} id={String(index)} className="text-5xl scroll-my-14 font-bold break-words">{item.children[0].text}</h3>;
            } else if (item.type === "paragraph") {
                return (
                    <div key={item.children.text} id={item.children.text} className="text-justify leading-8">
                        {item.children.map((text: StrapiContentItem) => (
                            <span key={text.text} className={cn(text.bold ? 'font-bold text-primary' : '')}>
                                {text.text}
                            </span>
                        ))}
                    </div>
                );
            } else {
                return null;
            }
        })
    )
}

export default StrapiTextRenderer