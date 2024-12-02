import { ReactNode } from "react";

export interface NavigationLinkProps {
    href: string,
    icon: ReactNode,
    label: string,
    active?: boolean,
    badge?: ReactNode
}