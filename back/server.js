const http = require('http')
const servidor = require('./config/aplicativo.js')

http.createServer(servidor).listen(servidor.get('porta'), () => {
    console.log(`\nServidor rodando na porta: ${server.get('porta')}`)
})