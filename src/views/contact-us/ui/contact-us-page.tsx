import Typography from '@/shared/components/typography/typography'
import React from 'react'
import { InboxIcon, PhoneIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { ContactUsForm } from '@/features/contact-us'
import { NewsletterForm } from '@/features/newsletter'

const ContactUsPage = () => {
    return (
        <>
            <section className='bento-block flex flex-col md:flex-row gap-10'>
                <div className='flex-1 lex flex-col space-y-5'>
                    <Typography as="h1" variant='h1'>Contact Us</Typography>

                    <p className='text-justify'>
                        We&apos;d love to hear from you. Please fill out this form or reach out to us using the contact information below.
                    </p>

                    <div className="space-y-5">
                        <h3 className="text-xl font-bold">Contact Information</h3>
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
                    <Card className='bg-card/50 backdrop-blur'>
                        <CardHeader>
                            <Typography as="h2" variant='h3'>Send us a message</Typography>
                            <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent className='p-6'>
                            <ContactUsForm />
                        </CardContent>
                    </Card>
                </div>
            </section>
            <NewsletterForm />
        </>
    )
}

export default ContactUsPage