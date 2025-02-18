'use strict'

const { signUpOnNewsletter } = require("../../services/newsletter/newsletterService")

module.exports = (strapi) => () => ({
    typeDefs: `
        type SignUpOnNewsletter {
            status: String
        }

        extend type Mutation {
            signUpOnNewsletter(email: String!): SignUpOnNewsletter
        }
    `,
    resolvers: {
        Mutation: {
            signUpOnNewsletter: {
                resolve: async (parent, args) => {
                    return signUpOnNewsletter(args.email)// Replace with actual data fetching logic
                }
            }
        }
    },
    resolversConfig: {
        "Mutation.signUpOnNewsletter": {
            auth: false,
        },
    }
})
