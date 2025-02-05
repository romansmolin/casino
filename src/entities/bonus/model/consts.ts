import { Trophy, Wallet, BadgeDollarSign, RotateCcw, Gem, Bitcoin, Ribbon } from 'lucide-react'
import { BadgeConfig } from '../ui/bonus-type-badge/badge.types'

const BONUS_CATEGORIES_CONFIG: Record<string, BadgeConfig> = {
    'no-deposit-bonuses': {
        color: 'bg-[#dd6030]',
        icon: Wallet
    },
    'best-of-the-month': {
        color: 'bg-[#3030dd]',
        icon: Trophy
    },
    'real-money-bonuses': {
        color: 'bg-[#fdd55e]',
        icon: BadgeDollarSign
    },
    'cashback-bonuses': {
        color: 'bg-[#77bd58]',
        icon: RotateCcw
    },
    'welcome-bonuses': {
        color: 'bg-[#c90076]',
        icon: Gem
    },
    'crypto-bonuses': {
        icon: Bitcoin,
        color: 'bg-[#44a8f3]'
    },
    '20-free-spins-bonuses': {
        icon: Ribbon,
        color: 'bg-[#5bcd9e]'
    },
    '50-free-spins-bonuses': {
        icon: Ribbon,
        color: 'bg-[#9855da]'
    },
    '100-free-spins-bonuses': {
        icon: Ribbon,
        color: 'bg-[#55bada]'
    },
}

const FREE_SPINS_TYPES: { label: string, color: string }[] = [
    { label: '20-free-spins-bonuses', color: 'bg-[#5bcd9e]' },
    { label: '50-free-spins-bonuses', color: 'bg-[#9855da]' },
    { label: '100-free-spins-bonuses', color: 'bg-[#55bada]' }
]

export {
    BONUS_CATEGORIES_CONFIG,
    FREE_SPINS_TYPES
}
