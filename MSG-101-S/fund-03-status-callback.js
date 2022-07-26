client.messages
      .create({
          body: 'Hi there!',
          from: '+19166190712',
          to: '+19166190659',
          statusCallback: 'http://yourdomain.com/msgStatusUpdates'
       })
      .then(message => console.log(message.sid));