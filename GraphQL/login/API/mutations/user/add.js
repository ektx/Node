const {
	GraphQLNonNull
} = require('graphql/type')

const {
	userType, userInputType
} = require('../../types/user');

const UserModel = require('../../../models/user');

module.exports._ = {
	type: userType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		const uModel = new UserModel(params.data);
		const nuewUser = uModel.save();

		if (!nuewUser) {
			throw new Error('Error add user')
		};

		return nuewUser
	}
}