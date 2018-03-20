import { PubSub, withFilter } from 'graphql-subscriptions';

import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

const pubsub = new PubSub();

const NEW_PERMISSION = 'NEW_PERMISSION';

export default {
  Subscription: {
    newPermission: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_PERMISSION),        
        (payload, args) => payload.name !== args.name
      ),
    },
  },
  Query: {
    allPermissions: requiresAuth.createResolver(async (parent, {name}, { models, user }) =>
      models.Permission.findAll()),
  },
  Mutation: {
    createPermission: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        const permission = await models.Permission.create({ ...args });

        const asyncPublishFunc = async () => {
          pubsub.publish(NEW_PERMISSION, {
            name: args.name,
            newPermission: {
              ...permission.dataValues
            },
          });
        }

        asyncPublishFunc();       

        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    }),
  },
};