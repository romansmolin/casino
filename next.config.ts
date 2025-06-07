import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/lib/i18n/request.ts')

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: [
            'aff-site-demo-bucket.s3.eu-north-1.amazonaws.com',
            'flagcdn.com',
            'i.pravatar.cc',
            'placehold.co',
        ],
    },
}
export default withBundleAnalyzer(withNextIntl(nextConfig))
