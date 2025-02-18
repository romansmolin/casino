"use strict";

const signUpOnNewsletter = async (emailAddress, status = "subscribed") => {
	try {
		const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
		const API_KEY = process.env.MAILCHIMP_API_KEY;
		const DATACENTER = process.env.MAILCHIMP_API_SERVER;

		if (!emailAddress) {
			throw new Error("Email address is required");
		}

		const data = {
			email_address: emailAddress,
			status: status, // Can be "subscribed" or "pending" (for double opt-in)
		};

		const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
		console.log("URL:", url);

		const response = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const responseData = await response.json(); // Parse JSON response
		console.log("Response:", responseData);

		// Check if Mailchimp returned an error
		if (!response.ok) {
			console.error("Mailchimp Error:", responseData);
			let status = 'FAILED'
			if (responseData.title === 'Member Exists') {
				status = 'MEMBER_EXISTS'
				throw new Error(status)
			}
			if (responseData.title === 'Invalid Resource') {
				status = 'INVALID_RESOURCE'
				
			}

			return {
				status,
				message: responseData.detail || "Subscription failed",
			};
		}

		return {
			status: "SUCCESS",
			message: "Subscription successful!",
		};
	} catch (err) {
		console.error("Error signing up for newsletter:", err);
		return {
			status: err.message,
			message: err.message || "Something went wrong",
		};
	}
};

module.exports = {
	signUpOnNewsletter,
};
