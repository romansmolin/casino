/**
 * Custom middleware for handling short affiliate link redirects
 * Catches requests to /go/:slug and redirects to the target URL
 */

module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        const match = ctx.path.match(/^\/go\/([^\/]+)$/);

        if (match && ctx.method === 'GET') {
            const slug = match[1];

            try {
                const affiliateLinks = await strapi.entityService.findMany('api::affiliate-link.affiliate-link', {
                    filters: {
                        slug: slug,
                        isActive: true, // Only active links
                    },
                });

                if (affiliateLinks && affiliateLinks.length > 0) {
                    const link = affiliateLinks[0];

                    if (link.expiresAt && new Date(link.expiresAt) < new Date()) {
                        console.log('⏰ Link has expired');
                        ctx.status = 410; // Gone
                        ctx.body = { error: 'Affiliate link has expired' };
                        return;
                    }

                    strapi.entityService
                        .update('api::affiliate-link.affiliate-link', link.id, {
                            data: {
                                clickCount: (link.clickCount || 0) + 1,
                            },
                        })
                        .catch(error => {
                            strapi.log.error('Error updating click count:', error);
                        });

                    console.log('🚀 Redirecting to:', link.targetUrl);
                    ctx.redirect(link.targetUrl);
                    return;
                } else {
                    console.log('❌ No affiliate link found for slug:', slug);
                    ctx.status = 404;
                    ctx.body = { error: 'Affiliate link not found or inactive' };
                    return;
                }
            } catch (error) {
                console.error('💥 Error in affiliate redirect middleware:', error);
                strapi.log.error('Error in affiliate redirect middleware:', error);
                ctx.status = 500;
                ctx.body = { error: 'Internal server error' };
                return;
            }
        }

        // Continue to next middleware if not a /go/:slug request
        await next();
    };
};
