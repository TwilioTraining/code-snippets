const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello there 👋🏻",
    from: "your_twilio_number",
    mediaUrl: ["https://demo.twilio.com/owl.png"],
    to: "your_private_number",
  })
  .then((message) => console.log(message.sid));
