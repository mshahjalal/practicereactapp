export default (sequelize, DataTypes) => {
	const Branch = sequelize.define(
	    'branch',
	    {
	    	name: {
	    		type: DataTypes.STRING
	    	}
	    }
    );

    Branch.associate = (models) => {

    };

    return Branch;
};