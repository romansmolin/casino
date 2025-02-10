import { Bitcoin, Zap, Sparkles, Trophy, LucideIcon } from 'lucide-react'

const CASINO_CATEGORIES_CONFIG: Record<string, { color: string; icon?: LucideIcon }> = {
    'crypto-casinos': {
        color: 'bg-[#dd6030]',
        icon: Bitcoin,
    },
    'pay-n-play-casinos': {
        color: 'bg-[#3030dd]',
        icon: Zap,
    },
    'fresh-casinos': {
        color: 'bg-[#fdd55e]',
        icon: Sparkles,
    },
    'sportsbook-casinos': {
        color: 'bg-[#77bd58]',
        icon: Trophy,
    },
}

export {
    CASINO_CATEGORIES_CONFIG
}