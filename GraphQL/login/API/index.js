
const {
	GraphQLObjectType,
	GraphQLSchema
} = require('graphql/type');

const mutations = require('./mutations');
const queries = require('./queries');

module.exports._ = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
	}),
	mutations: new GraphQLObjectType({
		name: 'mutations',
		fields: mutations
	})
})