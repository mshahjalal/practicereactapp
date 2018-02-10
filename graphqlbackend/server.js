import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import cors from 'cors';

//import schema from './data/schema';
//import {Author} from './data/connectors.js';




import models from './models';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


const GRAPHQL_PORT = 4000;
const graphQLServer = express();

//graphQLServer.use('*', cors({ origin: 'http://localhost:3000' }));
graphQLServer.use(cors('*'));

const graphqlEndpoint = '/graphql';

graphQLServer.use(
	graphqlEndpoint, 
	bodyParser.json(), 
	graphqlExpress({ 
		schema,
		context: {
			models,
			user: {
				id: 1
			}
		}
	})
);

graphQLServer.use('/graphiql', graphiqlExpress({ 
	endpointURL: graphqlEndpoint
}));

models.sequelize.sync({}).then(() => {
	graphQLServer.listen(GRAPHQL_PORT);
});