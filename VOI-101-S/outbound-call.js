const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    from: "your_twilio_number",
    to: "your_private_number",
  })
  .then((call) => console.log(call.sid));
