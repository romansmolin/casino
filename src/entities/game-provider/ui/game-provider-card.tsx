import Image from 'next/image'

import React from 'react'

import { Card, CardContent } from '@/shared/ui/card'

import { GameProvider } from '../model/game-provider.types'

const GameProviderCard = ({ provider }: { provider: GameProvider }) => {
    return (
        <Card className="group relative overflow-hidden transition-all duration-200 hover:shadow-lg border hover:scale-105 bg-primary/10 border-primary">
            <CardContent className="p-3">
                <div className="flex items-center justify-center">
                    <Image
                        src={provider.providerLogo || '/placeholder.svg'}
                        alt={`${provider.name} logo`}
                        className="object-contain"
                        width={80}
                        height={80}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default GameProviderCard
