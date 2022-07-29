require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hi there!",
    from: process.env.TWILIO_NUMBER,
    to: process.env.MOBILE_NUMBER,
  })
  .then((message) => console.log(message.sid));
