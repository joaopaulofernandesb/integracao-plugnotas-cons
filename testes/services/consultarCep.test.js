const { consultaCep } = require('../../src/services/consultaCep')


const retorno = {
    cep: "87023-490",
    logradouro:"Rua Kiri",
    complemento:"de 251/252 ao fim",
    bairro:"Parque Residencial Quebec",
    localidade:"Maringá",
    uf:"PR",
    ibge:"4115200",
    gia:"",
    ddd:"44",
    siafi:"7691"
}

describe('Verifica se esta realizando a consulta', () => {
    it('Deve consultar um cep e retornar as informações', async () => {

        await consultaCep(87023490)

        expect(retorno)
    })
})
