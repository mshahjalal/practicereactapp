import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Query: {
    allTeams: requiresAuth.createResolver(async (parent, args, { models, user }) =>
      //models.Team.findAll({ owner: user.id }, { raw: true })),
      models.Team.findAll()),
  },
  Mutation: {
    createTeam: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
   
        args.default = false;
        args.type = 'custom';

        //await models.Team.create({ ...args, owner: user.id });
        await models.Team.create({ ...args });
        return {
          ok: true,
        };
      } catch (err) {
        console.log(err);
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    }),
  },
};
