import Image from 'next/image'

import React from 'react'

import { Card, CardContent } from '@/shared/ui/card'

import type { PaymentProvider } from '../model/payment-provider.types'

const PaymentProviderCard = ({ provider }: { provider: PaymentProvider }) => {
    return (
        <Card className="group relative overflow-hidden transition-all duration-200 hover:shadow-lg bg-primary/10 hover:scale-105 border border-primary">
            <CardContent className="">
                <div className="flex items-center justify-center">
                    <Image
                        src={provider.paymentLogo || '/placeholder.svg'}
                        alt={`${provider.name} logo`}
                        className=" object-cover"
                        width={80}
                        height={80}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default PaymentProviderCard
