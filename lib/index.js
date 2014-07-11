'use strict';

var RdioClient = require('./rdio-client');

var ovenBitsUser = 'ovenbits';

function buildOutput(user, result) {
    if(user === ovenBitsUser) {
        return '*' + result.track + '* by *' + result.artist + '* is playing at the Oven Bits office.';
    } else {
        return '*' + user + '* is listening to *' + result.track + '* by *' + result.artist + '*.';
    }
}

module.exports = function(options) {


  var rdioClient = new RdioClient(options.key, options.secret);


  return function(robot) {

    robot.help('rdio', 'See the latest song played by the specified user! If no user is specified, defaults to ' + options.defaultUser);

    robot.on('mention', /rdio/, function(match) {

      console.log(match);

      var user =  match.message.split(' ')[1] || options.defaultUser;
      console.log('user: ' + user);
      var res;

      rdioClient.getLastSongPlayed(user, function(err, result) {

        if(err) {
          res = "Oh no! We couldn't get the last song for " + user + ". Error: " + err;
        } else {
          res = buildOutput(user, result);
        }

        robot.reply(match.user, res, match.context);

      });


    })

  }

}

