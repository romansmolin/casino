import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-10px) translateX(5px)' },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                leverPull: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(45deg)' },
                    '15%': { transform: 'rotate(0deg)' },
                },
                winPulse: {
                    '0%, 15%, 100%': { opacity: '0' },
                    '80%, 90%': { opacity: '1' },
                },
                spin1: {
                    '0%': { transform: 'translateY(0)' },
                    '15%': { transform: 'translateY(-420px)' },
                    '20%, 100%': { transform: 'translateY(-50px)' },
                },
                spin2: {
                    '0%': { transform: 'translateY(0)' },
                    '15%': { transform: 'translateY(-420px)' },
                    '25%, 100%': { transform: 'translateY(-50px)' },
                },
                spin3: {
                    '0%': { transform: 'translateY(0)' },
                    '15%': { transform: 'translateY(-420px)' },
                    '30%, 100%': { transform: 'translateY(-50px)' },
                },
                bellHighlight: {
                    '0%, 35%, 100%': { opacity: '0' },
                    '40%, 90%': { opacity: '1' },
                },
                slideFadeIn: {
                    from: { opacity: '0', transform: 'translateY(5vh)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                spin: 'spin 3s linear infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                float: 'float 6s ease-in-out infinite',
                'lever-pull': 'leverPull 5s ease-in-out infinite',
                'win-pulse': 'winPulse 5s ease-in-out infinite',
                spin1: 'spin1 5s ease-in-out infinite',
                spin2: 'spin2 5s ease-in-out infinite',
                spin3: 'spin3 5s ease-in-out infinite',
                'bell-highlight': 'bellHighlight 5s ease-in-out infinite',
                'bento-block': 'slideFadeIn 1s both',
            },
        },
    },
} satisfies Config
