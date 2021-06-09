const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    cep:{
        type: String,
        unique: true,
        require: true,
    },
    status:{
        type: String,
        require: true,
        default: "PENDENTE",
    },
    data:{
        cep: {type: String},
        logradouro: {
            type: String
        },
        complemento: {
            type: String
        },
        bairro: {
            type: String
        },
        localidade: {
            type: String
        },
        uf: {
            type: String
        },
        ibge: {
            type: String
        },
        gia: {
            type: String
        },
        ddd: {
            type: String
        },
        siafi: {
            type: String
        },
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;