var companyModel = require('../models/company');

module.exports = {
  index
};

function index(req, res) {
  res.render('company/index', {
    company: companyModel.getCompany()
  });
}
