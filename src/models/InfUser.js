const { Model, DataTypes } = require('sequelize');

class InfUser extends Model {
    static init(sequelize) {
        super.init({
            altura: DataTypes.FLOAT,
            peso: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); //associacao FK cada registro pertence a um user
        //user_id representa a chave estranheira em infUser
    }
};

module.exports = InfUser;