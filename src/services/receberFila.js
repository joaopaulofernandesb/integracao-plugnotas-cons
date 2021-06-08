const env = require('../config/config')

const receberFila = () => {
    const params = {
        AttributeNames: [
            "SentTimestamp"
         ],
         MaxNumberOfMessages: 10,
         MessageAttributeNames: [
            "id"
         ],
         QueueUrl: env.Url_Fila,
         VisibilityTimeout: 20,
         WaitTimeSeconds: 0
    }

    return params
};

module.exports = receberFila