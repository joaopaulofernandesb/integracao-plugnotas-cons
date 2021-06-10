const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

module.exports = {
  Url: env.URL_API,
  Url_Fila: env.URL_FILA,
  Url_Banco: env.URL_BD,
  accessKeyId: env.AWS_ACCESSKEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
};
