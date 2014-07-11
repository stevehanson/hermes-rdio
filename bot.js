(function() {
  'use strict';

  var Robot = require('hermes'),
      repl = require('hermes/lib/repl'),
      env = require('dotenv').load(),
      rdio = require('./lib/index'),
      jenkins = new Robot();

  // settings
  jenkins.name('Jenkins Jr.');
  jenkins.nickname('jenkins');
  jenkins.template('@%s ');
  jenkins.use(repl());
  jenkins.use(rdio({
    key: process.env.RDIO_KEY,
    secret: process.env.RDIO_SECRET,
    defaultUser: 'ovenbits'
  }));


  jenkins.connect();

  // plugins
  jenkins.on('mention', /^yo/i, function(match) {
    jenkins.reply(match.user, 'how may I be of assistance?', match.context);
  });
}());
