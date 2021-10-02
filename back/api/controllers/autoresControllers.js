const autoresModels = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
}

function autoresMenu(req, res) {
    console.log('Rota autores encontrada!')
    res.json('Rota autores encontrada!')
}

function autoresGetAll(req, res) {
    console.log('Listar autores { M O D E L S }')
    autoresModels.getAllAutores( function(err, resposta) {
        console.log('Retorno de autores { M O D E L S }')
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}