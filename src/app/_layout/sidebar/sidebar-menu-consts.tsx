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
            title: 'bonuses',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    icon: SquareTerminal,
                    title: 'No Deposit Bonuses',
                    url: 'category/no-deposit-bonuses',
                },
                {
                    title: 'Free Spins Bonuses',
                    url: 'category/free-spins-bonuses',
                },
                {
                    title: 'Free Cash Bonuses',
                    url: 'category/free-cash-bonuses',
                },
                {
                    title: '0 Wager Bonuse',
                    url: 'category/0-wager-bonuses',
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
