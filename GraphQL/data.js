
let { graphql, buildSchema } = require('graphql');

// 使用 GraphQL Schema 语言来定义一个 schema
let schema = buildSchema(`
	type Query {
		hello: String
	}
`);

// 根为每个API端点提供一个解析器函数
let root = {
	hello: () => {
		return 'Hello GraphQL!'
	},
};


// 运行 GraphQL 查询 '{ hello }' 时打印返回结果
graphql(schema, '{ hello }', root)
.then(response => {
	console.log( response )
})