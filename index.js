const LocalWebServer = require('local-web-server');
const localWebServer = new LocalWebServer();
const server = localWebServer.listen({
    port: process.env.PORT,
    directory: '.',
    spa: 'Udacity.html'
});
