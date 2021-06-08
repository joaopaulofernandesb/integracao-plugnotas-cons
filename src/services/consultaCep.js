const axios = require('axios')
const env = require('../config/config')

async function consultaCep(cep) {
    // console.log("funcao consultaCep",cep)
    try {
        const url = env.Url;
        const response = await axios({
            method: 'get',
            url: `${url}/${cep}/json/`,
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        throw new Error(error)
    }
}
// consultaCep(87023499)

module.exports = {consultaCep}
