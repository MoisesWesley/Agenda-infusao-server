const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const addresses = await Address.findAll();

        return res.json(addresses);
    },

    async index(req, res) {
        const id = req.params.id;

        const address = await Address.findByPk(id, {
            include: { association: 'users' }
        });

        if (!address) {
            return res.status(400).json({ error: 'Register not found' });
        }

        return res.json(address);
    },

    async store(req, res) {
        const { id } = req.params;

        const { rua, bairro, cidade, estado } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const [address] = await Address.findOrCreate({
            where: {
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            }
        });
        await user.addAddress(address);
        return res.json(address);
    },

    async destroy(req, res) {
        const id = req.params.id;
        const { rua, bairro, cidade, estado } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const address = await Address.findOne({
            where: {
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            }
        });
        await user.removeAddress(address);
        return res.json({ Destroy: 'Relationship between addresses and user successfully undone' });
    }
}