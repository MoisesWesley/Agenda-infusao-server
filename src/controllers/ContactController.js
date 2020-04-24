const Contact = require('../models/Contact');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const contacts = await Contact.findAll();
        console.log(contacts);
        return res.json(contacts);
    },

    async index(req, res) {
        const { id } = req.params;
        const contactsUser = await User.findByPk(id, {
            include: { association: 'contacts' }
        });
        if (!contactsUser) {
            return res.status(400).json({ error: 'User not found' });
        }
        return res.json(contactsUser);
    },

    async store(req, res) {
        const { id } = req.params;

        const { email, telefone } = req.body;

        const usercontact = await User.findByPk(id);
        if (!usercontact) {
            return res.status(400).json({ error: 'User not found' });
        }

        const contact = await Contact.create({
            email: email,
            telefone: telefone,
            user_id: id
        });

        return res.json(contact);
    },
    async destroy(req, res) {
        const id_contact = req.params.id;

        const contact = await Contact.findByPk(id_contact);

        if (!contact) {
            return res.json({ error: 'Contact not found' });
        }
        await Contact.destroy({
            where: {
                id: id_contact,
            }
        });
        return res.status(200).json({ status: 'successfully destroyed' })
    },
}