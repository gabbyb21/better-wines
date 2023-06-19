const contact = require('../models/contact');

module.exports = {
    index
  };

function index(req, res) {
  res.render('contact/index', {
    contact: contact.getContact()
  });
}


