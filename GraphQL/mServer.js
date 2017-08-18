
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const mSchema = require('./Mongodb/Schema');
const gSchema = require('./API/Schema')
const app = express();

// 连接数据库
mongoose.connect('mongodb://localhost/todoList');
mongoose.set('debug', true);
let db =  mongoose.connection;
db.on('error', ()=> {
	console.log('DB Not Connect!')
})
db.once('open', () => {
	console.log('DB Connect!')
})


// 根为每个API端点提供一个解析器函数
let root = {
	hello: () => {
		return 'Hello GraphQL!'
	},
};

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// 解析 application/json
app.use(bodyParser.json())


app.use('/graphql', graphqlHTTP({
	schema: gSchema.schema,
	rootValue: root,
	pretty: true,
	graphiql: true
}))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/web/index.html')
})

app.post('/quotes', (req, res)=> {
	let todoItem = new mSchema.ToDo({
		itemId: 1,
		item: req.body.item,
		completed: false
	})
	
	todoItem.save((err, result)=> {
		if (err) {
			console.log('Save Faild!');
		}

		console.log('Save OK!', todoItem.item);

		res.redirect('/')
	})
})



// 服务
app.listen(4000, () => {
	console.log('Running a GraphQL API server at localhost:4000/graphql')
})