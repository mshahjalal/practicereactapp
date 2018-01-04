export default (sequelize, DataTypes) => {
	const Tax = sequelize.define(
	    'tax',
	    {
	    	name: {
	    		type: DataTypes.STRING
	    	}
	    }
    );

    Tax.associate = (models) => {

    };

    return Tax;
};