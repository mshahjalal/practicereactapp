export default {
	Query: {
    	getTenant: (parent, { tenantId }, { models }) => models.Tenant.findOne({ where: { id: tenantId } }),
    	allTenants: (parent, args, { models }) => models.Tenant.findAll()
	},
	Mutation: {
    	createTenant: async (parent, args, { models }) => {
	        const tenant = await models.Tenant.create(args);
	        return tenant;   
	    }
  	}
};