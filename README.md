# Rdio Service

Hermes integration to display the latest song played on Rdio account.

## Usage

Install with:

`npm install --save hermes-rdio`

In your app, hook up with your Hermes robot:

```
var rdio = require('hermes-rdio');

  robot.use(rdio({
    key: "RDIO_KEY",
    secret: "RDIO_SECRET",
    defaultUser: 'joeSchmoe',
    defaultMessagePrefix: 'We are jamming to'
  }));
```