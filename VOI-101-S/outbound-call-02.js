require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    to: process.env.MOBILE_NUMBER,
    from: process.env.TWILIO_NUMBER,
    url: "http://demo.twilio.com/docs/voice.xml",
    statusCallback: 'https://xxx.ngrok.io',
    statusCallbackEvent: ['initiated', 'answered', 'completed']
  })
  .then((call) => console.log(call.sid));