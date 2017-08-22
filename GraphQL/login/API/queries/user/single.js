const {
	GraphQLID,
	GraphQLNonNull
} = require('graphql/type');

const { userType } = require('../../types/user');
const userModel = require('../../../models/user')

module.exports const thisType = {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return userModel.findById(params.id).exec();
	}
}

