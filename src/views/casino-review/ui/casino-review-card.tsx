import Typography from '@/shared/components/typography/typography'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import Image from 'next/image'
import React from 'react'

interface CasinoHighlightProps {
	casinoName: string
	bonusTitle: string
	logo: string
}

const CasinoReviewCard: React.FC<CasinoHighlightProps> = ({ casinoName, logo, bonusTitle }) => {
	return (
		<Card className='lg:w-1/3 bg-muted/50 md:min-h-min'>
				<CardContent className='space-y-5 p-3 flex flex-col items-center '>
					<div className='rounded-xl w-full h-[100px] bg-primary flex justify-center items-center'>
						<Image
							width={150}
							height={50}
							src={logo}
							alt={`${casinoName} logo`}
						/>
					</div>

					<Typography as="h2" variant='h2'>{casinoName}</Typography>
					<Typography as="h3" variant='h3'>{bonusTitle}</Typography>
					<Button>Play Now</Button>
				</CardContent>
		</Card>
	)
}

export default CasinoReviewCard