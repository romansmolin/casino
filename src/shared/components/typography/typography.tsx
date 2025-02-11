import React, { ElementType, ReactNode } from 'react';
import { cn } from '@/shared/lib/css';

type TypographyProps = {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'medium' | 'small';
    align?: 'left' | 'center' | 'right' | 'justify';
    nowrap?: boolean;
};

const Typography: React.FC<TypographyProps> = ({
    as: Component = 'p',
    children,
    className,
    variant = 'body', 
    align = 'left',
    nowrap = false,
    ...props
}) => {
    const variants: Record<NonNullable<TypographyProps['variant']>, string> = {
        h1: 'text-3xl sm:text-4xl md:text-5xl font-bold',
        h2: 'text-2xl sm:text-3xl md:text-4xl font-bold',
        h3: 'text-xl sm:text-2xl md:text-3xl font-semibold',
        h4: 'text-lg sm:text-xl md:text-2xl font-semibold',
        body: 'text-base',
        medium: 'text-md',
        small: 'text-sm',
    };

    const alignment: Record<NonNullable<TypographyProps['align']>, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    return (
        <Component
            className={cn(
                variants[variant],
                alignment[align],
                nowrap && 'whitespace-nowrap',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;