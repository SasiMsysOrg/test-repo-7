const smee = new SmeeClient({
    source: 'https://smee.io/O0KjisBrOqYAT4Vv',
    target: 'http://localhost:9097/rest/hooks/callback',
    logger: console
  });

  smee.start();

  // Stop forwarding events
  // events.close();

  console.log('info', `App is running at ${app.get('host')}:${app.get('port')}`);
