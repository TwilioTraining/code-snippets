require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello there 👋🏻",
    from: process.env.TWILIO_NUMBER,
    mediaUrl: ["https://demo.twilio.com/owl.png"],
    to: process.env.MOBILE_NUMBER,
  })
  .then((message) => console.log(message.sid));
