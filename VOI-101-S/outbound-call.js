require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    from: process.env.TWILIO_NUMBER,
    to: process.env.OWNER_NUMBER,
  })
  .then((call) => console.log(call.sid));
