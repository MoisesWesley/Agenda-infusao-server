const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'address_id', through: 'user_address', as: 'users' })
    }
}

module.exports = Address;