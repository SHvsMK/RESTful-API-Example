const router = require('koa-router')();

const usergrid = require('./../model');


//GET - get all tickets
// router.get('/', async (ctx) => {
// });

//GET - get the ticket with id
router.get('/:id', async (ctx) => {
    ctx.body = 'yes';
});

const addTicket = function() {
    return new Promise((resolve, reject) => {
        usergrid.POST({
            type: 'ticket',
            ticket: 'train',
        }, (err, res, ticket) => {
            if (err) {
                reject(err);
            } else {
                resolve(ticket);
            }
        })
    });
}

//POST - add a ticket
router.get('/', async (ctx) => {
    console.log(ctx.body);
    ctx.body = await addTicket();
    console.log(ctx.body);
    // console.log(ctx);
});

//PUT - update a ticket
router.put('/:id', async (ctx) => {

});

//DELETE - delete all tickets
router.delete('/', async (ctx) => {

});

//DELETE - delete a ticket
router.delete('/:id', async (ctx) => {

});

module.exports = router;