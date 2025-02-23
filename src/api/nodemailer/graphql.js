'use strict'

const { sendEmail } = require("../../services/nodemailer/nodemailerService")

module.exports = (strapi) => ({
    typeDefs: `
        type SendEmail {
            status: String
        }
        extend type Mutation {
            sendEmail(email: String!, name: String!, message: String!): SendEmail
        }
    `,
    resolvers: {
        Mutation: {
            sendEmail: {
                resolve: async (parent, args) => {
                    return sendEmail(args)
                }
            }
        }
    },
    resolversConfig: {
        "Mutation.sendEmail": {
            auth: false
        }
    }
})