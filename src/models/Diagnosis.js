const { Model, DataTypes } = require('sequelize');

class Diagnosis extends Model {
    static init(sequelize) {
        super.init({
            nome_doenca: DataTypes.STRING,
            pre_diagnostico: DataTypes.DATE,
        }, {
            sequelize,
            tableName: 'diagnostics' //colocando o nome da tabela explicito para nao gerar incoerencia nos nomes Diagnosis=/=diagnostics
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'diagnosis' });
        this.hasMany(models.Medication, { foreignKey: 'diag_id', as: 'medications' });
    }
};

module.exports = Diagnosis;