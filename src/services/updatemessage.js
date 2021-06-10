const User = require('../models/user');
// const db = require('./')

const updateMensage = async (id, atualizaStatus) => {
  await User.updateOne({ _id: id }, atualizaStatus, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

  // console.log(id, status, data)
};

module.exports = { updateMensage };
