"use strict";

export default `
    type SignUpOnNewsletter {
        status: String
    }

    extend type Mutation {
        signUpOnNewsletter(email: String!): SignUpOnNewsletter
    }
`;
