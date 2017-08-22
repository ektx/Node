const {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList
} = require('graphql/type');

const PostModel = require('../../models/post')
const { postType } = require('./post')

const userType = new GraphQLObjectType({
	name: 'User',
	description: 'User API',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		posts: {
			type: new GraphQLList(postType),
			resolve(user) {
				const { _id } = user;
				return PostModel.find({ uid: _id}).exec();
			}
		}
	})
});
exports.userType = userType;

const userInputType = new GraphQLInputObjectType({
	name: 'userInputType'
})
exports.userInputType = userInputType;