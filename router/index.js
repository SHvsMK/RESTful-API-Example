const router = require('koa-router')();

const ticket = require('./ticket');

router.use('/tickets', ticket.routes(), ticket.allowedMethods());

module.exports = router;