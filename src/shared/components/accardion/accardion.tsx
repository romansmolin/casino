import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/ui/collapsible'

type AccordionItem = {
    label: string
    text: string
}
interface FaqProps {
    items: AccordionItem[]
}

const Accardion: React.FC<FaqProps> = ({ items }) => {
    return (
        <div>
            <div className="space-y-4">
                {items.map(item => (
                    <Collapsible key={item.label}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-4 py-3 rounded-md">
                            <h3 className="text-lg font-medium">{item.label}</h3>
                            <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 ">
                            {item.text}
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    )
}

export default Accardion