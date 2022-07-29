client.messages
  .create({
    body: "Hi there!",
    from: process.env.TWILIO_NUMBER,
    to: process.env.MOBILE_NUMBER,
    statusCallback: 'https://xxx.ngrok.io',
  })
  .then((message) => console.log(message.sid));
