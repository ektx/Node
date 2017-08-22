const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type');

let ToDoMongo = require('../Mongodb/Schema')
let getProjection = require('./getProjection')


let todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'todo事件',
  fields: () => ({
	itemId: {
	  type: (GraphQLInt),
	  description: '工作事件',
	},
	item: {
	  type: GraphQLString,
	  description: '工作内容',
	},
	completed: {
	  type: GraphQLBoolean,
	  description: '是否完成'
	}
  })
});


let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
	  todo: {
		type: new GraphQLList(todoType),
		args: {
		  itemId: {
			name: 'itemId',
			type: new GraphQLNonNull(GraphQLInt)
		  }
		},
		resolve: (root, {itemId}, source, fieldASTs) => {
			let projections = getProjection(fieldASTs);
		    let foundItems = new Promise((resolve, reject) => {
			  ToDoMongo.ToDo.find({itemId}, projections,(err, todos) => {
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