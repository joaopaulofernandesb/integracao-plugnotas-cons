const dotenv = require('dotenv')

dotenv.config()

const env = process.env

module.exports = {
    Url: env.URL_API,
    Url_Fila: env.URL_FILA,
    accessKeyId: env.AWS_ACCESSKEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region: env.AWS_REGION
};