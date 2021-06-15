const User = require('../models/user');

const updateMensage = async (id, atualizaStatus) => {
  await User.updateOne({ _id: id }, atualizaStatus, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

};

module.exports = { updateMensage };
