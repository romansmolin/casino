import { gql } from '@apollo/client'

export const NEWSLETTER_MUTATION = gql`
    mutation SignUpOnNewsletter($email: String!) {
        signUpOnNewsletter(email: $email) {
            status
        }
    }
`
