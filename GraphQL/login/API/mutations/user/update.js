const {
	GraphQLNonNull,
	GraphqlID
} = require('graphql/type')

const {
	userType, userInputType
} = require('../../types/user');

const UserModel = require('../../../models/user');

module.exports._ = {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphqlID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		return UserModel.findByIdAndUpdate(params.id, {
			$set: {
				...params.data
			}
		}).then(data => UserModel.findById(data.id).exec())
		.catch(err => new Error('U Error'));

		if (!removeUsr) {
			throw new Error('Error remove user')
		};

		return removeUsr
	}
}