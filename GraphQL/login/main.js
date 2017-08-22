
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const schema = require('./API')

let app = express();

// 连接数据库
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphQLLogin', {
	useMongoClient: true
}).then(
	() => {
		console.log('OK')
	},
	err => {
		console.log(err)
	}
)
mongoose.set('debug', true);


// 运行 GraphQL 查询 '{ hello }' 时打印返回结果
app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: root,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('Running a GraphQL API server at localhost:4000/graphql')
})