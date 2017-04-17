const Koa = require('koa');
const Logger = require('koa-logger');
const Parser = require('koa-bodyparser');

const config = require('./config');

const routers = require('./router');

const app = new Koa();

app
    .use(Logger())
    .use(Parser())
    .use(routers.routes())
    .use(routers.allowedMethods());

app.listen(config.port, () => {
    console.log('Listening on port %s', config.port);
});