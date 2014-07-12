# Rdio Service

Hermes integration to display the latest song played on Rdio account.

[![NPM version](https://badge.fury.io/js/hermes-rdio.svg)](http://badge.fury.io/js/hermes-rdio)

## Installation

`npm install --save hermes-rdio`

## Usage

Using the JavaScript API:

```
var rdio = require('hermes-rdio');

  robot.use(rdio({
    key: "RDIO_KEY",
    secret: "RDIO_SECRET",
    defaultUser: 'joeSchmoe',
    defaultMessagePrefix: 'We are jamming to'
  }));
```

`rdio-hermes` will respond to `@yourbotname rdio {username}` with the song that `username` last listened to, or with the song that `defaultUser` last listened to if no username is provided.

## Options

### key (required)

Rdio API key. If you don't have this, you need to register a new app with Rdio to get an API key and secret.

### secret (required)

Rdio API secret.

### defaultUser (required)

User to use if no user is specified in message text.

### defaultMessagePrefix (optional)

Different message that can be used for the default user.
