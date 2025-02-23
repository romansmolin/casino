import { gql } from '@apollo/client'

export const SEND_CONTACT_US_FORM = gql`
    mutation SendEmail($email: String!, $name: String!, $message: String!) {
        sendEmail(email: $email, name: $name, message: $message) {
            status
        }
    }
`
