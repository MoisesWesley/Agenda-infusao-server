const express = require('express');
const Usercontroller = require('./controllers/UserController');
const InfUserController = require('./controllers/InfUserController');
const ContactController = require('./controllers/ContactController');
const InfusionController = require('./controllers/InfusionController');
const DiagnosisController = require('./controllers/DiagnosisController');
const MedicationController = require('./controllers/MedicationController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Server: 'Running' });
});

routes.get('/users', Usercontroller.show);
routes.get('/users/:id', Usercontroller.index);
routes.post('/users', Usercontroller.store);
//routes.post('/users/:id', Usercontroller.store);
routes.delete('/users/:id', Usercontroller.destroy);


routes.get('/user/infusers', InfUserController.show);
routes.get('/user/:id/infusers', InfUserController.index);
routes.post('/users/:id/infusers', InfUserController.store);
routes.delete('/user/infuser/:id', InfUserController.destroy);


routes.get('/user/contact', ContactController.show);
routes.get('/user/:id/contacts', ContactController.index);
routes.post('/user/:id/contact', ContactController.store);
routes.delete('/user/contact/:id', ContactController.destroy);


routes.get('/infusions', InfusionController.show);
routes.get('/user/:id/infusions', InfusionController.index);
routes.post('/user/:id/infusions', InfusionController.store);
routes.delete('/user/infusion/:id', InfusionController.destroy);


routes.get('/diagnosis/users', DiagnosisController.show);
routes.get('/user/:id/diagnosis', DiagnosisController.index);
routes.post('/user/:id/diagnosis', DiagnosisController.store);
routes.delete('/user/diagnosis/:id', DiagnosisController.destroy);


routes.get('/diagnosis/medications', MedicationController.show);
routes.get('/diagnosis/:id/mediactions', MedicationController.index);
routes.post('/diagnosis/:id/medication', MedicationController.store);
routes.delete('/diagnosis/medication/:id', MedicationController.destroy);

routes.get('/addresses', AddressController.show);
routes.get('/users/addresses/:id', AddressController.index);
routes.post('/user/:id/address', AddressController.store);
routes.delete('/user/:id/address/', AddressController.destroy);



module.exports = routes;