require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello there 👋🏻",
    from: "your_twilio_number",
    mediaUrl: ["https://demo.twilio.com/owl.png"],
    to: "your_private_number",
  })
  .then((message) => console.log(message.sid));
