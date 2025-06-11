import { Bot, Info, Landmark, SquareTerminal } from 'lucide-react'

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
                    url: 'bonuses/no-deposit-bonuses',
                },
                {
                    title: 'free-spins-bonuses',
                    url: 'bonuses/free-spins-bonuses',
                },
                {
                    title: 'free-cash-bonuses',
                    url: 'bonuses/free-cash-bonuses',
                },
                {
                    title: 'wager-free-bonuses',
                    url: 'bonuses/0-wager-bonuses',
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
                    url: 'bonuses/welcome-bonuses',
                },
                {
                    title: 'cashback-bonuses',
                    url: 'bonuses/cashback-bonuses',
                },
                {
                    title: 'crypto-bonuses',
                    url: 'bonuses/crypto-bonuses',
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
                    url: 'casinos/sportsbook-casinos',
                },
                {
                    title: 'pay-n-play-casinos',
                    url: 'casinos/pay-n-play-casinos',
                },
                {
                    title: 'crypto-casinos',
                    url: 'casinos/crypto-casinos',
                },
                {
                    title: 'fresh-casinos',
                    url: 'casinos/fresh-casinos',
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
