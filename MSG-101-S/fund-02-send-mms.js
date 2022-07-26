client.messages
      .create({
          body: 'Hi there!',
          from: '+19166190712',
          to: '+19166190659',
          mediaUrl: 'https://demo.twilio.com/owl.png'
       })
      .then(message => console.log(message.sid));