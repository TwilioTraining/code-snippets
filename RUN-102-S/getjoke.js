const request = require('request');
exports.handler = function (context, event, callback) {
  let response = new Twilio.Response();
  request(
    'https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode',
    (err, res, body) => {
      const joke = JSON.parse(body);
      console.log(joke);
      response.setBody(joke.setup + '\n' + joke.delivery);
      return callback(null, response);
  });
};
