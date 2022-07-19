client.messages
  .create({
    body: "Hi there!",
    from: "your_twilio_number",
    to: "your_private_number",
    statusCallback: "http://yourdomain.com/callback",
  })
  .then((message) => console.log(message.sid));
