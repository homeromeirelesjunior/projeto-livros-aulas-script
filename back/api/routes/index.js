const controllerIndex = require('../controllers/indexControllers.js')

// server.get('/', (req, res) => {
//     console.log('Rota raiz eencontrada!')
//     res.json('Rota raiz encontrada!')
// })

server.get('/', controllerIndex.indexControllers)

server.get('/autores', (req, res) => {
    console.log('Rota autores encontrada!')
    res.json('Rota autores encontrada!')
})