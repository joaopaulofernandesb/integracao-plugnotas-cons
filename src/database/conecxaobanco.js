/* eslint-disable no-console */
const mongoose = require('mongoose');
const env = require('../config/config');

const connect = () => {
  try {
    mongoose.connect(env.Url_Banco, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connect, mongoose };
