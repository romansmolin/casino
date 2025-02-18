"use client"

import React, { useState } from 'react'
import Typography from '@/shared/components/typography/typography'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Bell, Loader2, Mail, Star, Zap } from 'lucide-react'
import Image from 'next/image'
import { useNewsletterMutation } from '../api/newsletter.api'
import { useToast } from '@/shared/lib/react/use-toast'
import { useTranslations } from 'next-intl'


const NewsletterForm = () => {
    const [email, setEmail] = useState<string>('')
    const { handleSubscribe, loading } = useNewsletterMutation()
    const { toast } = useToast()
    const t = useTranslations('notifications')

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !emailRegex.test(email)) {
            toast({
                title: "FAILED",
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
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-1 gap-6 bento-block p-6 animate-bento-block">
            {/* Left Section - Text Content */}
            <div className="md:col-span-1 xl:col-span-2 space-y-6 flex flex-col">
                {/* 🏆 Title with Skewed CTA */}
                <Typography as="h2" className="font-bold text-3xl sm:text-5xl md:text-6xl !leading-[1.2]">
                    Exclusive Bonuses
                    <span className="block text-primary p-1 px-4 bg-primary text-white w-fit -skew-x-3 relative">
                        <span className="block transform -skew-x-3 text-2xl md:text-5xl">Join Our Newsletter</span>
                    </span>
                </Typography>

                {/* 📢 Description */}
                <Typography className="max-w-full md:max-w-[750px] text-lg md:text-xl">
                    Be the first to receive insider tips, special offers, and game-changing updates. Don&apos;t miss out!
                </Typography>

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

                {/* 👇 Pushes the form to the bottom */}
                <div className="flex-grow"></div>

                {/* ✉️ Form Section */}
                <form onSubmit={handleSubmit} className="relative w-full max-w-sm md:max-w-md">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 w-full px-4 text-base"
                    />
                    <Button 
                        type="submit" 
                        size="sm" 
                        disabled={loading} 
                        className="absolute h-full w-12 right-0 top-1/2 -translate-y-1/2"
                    >
                        {!loading && <Mail className="h-4 w-4" />}
                        {loading && <Loader2 className="animate-spin h-4 w-4" />}
                        <span className="sr-only">Subscribe</span>
                    </Button>
                </form>
            </div>


            {/* Right Section - Image */}
            <div className="md:col-span-1 xl:col-span-2 flex justify-center items-center w-full">
                <div className="relative w-full h-auto max-w-[400px] md:max-w-[500px] bg-primary rounded-xl transform -skew-y-3 flex justify-center items-center p-4">
                    <Image
                        src="/assets/newsletter.svg"
                        alt="Newsletter"
                        width={350}
                        height={350}
                        className="w-4/5 md:w-3/4 max-w-[250px] md:max-w-[300px] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default NewsletterForm