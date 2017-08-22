const {
	GraphQLNonNull
} = require('graphql/type');

const { postType, postIntType } = require('../../types/post')
const PostModel = require('../../../models/post')

module.exports {
	type: postType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(postIntType)
		}
	},
	resolve(root, params) {
		const pModel = new PostModel(params.data);
		const newPost = pModel.save();

		if (!newPost) {
			throw new Error('Error add post')
		}

		return newPost
	}
}