import { Accardion } from '@/shared/components/accardion'
import Typography from '@/shared/components/typography/typography'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const PageContentFaq = async ({ faqs }: {faqs: any}) => {
    const t = await getTranslations('common')
    return (
        <section className="animate-bento-block flex-1 space-y-5 bento-block">
            <Typography as='h2' variant='h2'>{t('faq')}</Typography>
            <Accardion items={faqs} />
        </section>
    )
}

export default PageContentFaq