const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
    static init(sequelize) {
        super.init({
            email: DataTypes.STRING,
            telefone: DataTypes.BIGINT,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userContact' });
    }
};

module.exports = Contact;