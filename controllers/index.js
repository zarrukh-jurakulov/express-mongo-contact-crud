const ContactModel = require('../models/ContactsModel');
const getAll = async (req, res) => {
  try {
    const contact = await ContactModel.find({});
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  const contact = req.body;
  try {
    const newContact = new ContactModel(contact);
    await newContact.save();
    await res.send(newContact);
  } catch (error) {
    console.log('creation error', error);
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await ContactModel.findById(id);
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { ...data } = req.body;
  try {
    const contact = await ContactModel.findByIdAndUpdate(id, data, { new: true });
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    await ContactModel.findByIdAndDelete(id);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, create, getOne, update, deleteOne };
