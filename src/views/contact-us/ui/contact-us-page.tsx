import Typography from '@/shared/components/typography/typography'
import React from 'react'
import { InboxIcon, PhoneIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from '@/shared/ui/card'
import { ContactUsForm } from '@/features/contact-us'
import { NewsletterForm } from '@/features/newsletter'
import { getTranslations } from 'next-intl/server'

const ContactUsPage = async () => {
    const t = await getTranslations('contact-us')
    return (
        <>
            <section className='bento-block flex flex-col md:flex-row gap-10'>
                <div className='flex-1 lex flex-col space-y-5'>
                    <Typography as="h1" variant='h1'>{t('title')}</Typography>

                    <p className='text-justify'>
                        {t('subtitle')}                   
                    </p>

                    <div className="space-y-5">
                        <h3 className="text-xl font-bold">{t('info')}</h3>
                        <div className="flex items-center space-x-2">
                            <InboxIcon className="w-5 h-5" />
                            <span>contact@example.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="w-5 h-5" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <Card className='bg-card/50 backdrop-blur-sm'>
                        <CardHeader className='pb-0'>
                            <Typography as="h2" variant='h3'>{t('form.title')}</Typography>
                            <CardDescription>{t('form.subtitle')}</CardDescription>
                        </CardHeader>
                        <CardContent className='p-6'>
                            <ContactUsForm />
                        </CardContent>
                    </Card>
                </div>
            </section>
            <NewsletterForm  isAnimated={false}/>
        </>
    )
}

export default ContactUsPage