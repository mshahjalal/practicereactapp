export default {
	Query: {
    	getUser: (parent, { userId }, { models }) => models.User.findOne({ where: { id: userId } }),
    	allUsers: (parent, args, { models }) => models.User.findAll()
	},
	Mutation: {
    	createUser: async (parent, args, { models }) => {
	        const user = await models.User.create(args);
	        return user;   
	    }
  	}
};