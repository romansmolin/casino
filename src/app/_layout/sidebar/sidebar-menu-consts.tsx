import {
    Bot,
    SquareTerminal,
    Landmark,
    Info,
    MessageCircleQuestion
} from 'lucide-react'
export const menu = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    bonuses: [
        {
            title: 'bonuses',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    icon: SquareTerminal,
                    title: 'no-deposit-bonuses',
                    url: 'category/no-deposit-bonuses',
                },
                {
                    title: 'free-spins-bonuses',
                    url: 'category/free-spins-bonuses',
                },
                {
                    title: 'free-cash-bonuses',
                    url: 'category/free-cash-bonuses',
                },
                {
                    title: 'wager-free-bonuses',
                    url: 'category/0-wager-bonuses',
                },
            ],
        },
        {
            title: 'real-money-bonuses',
            url: '#',
            icon: Bot,
            isActive: true,
            items: [
                {
                    title: 'welcome-bonuses',
                    url: '#',
                },
                {
                    title: 'cashback-bonuses',
                    url: '#',
                },
                {
                    title: 'crypto-bonuses',
                    url: '#',
                },
            ],
        },
        {
            title: 'casinos',
            url: '#',
            icon: Landmark,
            isActive: true,
            items: [
                {
                    title: 'sportsbook-casinos',
                    url: 'casino-category/sportsbook-casinos',
                },
                {
                    title: 'pay-n-play-casinos',
                    url: 'casino-category/pay-n-play-casinos',
                },
                {
                    title: 'crypto-casinos',
                    url: 'casino-category/crypto-casinos',
                },
                {
                    title: 'fresh-casinos',
                    url: 'casino-category/fresh-casinos',
                },
            ],
        },
        {
            title: 'info',
            url: '#',
            icon: Info,
            // isActive: true,
            items: [
                {
                    title: 'about-us',
                    url: '/about-us',
                },
                {
                    title: 'terms-and-conditions',
                    url: '/terms-and-conditions',
                },
                {
                    title: 'contact-us',
                    url: '/contact-us',
                },
            ],
        },
    ],
}
