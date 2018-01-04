export default (sequelize, DataTypes) => {
	const Branch = sequelize.define(
	    'branch',
	    {
	    	name: {
	    		type: DataTypes.STRING,
        		unique: true
	    	}
	    }
    );

    Branch.associate = (models) => {

    };

    return Branch;
};