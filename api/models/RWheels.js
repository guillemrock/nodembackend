
module.exports = (sequelize, Sequelize) => {

    const RWheels = sequelize.define("rwheels",
        {
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIV4,
                primaryKey: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            date_of_production: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
            },
        }, {
        paranoid: true,
        underscored: true

    });

    return RWheels;

}
