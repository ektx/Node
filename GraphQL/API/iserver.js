const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type');

let db = require('../Mongodb/iserver')
let getProjection = require('./getProjection')


let userInfo = new GraphQLObjectType({
  name: 'user',
  description: '用户',
  fields: () => ({
	account: {
	  type: (GraphQLString),
	  description: '帐号',
	},
	name: {
	  type: GraphQLString,
	  description: '名称',
	},
	pwd: {
	  type: GraphQLString,
	  description: '密码',
	},
	email: {
	  type: GraphQLString,
	  description: '邮箱',
	},
	ico: {
	  type: GraphQLString,
	  description: '图标',
	},
	power: {
	  type: GraphQLString,
	  description: '用户权限',
	},
	reset: {
	  type: GraphQLString,
	  description: '找回密码Code',
	}
  })
});


let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
	  user: {
		type: new GraphQLList( userInfo ),
		args: {
		  account: {
			name: 'account',
			type: new GraphQLNonNull(GraphQLString)
		  }
		},
		resolve: (root, {account}, source, fieldASTs) => {
			let projections = getProjection(fieldASTs);

		    let foundItems = new Promise((resolve, reject) => {
			  db.usrs_m.find({account}, projections,(err, todos) => {
				  err ? reject(err) : resolve(todos)
			  })
		  })

		  return foundItems
		}
	  }
	}
  })
  
});

exports.schema = schema;