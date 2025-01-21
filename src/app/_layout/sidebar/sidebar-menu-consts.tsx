import {
    Bot,
    SquareTerminal,
    Landmark
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
        {
            title: 'casinos',
            url: '#',
            icon: Landmark,
            isActive: true,
            items: [
                {
                    title: 'Sportsbook Casinos',
                    url: 'casino-category/sportsbook-casinos',
                },
                {
                    title: 'Pay N Play Casino',
                    url: 'casino-category/pay-n-play-casinos',
                },
                {
                    title: 'Crypto Casinos',
                    url: 'casino-category/crypto-casinos',
                },
                {
                    title: 'Fresh Casinos',
                    url: 'casino-category/fresh-casinos',
                },
            ],
        },
    ],
}
