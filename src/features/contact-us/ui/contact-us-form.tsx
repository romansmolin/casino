'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import React from 'react'
import { useForm } from 'react-hook-form'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { useToast } from '@/shared/lib/react/use-toast'
import { Button } from '@/shared/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { useContactUsMutation } from '../api/contact-us.api'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const formSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name must be at most 50 characters long')
        .trim(),
    email: z.string().trim().toLowerCase().regex(emailRegex, 'Invalid email format'),
    message: z
        .string()
        .min(20, 'Message must be at least 20 characters long')
        .max(400, 'Message must be at most 400 characters long')
        .trim(),
})

const ContactUsForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })
    const { toast } = useToast()
    const t = useTranslations('contact-us')
    const { handleContactUs, loading } = useContactUsMutation()

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { message, name, email } = values
        const res = await handleContactUs(email, name, message)

        if (res.status === 'SUCCESS') {
            toast({
                title: t('SUCCESS'),
                description: t(`messages.SUCCESS`),
                variant: 'success',
            })
        } else if (res.status === 'FAILED') {
            toast({
                title: t('FAILED'),
                description: t(`messages.FAILED`),
                variant: 'destructive',
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.username')}</FormLabel>
                            <FormControl>
                                <Input
                                    className="h-11"
                                    placeholder={t('form.username')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.email')}</FormLabel>
                            <FormControl>
                                <Input
                                    className="h-11"
                                    placeholder={t('form.email')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.message')}</FormLabel>
                            <FormControl>
                                <Input
                                    className="h-11"
                                    placeholder={t('form.message')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button size="lg" className="w-full" disabled={loading}>
                    {loading ? <LoadingIndicator /> : <Send />}
                    {t('send')}
                </Button>
            </form>
        </Form>
    )
}

export default ContactUsForm
