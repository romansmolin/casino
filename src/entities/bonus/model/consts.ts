import { Trophy, Wallet, BadgeDollarSign, RotateCcw, Gem, Bitcoin } from 'lucide-react'
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
    }
}

export {
    BONUS_CATEGORIES_CONFIG
}