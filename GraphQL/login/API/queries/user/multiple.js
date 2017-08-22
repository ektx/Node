const {
	GraphQLList
} = require('graphql/type');

const { userType } = require('../../types/user');
const userModel = require('../../../models/user')

module.exports const thisType = {
	type: new GraphQLList(userType),
	resolve(root, params) {
		const users = userModel.find().exec();

		if (!users) {
			throw new Error('Error while fetching user...')
		}
		return users
	}
}

