import { useMutation } from '@apollo/client';
import { NEWSLETTER_MUTATION } from '../model/newsletter.schema';

export const useNewsletterMutation = () => {
    const [subscribeOnNewsletter, { loading, error, data }] = useMutation(NEWSLETTER_MUTATION, {
        fetchPolicy: "network-only",
    });

    const handleSubscribe = async (email: string) => {
        try {
            const response = await subscribeOnNewsletter({
                variables: { email },
            });

            const status = response?.data?.signUpOnNewsletter?.status;

            if (status !== 'SUCCESS') {
                console.log("Subscription failed with status:", status);
                throw new Error(status);
            }

            return {
                status: "SUCCESS",
                message: status,
            };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "FAILED";
            console.error("Newsletter subscription error:", errorMessage);

            return {
                status: 'FAILED',
                message: errorMessage,
            };
        }
    };

    return { handleSubscribe, loading, error, data };
};
