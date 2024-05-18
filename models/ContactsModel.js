const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    type: String,
  },
  { timestamps: true }
);

const ContactModel = mongoose.model('Contact', ContactsSchema);

module.exports = ContactModel;
