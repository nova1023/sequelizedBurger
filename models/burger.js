module.exports = function(sequelize, Datatypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 160]
			}
		},
		devoured: {
			type: Datatypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
};