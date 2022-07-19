const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hi there!",
    from: "your_twilio_number",
    to: "your_private_number",
  })
  .then((message) => console.log(message.sid));
