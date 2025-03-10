import React from 'react'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'

import { fetchPageContentBySlug, PageContentRenderer as HomePageContent } from '@/entities/page-content'
import { BestBonusesOfTheMonth, BonusCategories } from '@/features/bonus'
import { CasinoTop } from '@/features/casino'

import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'

const ReviewProcessSection = dynamic(() => import('./review-process-section')) 
const TestimonialSection = dynamic(() => import('./testimonials-section')) 
const NewsletterForm  = dynamic(() => import('../../../features/newsletter/ui/newsletter-section'))


const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];

const HomePage = async ({ locale }: { locale: Locale }) => {
    
    const t = await getTranslations('mainPage')
    const { pageContent } = await fetchPageContentBySlug('/', locale)

    return (
        <>
            <section className="space-y-5 flex-1 bento-block">
                <Typography as="h1" variant='h1'>
                    {t('title')} 2024
                </Typography>
                <CasinoTop byCountry='Germany' />
            </section>

            <NewsletterForm />
            <BestBonusesOfTheMonth />

            <section className="space-y-5 animate-bento-block flex-1 bento-block">
                <Typography as="h2" variant='h1'>
                    {t('categories-block')}
                </Typography>
                <BonusCategories />
            </section>

            <ReviewProcessSection />
            <TestimonialSection testimonials={testimonials}/>

            <HomePageContent pageContent={pageContent} />


            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div> */}
        </>
    )
}

export default HomePage