//controllers ele que lida com requisiçoes e devolve la pro front-end
//criando um modulo store para lidar com requisicao "usuarios" em models/user.js
const User = require('../models/User');

module.exports = {
    //async await usado para "esperar" o "req" e o "res"
    async show(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async index(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        return res.json(user);
    },
    async store(req, res) {
        const { name, cpf, idade, sexo, data_nascimento } = req.body;  //enviando os campos atravez do corpo da requisicao 'req'

        const user = await User.create({ name, cpf, idade, sexo, data_nascimento });  //utilizando o metodo create dentro do model "User"

        return res.json(user);    //retornando os dados em json
    },

    async destroy(req, res) {
        const user_id = req.params.id;
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        await User.destroy({
            where: {
                id: user_id,
            }
        });

        return res.status(200).json({ status: 'successfully destroyed' })
    }
};