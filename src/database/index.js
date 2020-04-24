//aqui e onde os controladores e os modelos se juntam para conectar no banco de dados 

const Sequelize = require('sequelize');             //importando a classe
const dbConfig = require('../config/database');     //importando o objeto de configuracao do banco


const User = require('../models/User');             //importando user pra poder passar o parametro de conexao
const InfUser = require('../models/InfUser');
const Contact = require('../models/Contact');
const Address = require('../models/Address');
const Infusion = require('../models/Infusion');
const Diagnosis = require('../models/Diagnosis');
const Medications = require('../models/Medication')

const connection = new Sequelize(dbConfig);         //criando a conexao passando o objeto de configuracao como parametro

User.init(connection);
InfUser.init(connection);
Contact.init(connection);
Address.init(connection);
Infusion.init(connection);
Diagnosis.init(connection);
Medications.init(connection);

User.associate(connection.models);
InfUser.associate(connection.models);
Contact.associate(connection.models);
Address.associate(connection.models);
Infusion.associate(connection.models);
Diagnosis.associate(connection.models);
Medications.associate(connection.models);

module.exports = connection;