import Typography from '@/shared/components/typography/typography'
import {
    Building2Icon,
    SquarePen,
    Binoculars,
    ArrowRight,
    Star,
    CheckCircle2,
    Trophy,
    Sparkles,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { Card } from '@/shared/ui/card'

const ReviewProcessSection = async () => {
    const t = await getTranslations('review-process')

    const processSteps = [
        {
            icon: <Building2Icon className="h-6 w-6" />,
            title: t('first-pargraph.title'),
            text: t('first-pargraph.text'),
            color: 'from-blue-500/20 to-blue-500/0',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-500',
            glowColor: 'shadow-blue-500/50',
        },
        {
            icon: <Binoculars className="h-6 w-6" />,
            title: t('second-pargraph.title'),
            text: t('second-pargraph.text'),
            color: 'from-purple-500/20 to-purple-500/0',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-500',
            glowColor: 'shadow-purple-500/50',
        },
        {
            icon: <SquarePen className="h-6 w-6" />,
            title: t('third-pargraph.title'),
            text: t('third-pargraph.text'),
            color: 'from-green-500/20 to-green-500/0',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-500',
            glowColor: 'shadow-green-500/50',
        },
    ]

    return (
        <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center bento-block">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-20 animate-float" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl opacity-20 animate-float" />
            </div>

            <div className="relative max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-5 items-center">
                    <div className="lg:col-span-3 space-y-12">
                        {/* Enhanced Header */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary">
                                <Sparkles className="h-4 w-4" />
                                <span>Our Process</span>
                                <ArrowRight className="h-4 w-4" />
                            </div>
                            <Typography as="h2" variant="h1" className="text-primary">
                                {t('title')}
                            </Typography>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                {t('subtitle')}
                            </p>
                        </div>

                        {/* Enhanced Process Steps */}
                        <div className="space-y-6">
                            {processSteps.map((step, index) => (
                                <Card
                                    key={index}
                                    className="p-6 group hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-1">
                                    {/* Enhanced Gradient Background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />

                                    <div className="relative flex items-start space-x-6">
                                        <div
                                            className={`flex-shrink-0 p-3 rounded-xl ${step.iconBg} ${step.iconColor} ${step.glowColor} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                                            {step.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Interactive Visualization Section */}
                    <div className="relative lg:col-span-2 h-[800px] flex items-center justify-center">
                        <div className="relative w-full h-full max-w-lg">
                            {/* Enhanced Decorative Elements */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl animate-float" />

                            {/* Enhanced Main Visualization */}
                            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background border border-primary/10 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />

                                {/* Enhanced Review Process Visualization */}
                                <div className="relative z-10 flex flex-col items-center justify-center h-full ">
                                    {/* Connection Lines with Dots */}
                                    <div className="absolute left-1/2 top-[20%] bottom-[20%] -translate-x-1/2 w-[2px] z-0">
                                        {/* Main Gradient Line */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50" />
                                    </div>

                                    <div className="relative flex flex-col items-center gap-32 z-10">
                                        {/* Top Circle - Research */}
                                        <div className="relative group">
                                            <div className="absolute -inset-3 bg-blue-500/20 rounded-full animate-pulse group-hover:animate-none blur-sm" />
                                            <div className="absolute -inset-8 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 transition-colors duration-300" />
                                            <div className="relative p-8 rounded-full bg-background/80 backdrop-blur-sm bg-blue-500/10 border-2 border-blue-500/30 group-hover:bg-blue-500/20 transition-all duration-300 shadow-lg shadow-blue-500/30">
                                                <Building2Icon className="h-12 w-12 text-blue-500" />
                                            </div>
                                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4">
                                                <div className="bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-sm font-medium text-blue-500">
                                                        Research
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Middle Circle - Analysis */}
                                        <div className="relative group">
                                            <div className="absolute -inset-3 bg-purple-500/20 rounded-full animate-pulse group-hover:animate-none blur-sm" />
                                            <div className="absolute -inset-8 bg-purple-500/5 rounded-full group-hover:bg-purple-500/10 transition-colors duration-300" />
                                            <div className="relative p-8 rounded-full bg-background/80 backdrop-blur-sm bg-purple-500/10 border-2 border-purple-500/30 group-hover:bg-purple-500/20 transition-all duration-300 shadow-lg shadow-purple-500/30">
                                                <Binoculars className="h-12 w-12 text-purple-500" />
                                            </div>
                                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4">
                                                <div className="bg-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-sm font-medium text-purple-500">
                                                        Analysis
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Circle - Review */}
                                        <div className="relative group">
                                            <div className="absolute -inset-3 bg-green-500/20 rounded-full animate-pulse group-hover:animate-none blur-sm" />
                                            <div className="absolute -inset-8 bg-green-500/5 rounded-full group-hover:bg-green-500/10 transition-colors duration-300" />
                                            <div className="relative p-8 rounded-full bg-background/80 backdrop-blur-sm bg-green-500/10 border-2 border-green-500/30 group-hover:bg-green-500/20 transition-all duration-300 shadow-lg shadow-green-500/30">
                                                <SquarePen className="h-12 w-12 text-green-500" />
                                            </div>
                                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4">
                                                <div className="bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-sm font-medium text-green-500">
                                                        Review
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Floating Elements with Better Positioning */}
                                    <div className="absolute top-24 right-4 animate-float">
                                        <div className="p-3 rounded-xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 shadow-lg shadow-yellow-500/20">
                                            <Star className="h-8 w-8 text-yellow-500" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute top-1/2 left-4 animate-float"
                                        style={{ animationDelay: '0.5s' }}>
                                        <div className="p-3 rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-500/20 shadow-lg shadow-green-500/20">
                                            <CheckCircle2 className="h-8 w-8 text-green-500" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute bottom-24 right-4 animate-float"
                                        style={{ animationDelay: '1s' }}>
                                        <div className="p-3 rounded-xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 shadow-lg shadow-yellow-500/20">
                                            <Trophy className="h-8 w-8 text-yellow-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewProcessSection
