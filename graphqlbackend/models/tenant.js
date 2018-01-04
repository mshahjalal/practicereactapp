export default (sequelize, DataTypes) => {
	const Tenant = sequelize.define(
	    'tenant',
	    {
	    	name: {
	    		type: DataTypes.STRING
	    	},
	    	subdomain: {
	    		type: DataTypes.STRING,
        		unique: true
	    	}
	    }
    );

    Tenant.associate = (models) => {

    };

    return Tenant;
};