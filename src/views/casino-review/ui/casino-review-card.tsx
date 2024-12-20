import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import Image from 'next/image'
import React from 'react'

interface CasinoHighlightProps {
	casinoName: string
	bonusTitle: string
	logo: string
	className?: string
}

const CasinoReviewCard: React.FC<CasinoHighlightProps> = ({ casinoName, logo, bonusTitle, className }) => {
	return (
		<Card className='lg:w-1/3 bg-muted/50 md:min-h-min border-0'>
				<CardContent className='space-y-5 p-3 flex flex-col items-center '>
					<div className='rounded-xl w-full h-[100px] bg-primary flex justify-center items-center'>
						<Image
							width={150}
							height={50}
							src={logo}
							alt={`${casinoName} logo`}
						/>
					</div>

					<h2 className='text-2xl text-center font-extrabold tracking-tight'>{casinoName}</h2>

					<h3 className='text-xl text-center font-extrabold tracking-tight'>{bonusTitle}</h3>

					<Button>Play Now</Button>
				</CardContent>
		</Card>
	)
}

export default CasinoReviewCard