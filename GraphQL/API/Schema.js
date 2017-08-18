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

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
function getProjection (fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}

var todoType = new GraphQLObjectType({
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


var schema = new GraphQLSchema({
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
          var projections = getProjection(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
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