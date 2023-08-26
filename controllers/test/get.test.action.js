
/*
  get http://localhost:3000/test/
*/

const models = require('../../models');
const Test = models.Test;

module.exports.getTests = async (req, res) => {
  await Test.findAll().then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
}