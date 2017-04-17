const usergrid = require('usergrid');

const config = require('./../config');

usergrid.init({
    orgId: config.APIGEE.org,
    appId: config.APIGEE.app,
    clientId: config.APIGEE.clientId,
    clientSecret: config.APIGEE.clientSecret,
    baseUrl: config.APIGEE.baseUrl,
    logging: config.APIGEE.logging
})

module.exports = usergrid;
