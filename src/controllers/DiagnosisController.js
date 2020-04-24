const Diagnosis = require('../models/Diagnosis');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const diagnosis = await Diagnosis.findAll();
        return res.json(diagnosis);
    },

    async index(req, res) {
        const { id } = req.params;

        const userDiag = await User.findByPk(id, {
            include: { association: 'diagnostics' }
        });
        if (!userDiag) {
            return res.status(400).json({ error: 'User not found' })
        }
        return res.json(userDiag);
    },

    async store(req, res) {
        const { id } = req.params;

        const { nome_doenca, pre_diagnostico } = req.body;

        const userDiag = await User.findByPk(id);

        if (!userDiag) {
            return res.status(400).json({ error: 'User not found' });
        }

        const diagnosis = await Diagnosis.create({
            nome_doenca,
            pre_diagnostico,
            user_id: id,
        });

        return res.json(diagnosis);
    },
    async destroy(req, res) {
        const id = req.params.id;

        const diagnosis = await Diagnosis.findByPk(id);

        if (!diagnosis) {
            return res.status(400).json({ error: 'Register not found' });
        }
        await Diagnosis.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({ status: 'successfully destroyed' });
    },
}