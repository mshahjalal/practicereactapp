import bcrypt from 'bcrypt';

export default {
	Query: {
    	getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    	allUsers: (parent, args, { models }) => models.User.findAll()
	},
	Mutation: {
    	register: async (parent, {username, email, password}, { models }) => {
			try {
				const hashedPassword = await bcrypt.hash(password, 12);

				await models.User.create({ username: username, email: email, password: hashedPassword });

				return true;
			} catch (err) {
				return false;
			}
	    }
  	}
};