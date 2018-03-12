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
        (payload, args) => payload.id === args.id,
      ),
    },
  },
  Query: {
    allPermissions: requiresAuth.createResolver(async (parent, args, { models, user }) =>
      models.Permission.findAll()),
  },
  Mutation: {
    createPermission: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        const permission = await models.Permission.create({ ...args });

        pubsub.publish(NEW_PERMISSION, {
          id: args.id,
          newPermission: permission.dataValues
        });

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