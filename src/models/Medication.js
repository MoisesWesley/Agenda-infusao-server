const { Model, DataTypes } = require('sequelize');

class Medication extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            quantidade: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'medications'
        })
    }
    static associate(models) {
        this.belongsTo(models.Diagnosis, { foreignKey: 'diag_id', as: 'diagnosis' });
    }
};

module.exports = Medication;