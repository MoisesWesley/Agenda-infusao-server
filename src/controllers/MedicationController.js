const Medication = require('../models/Medication');
const Diagnosis = require('../models/Diagnosis');

module.exports = {
    async show(req, res) {
        const medications = await Medication.findAll();

        return res.json(medications);
    },

    async index(req, res) {
        const { id } = req.params;

        const diagnosis = await Diagnosis.findByPk(id, {
            include: { association: 'medications' }
        });

        if (!diagnosis) {
            return res.status(400).json({ error: 'Register not found' })
        }

        return res.json(diagnosis);
    },

    async store(req, res) {
        const { id } = req.params;

        const { nome, quantidade } = req.body;

        const diagnosis = await Diagnosis.findByPk(id);

        if (!diagnosis) {
            return res.status(200).json({ error: 'Diagnosis not found' });
        }

        const medication = await Medication.create({
            nome: nome,
            quantidade: quantidade,
            diag_id: id,
            //da esquerda o que ta na tabela do banco
            //na direita o que vem do req.body
        });
        return res.json(medication);
    },

    async destroy(req, res) {
        const id = req.params.id;

        const medication = await Medication.findByPk(id);

        if (!medication) {
            return res.status(200).json({ error: 'Register not found' });
        }

        await medication.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({ status: 'successfully destroyed' });
    }
}