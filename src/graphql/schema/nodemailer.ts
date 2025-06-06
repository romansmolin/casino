"use strict";

export default `
    type SendEmail {
        status: String
    }
    
    extend type Mutation {
        sendEmail(email: String!, name: String!, message: String!): SendEmail
    }
`;
