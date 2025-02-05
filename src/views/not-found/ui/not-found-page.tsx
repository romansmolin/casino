import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'
import { FrownIcon } from 'lucide-react'
import React from 'react'

const NotFoundPage = () => {
    return (
        <section className="bento-block space-y-8 h-[98%] flex justify-center items-center">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">No Page Found</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                        <FrownIcon className="w-16 h-16 text-gray-400" />
                        <p className="text-center text-gray-600">
                            We&apos;re sorry, but we couldn&apos;t find the page you are looking for
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default NotFoundPage