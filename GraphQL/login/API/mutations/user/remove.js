const {
	GraphQLNonNull,
	GraphqlID
} = require('graphql/type')

const {	postType } = require('../../types/post');
const UserModel = require('../../../models/post');

module.exports {
	type: postType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphqlID)
		}
	},
	resolve(root, params) {
		const removeUsr = UserModel.findByIdAndRemove(params.id).exec();

		if (!removeUsr) {
			throw new Error('Error remove user')
		};

		return removeUsr
	}
}