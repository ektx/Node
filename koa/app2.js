const Koa = require('koa');
const app = new Koa();

app.use(async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	ctx.set('X-Response-Time', `${ms}ms`)
});

app.use( async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url}  ${ms}ms`)
});

app.use(ctx => {
	ctx.body = '<h1>hello Koa!</h1>'
})

app.listen(3000)
