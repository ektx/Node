const {
  GraphQLObjectType,
  GraphQLNonNull, // 不允许为空
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
  // 定义可以查询的内容与说明
  fields: () => ({
	account: {
	  type: GraphQLString,
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
	name: 'FindUsers',
	fields: {
	  user: {
	  	// 引用文档与功能
		type: new GraphQLList( userInfo ),
		// 定义可以查询的关键字
		args: {
			// 帐号
			account: {
				name: 'account',
				type: GraphQLString,
				description: '帐号'
			},
			// 用户名
			name: {
				name: 'name',
				type: GraphQLString,
				description: '用户名'
			}
		},
		resolve: (root, {account, name}, source, fieldASTs) => {
			// 处理要获取的信息
			let projections = getProjection(fieldASTs);
			// 回调
		    let foundItems = new Promise((resolve, reject) => {
		    	// mongoose 查询方式
		    	// 查询用户名或帐号
				db.usrs_m.find(
				{ $or: [ {account}, {name} ] }, 
				projections,
				(err, data) => {
					err ? reject(err) : resolve(data)
				})
		  })

		  return foundItems
		}
	  }
	}
  })
  
});

exports.schema = schema;