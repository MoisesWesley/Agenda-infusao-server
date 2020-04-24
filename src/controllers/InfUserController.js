const InfUser = require('../models/InfUser');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const infusers = await InfUser.findAll();
        if (infusers.length == 0) {
            return res.status(404).json({ error: 'query did not return any register' })
        }
        return res.json(infusers);
    },

    async index(req, res) {
        const { id } = req.params;

        //utilizando a PK_user para achar todas as associaçoes de informaçoes daquele usuario
        const userinf = await User.findByPk(id, {
            include: { association: 'infs_user' }
        });
        if (!userinf) {
            return res.status(400).json({ error: 'Register not found' })
        }
        return res.json(userinf);
    },
    async store(req, res) {
        const { id } = req.params; //pegando o id passado pela rota como parametro

        const { altura, peso } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({ error: 'User not Found' });
        }

        const infuser = await InfUser.create({
            altura: altura,
            peso: peso,
            user_id: id, //passando o id do recurso com o mesmo coluna da tabela
        });

        return res.json(infuser);

    },

    //apagando o registro :id
    async destroy(req, res) {
        const id_inf = req.params.id;
        //pegando o id da url e igualando pra procurar na tabela do DB
        const infuser = await InfUser.findByPk(id_inf);

        if (!infuser) {
            return res.status(400).json({ error: 'Register not found' });
        }
        await InfUser.destroy({
            where: {
                id: id_inf,
            }
        });
        return res.status(200).json({ status: 'successfully destroyed' });
    },
}