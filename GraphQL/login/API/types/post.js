const {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} = require('graphql/type');


const postType = new GraphQLObjectType({
	name: 'POst',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
});
exports.postType = postType;


const postIntType = new GraphQLInputObjectType({
	name: 'postIntType',
	description: '添加内容',
	fields: () => ({
		uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		}
	})
})
exports.postIntType = postIntType;