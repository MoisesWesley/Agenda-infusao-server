const Infusion = require('../models/Infusion');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const infusion = await Infusion.findAll();
        return res.json(infusion);
    },

    async index(req, res) {
        const { id } = req.params;

        const infusion = await User.findByPk(id, {
            include: { association: 'diagnostics' }
        });
        if (!infusion) {
            return res.status(400).json({ error: 'Register not found' })
        }
        return res.json(infusion);
    },

    async store(req, res) {
        const { id } = req.params;

        const { data_infusao, hora_infusao } = req.body;

        const infusionUser = await User.findByPk(id);

        if (!infusionUser) {
            return res.status(200).json({ error: 'User not Found' });
        }

        const infusion = await Infusion.create({
            data_infusao: data_infusao,
            hora_infusao: hora_infusao,
            user_id: id,
        });
        return res.json(infusion);
    },

    async destroy(req, res) {
        const id = req.params.id;

        const infusion = await Infusion.findByPk(id);

        if (!infusion) {
            return res.status(200).json({ error: 'Register not found' });
        }
        await Infusion.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({ status: 'successfully destroyed' });
    }
}