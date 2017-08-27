
let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

// 使用 GraphQL Schema 语言来定义一个 schema
let schema = buildSchema(`
	type Query {
		hello: String
	}
`);

console.log(schema)
// 根为每个API端点提供一个解析器函数
let root = {
	hello: () => {
		return 'Hello GraphQL!'
	},
};


// 运行 GraphQL 查询 '{ hello }' 时打印返回结果
let app = express();
app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: root,
	graphiql: true
}))

app.listen(4001, () => {
	console.log('Running a GraphQL API server at localhost:4000/graphql')
})