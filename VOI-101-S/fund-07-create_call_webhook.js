client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+15005550008',
    from: '+15005550006'
  })
  .then((call) => console.log(call.sid));