import { ModeToggle } from '@/shared/components/mode-toggle/mode-toggle'
import { SidebarTrigger } from '@/shared/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const Header = () => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-between w-full gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header