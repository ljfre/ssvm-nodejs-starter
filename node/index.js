const Koa = require('koa');
const fs = require('fs')
const app = new Koa();
const static = require('koa-static')
const koaBody = require('koa-body');
const { calculate_circle } = require('../pkg/ssvm_nodejs_starter_lib.js');

app.use(koaBody());
app.use(static(__dirname))

app.use(async ctx => {
    if (ctx.url === '/' && ctx.method === 'GET') {

        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./index.html');
    }
    else if (ctx.url === '/calc' && ctx.method === 'POST') {
        if (ctx.request.body.radius)
            ctx.body = calculate_circle(parseInt(ctx.request.body.radius));
    }
});

app.listen(3000);