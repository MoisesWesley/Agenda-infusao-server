//aqui e o modulo que vai 'passar' o objeto 'sequelize' como query para o banco adicionar na tabela

const { Model, DataTypes } = require('sequelize');

// A classe deve ser o mesmo nome da tabela criada
//o sequelize tenta colocar o model no plural
//pode acontecer dele colocar no plural e ta diferente do nome real da tabela
class User extends Model {      //utilizando o modelo do sequelize para inserir as colunas
    static init(sequelize) {
        super.init({            //atravez do metodo init 
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            sexo: DataTypes.STRING,
            data_nascimento: DataTypes.DATEONLY, //testar utilizando DATEONLY
        }, {
            sequelize,  //passa bd objeto de congiguracao com banco de dados por padrao e "sequelize"
            //"tableName: 'nomeTabela" usado para colocar o nome da tabela explicito para nao gerar incoerencia class model
        })
    }
    static associate(models) {
        //associacao de PK para FK onde muitos registro de 'infUser' pertence a um users
        this.hasMany(models.InfUser, { foreignKey: 'user_id', as: 'infs_user' });
        this.hasMany(models.Contact, { foreignKey: 'user_id', as: 'contacts' });
        this.hasMany(models.Diagnosis, { foreignKey: 'user_id', as: 'diagnostics' });
        this.hasMany(models.Infusion, { foreignKey: 'user_id', as: 'infusions' });
        this.belongsToMany(models.Address, { foreignKey: 'user_id', through: 'user_address', as: 'addresses' });
    }
};

module.exports = User;