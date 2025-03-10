import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/shared/lib/i18n/request.ts'
);


const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['res.cloudinary.com', 'flagcdn.com', 'i.pravatar.cc', 'placehold.co']
    },
    
}
export default withNextIntl(nextConfig);

