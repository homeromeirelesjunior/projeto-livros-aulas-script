module.exports = {
    indexControllers, 
}

function indexControllers(req, res) {
    console.log('Rota raiz encontrada')
    res.json('Rota raiz encontrada')
}