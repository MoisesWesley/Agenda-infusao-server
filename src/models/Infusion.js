const { Model, DataTypes } = require('sequelize');

class Infusion extends Model {
    static init(sequelize) {
        super.init({
            data_infusao: DataTypes.DATE,
            hora_infusao: DataTypes.TIME,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user_infusion' })
    }
};

module.exports = Infusion;