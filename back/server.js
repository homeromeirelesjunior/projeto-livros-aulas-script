const http = require('http')
const servidor = require('./config/aplicativo.js')

http.createServer(servidor).listen(servidor.get('porta'), function () {
    console.log(`\nServidor rodando na porta: ${server.get('porta')}`)
})