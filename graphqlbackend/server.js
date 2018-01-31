import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
//import schema from './data/schema';
//import {Author} from './data/connectors.js';

import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


const GRAPHQL_PORT = 4000;
const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ 
	schema,
	context: {models}
}));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

models.sequelize.sync({}).then(() => {
	graphQLServer.listen(GRAPHQL_PORT, () =>
	  console.log(
	    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
	  )
	);
});