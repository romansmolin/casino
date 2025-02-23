"use client"

import React, { useState } from 'react'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Bell, Loader2, Mail, Star, Zap } from 'lucide-react'
import Image from 'next/image'
import { useNewsletterMutation } from '../api/newsletter.api'
import { useToast } from '@/shared/lib/react/use-toast'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/shared/ui/card'
import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'


const NewsletterForm = ({ isAnimated = true }: { isAnimated?: boolean }) => {
    const [email, setEmail] = useState<string>('')
    const { handleSubscribe, loading } = useNewsletterMutation()
    const { toast } = useToast()
    const t = useTranslations('notifications')

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !emailRegex.test(email)) {
            toast({
                title: t("FAILED"),
                description: t(`messages.WRONG_EMAIL`),
                variant: 'destructive',
            });

            return
        }

        const { status, message } = await handleSubscribe(email);
        const isSuccess = status === "SUCCESS";

        toast({
            title: t(isSuccess ? "SUCCESS" : "FAILED"),
            description: t(`messages.${message}`),
            variant: isSuccess ? "success" : "destructive",
        });
    };

    return (
        <section className={cn(`py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-muted bento-block`, isAnimated && 'animate-bento-block')}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <Typography as="h2" variant='h1'>Exclusive Bonuses</Typography>
                        <p className="text-xl text-muted-foreground max-w-[600px]">
                            Join our newsletter and unlock a world of insider tips, special offers, and game-changing updates.
                        </p>
                    </div>

                    <Card className="bg-card/50 backdrop-blur">
                        <CardContent className="p-6">
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <Zap className="h-5 w-5 text-primary" />
                                    <span>Exclusive content delivered to your inbox</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Bell className="h-5 w-5 text-primary" />
                                    <span>Early access to new features and updates</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="h-5 w-5 text-primary" />
                                    <span>Special offers and discounts for subscribers</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>Weekly industry insights and trends</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-5 lg:gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow h-12"
                                required
                            />
                            <Button type="submit" disabled={loading} className="w-full sm:w-auto h-12">
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            By subscribing, you agree to our{" "}
                            <a href="#" className="underline">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </form>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-3xl" />
                    <div className="relative flex justify-center items-center rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/assets/newsletter.svg"
                            alt="Newsletter illustration"
                            width={250}
                            height={250}
                            className="h-[250px] w-[150px] md:w-[unset] md:h-auto md:object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterForm