import { useMutation } from '@apollo/client'
import { SEND_CONTACT_US_FORM } from '../model/contact-us.schema'

export const useContactUsMutation = () => {
    const [sendContactUsForm, { loading, error }] = useMutation(SEND_CONTACT_US_FORM, {
        fetchPolicy: 'network-only',
    })

    const handleContactUs = async (email: string, name: string, message: string): Promise<{status: string, message: string}> => {
        try {
            const response = await sendContactUsForm({
                variables: { email, name, message },
            })

            const status = response?.data?.sendEmail?.status
            if (status !== 'SUCCESS') {
                throw new Error(status)
            }

            return {
                status: 'SUCCESS',
                message: status,
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'FAILED'

            return {
                status: 'FAILED',
                message: errorMessage,
            }
        }
    }

    return { handleContactUs, loading, error }
}
