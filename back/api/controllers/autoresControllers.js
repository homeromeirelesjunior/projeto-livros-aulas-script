const autoresModels = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo
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

function autoresGetById(req, res) {
    console.log('Consultar Autores')
    const id = req.params.codigo
    console.log(`Parâmetro esperado: ${id}`)

    autoresModels.getByIdAutores(id, function(err, resposta) {
        console.log(`Retorno dos autores`, resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

function autoresAtivoInativo(req, res) {
    console.log('Ativar Inativar Autores')
    const id = req.params.codigo
    console.log(`Parâmetro esperado: ${id}`)

    let p_ativo = ""

    autoresModels.getByIdAutores(id, function(err, resposta) {
        console.log(`Retorno de Autores`, resposta[0].aut_ativoinativo)
        p_ativo = resposta[0].aut_ativoinativo
        if (err) {
            throw err
        } else {
            if (p_ativo == "A") {
                p_ativo = "I"
            } else {
                p_ativo = "A"
            }
            res.json(resposta)
        }
        console.log(`A/I ${p_ativo}`)
        autoresModels.ativarInativar(id, p_ativo, function(err, result) {
            if(err) {
                throw err
            }
            console.log('Registro atualizado')
        })
    })

}