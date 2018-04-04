import { PubSub, withFilter } from 'graphql-subscriptions';

import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

const pubsub = new PubSub();

const NEW_TEAM_MEMBER = 'NEW_TEAM_MEMBER';

export default {
  Subscription: {
    newTeamMember: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_TEAM_MEMBER),        
        (payload, args) => payload.teamId === args.teamId
      ),
    },
  },
  Query: {
    allTeamMembers: requiresAuth.createResolver(async (parent, {teamId}, { models, user }) =>
      models.Member.findAll({ where: { teamId: teamId } }, { raw: true })),
  },
  Mutation: {
    assignTeamMember: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {

        console.log("args: ", args);
        const teamMember = await models.Member.create({ ...args });

        const asyncPublishFunc = async () => {
          pubsub.publish(NEW_TEAM_MEMBER, {
            teamId: args.teamId,
            newTeamMember: {
              ...teamMember.dataValues
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
  }
};