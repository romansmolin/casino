'use client'

import { Bell, Loader2, Mail, Sparkles, Star, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import React, { useState } from 'react'

import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'
import { useToast } from '@/shared/lib/react/use-toast'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'

import { useNewsletterMutation } from '../api/newsletter.api'

const NewsletterForm = ({ isAnimated = true }: { isAnimated?: boolean }) => {
    const [email, setEmail] = useState<string>('')
    const { handleSubscribe, loading } = useNewsletterMutation()
    const { toast } = useToast()
    const t = useTranslations('notifications')

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!email || !emailRegex.test(email)) {
            toast({
                title: t('FAILED'),
                description: t(`messages.WRONG_EMAIL`),
                variant: 'destructive',
            })

            return
        }

        const { status, message } = await handleSubscribe(email)
        const isSuccess = status === 'SUCCESS'

        toast({
            title: t(isSuccess ? 'SUCCESS' : 'FAILED'),
            description: t(`messages.${message}`),
            variant: isSuccess ? 'success' : 'destructive',
        })
    }

    return (
        <section
            className={cn(
                'py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden bento-block',
                isAnimated && 'animate-bento-block'
            )}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary animate-pulse">
                            <Sparkles className="h-4 w-4" />
                            <span>Limited Time Offer</span>
                        </div>
                        <Typography as="h2" variant="h1" className="text-primary">
                            Exclusive Bonuses
                        </Typography>
                        <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                            Join our newsletter and unlock a world of insider tips, special
                            offers, and game-changing updates.
                        </p>
                    </div>

                    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: 'Exclusive content delivered to your inbox',
                                    },
                                    {
                                        icon: <Bell className="h-5 w-5" />,
                                        text: 'Early access to new features and updates',
                                    },
                                    {
                                        icon: <Star className="h-5 w-5" />,
                                        text: 'Special offers and discounts for subscribers',
                                    },
                                    {
                                        icon: <Mail className="h-5 w-5" />,
                                        text: 'Weekly industry insights and trends',
                                    },
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-3 group"
                                    >
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-medium">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
                            >
                                {loading ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <Sparkles className="mr-2 h-5 w-5" />
                                )}
                                Subscribe Now
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            By subscribing, you agree to our{' '}
                            <a
                                href="#"
                                className="text-primary hover:text-primary/80 underline underline-offset-4"
                            >
                                Terms
                            </a>{' '}
                            and{' '}
                            <a
                                href="#"
                                className="text-primary hover:text-primary/80 underline underline-offset-4"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </form>
                </div>

                <div className="relative lg:h-full min-h-[400px]">
                    <div className="relative h-full w-full">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />

                        {/* Main image with enhanced container */}
                        <div className="relative h-full flex justify-center items-center">
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-background p-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                <Image
                                    src="/assets/newsletter.png"
                                    alt="Newsletter illustration"
                                    width={400}
                                    height={400}
                                    className="relative z-10 w-auto h-auto max-w-full rounded-xl transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterForm
