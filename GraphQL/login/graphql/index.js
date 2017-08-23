import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';
import mutations from './mutations';
import queries from './queries';

// 向外提供接口
export default new GraphQLSchema({
	// 查询接口
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
	}),
	// 修改接口
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
	})
});
