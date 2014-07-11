'use strict';

var RdioClient = require('./rdio-client');

function buildOutput(user, defaultUser, defaultMsgPrefix, result) {
    if(user === defaultUser && defaultMsgPrefix) {
      return defaultMsgPrefix + ' *' + result.track + '* by *' + result.artist + '*.';
    } else {
      return '*' + user + '* is listening to *' + result.track + '* by *' + result.artist + '*.';
    }
}

module.exports = function(options) {


  var rdioClient = new RdioClient(options.key, options.secret);


  return function(robot) {

    robot.help('rdio', 'See the latest song played by the specified user! If no user is specified, defaults to ' + options.defaultUser);

    robot.on('mention', /rdio/, function(match) {


      var user =  match.message.split(' ')[1] || options.defaultUser;
      var res;

      rdioClient.getLastSongPlayed(user, function(err, result) {

        if(err) {
          res = "Oh no! We couldn't get the last song for " + user + ". Error: " + err;
        } else {
          res = buildOutput(user, options.defaultUser, options.defaultMessagePrefix, result);
        }

        robot.reply(match.user, res, match.context);

      });


    })

  }

}

