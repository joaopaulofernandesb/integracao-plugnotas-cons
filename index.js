const sqs = require('./src/config/aws')
const receberFila = require('./src/services/receberFila')
const { consultaCep } = require('./src/services/consultaCep')
const db = require ('./src/database/conecxaobanco')
const User = require('./src/models/user')
const { updateMensage } = require('./src/services/updatemessage')


const verificaMensagem = response =>
    response.Messages? response.Messages.length !== 0 : false

const start = async () => {
    const params = receberFila()

    try {
        const response = await sqs.receiveMessage(params).promise()
        // console.log(response)
        if(!verificaMensagem(response)) return start()

        const [message] = response.Messages
        const id =  message.MessageAttributes.id && message.MessageAttributes.id.StringValue

        db.connect()

        const { cep } = await User.findOne({_id: id})

        const data = await consultaCep(cep)
        const  atualizaStatus = data.erro?{status:"REJEITADO"}:{status:"CONCLUIDO", data:{...data}}
        if(data.erro){
            console.log('Status atualizado para REJEITADO, cep invalido !')
            await updateMensage(id, atualizaStatus)
        }else{
            console.log('Status atualizado para CONCLUIDO !')
            await updateMensage(id, atualizaStatus)
        }

        await updateMensage(id, atualizaStatus)

        const deletParams = {
            QueueUrl: params.QueueUrl,
            ReceiptHandle: message.ReceiptHandle,
        }

        await deleteSqs(deletParams)

        if(!id) return start()

    } catch (error) {
        console.log(error)
        return res.status(400).json({error: true, message:'Não foi possivel realizar atualização !'})
    }
    return start()
}

const main = async () => {
    start().catch(error => {console.log(error)})
}

const deleteSqs = async (deleteParams) => {
    sqs.deleteMessage(deleteParams, function (err, data){
        if(err){
            console.log('Delete Error', err)
        }else {
            console.log('Message Deleted', data)
        }
    })
}

main()
module.exports = main
