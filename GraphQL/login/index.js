import express from 'express';
// before adding graphql API
import graphqlHTTP from 'express-graphql';
// after adding graphql api
import mongoose from 'mongoose';

//Later
import schema from './graphql'
const app = express();

// 连接数据库
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphQLLogin', {
	useMongoClient: true
}).then(
	() => {
		console.log('OK')
	},
	err => {
		console.log(err)
	}
)
mongoose.set('debug', true);

app.get('/', (req, res) => {
  res.send('Hello World..');
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
})
