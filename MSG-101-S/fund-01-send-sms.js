const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
          body: 'Hi there!',
          from: '+19166190712',
          to: '+19166190659'
      })
      .then(message => console.log(message.sid));