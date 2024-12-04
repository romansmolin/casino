import {
    AudioWaveform,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    PieChart,
    SquareTerminal,
} from 'lucide-react'

export const menu = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    bonuses: [
        {
            title: 'no-deposit-bonus',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    icon: SquareTerminal,
                    title: 'Free Spins Bonuses',
                    url: '#',
                },
                {
                    title: 'Free Cash Bonuses',
                    url: '#',
                },
                {
                    title: '0 Wager Bonuse',
                    url: '#',
                },
            ],
        },
        {
            title: 'real-money-bonus',
            url: '#',
            icon: Bot,
            isActive: true,
            items: [
                {
                    title: 'Welcome Bonuses',
                    url: '#',
                },
                {
                    title: 'Cashback Bonuses',
                    url: '#',
                },
                {
                    title: 'Crypto Bonuses',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
}
