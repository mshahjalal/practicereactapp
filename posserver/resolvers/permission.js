import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Query: {
    allPermissions: requiresAuth.createResolver(async (parent, args, { models, user }) =>
      models.Permission.findAll()),
  },
  Mutation: {
    createPermission: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        await models.Permission.create({ ...args });
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