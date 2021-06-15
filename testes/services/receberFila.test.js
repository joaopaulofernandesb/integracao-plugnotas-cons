const  receberFila  = require('../../src/services/receberFila')
const env = require('../../src/config/config');

const retorno = {
    AttributeNames: [
      'SentTimestamp',
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
      'id',
    ],
    QueueUrl: env.Url_Fila,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
  };

describe('Verifica se esta realizando a consulta', () => {
    it('Deve retorna as informações padrão', async () => {
        const result = await receberFila()

        expect(result).toEqual(retorno)
    })
})
