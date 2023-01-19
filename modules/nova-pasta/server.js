// MODULO DE WEB SERVER

// IMPORTEI O MODULO HTTP DO NODE JS
const http = require('http');

// ESPECIFIQUEI O ENDEREÇO QUE ESTÁ MEU SERVIDOR
const hostname = '127.0.0.1'// localhost

//INDIQUEI A PORTA QUE O SERVIDOR VAI USAR
const PORT = process.env.PORT || 3000;

// CRIEI O SERVIDOR QUE TRATARÁ 
// AS REQUISICOES E RESPOSTAS DO MEU CLIENTE
const server = http.createServer(
    (req, res) => {
        let url = req.url
        
        // ROTA PADRAO 'HOME'
        if(url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end('<h1>Olá Mundo!</h1>')
        }

        // OUTRA ROTA 'SOBRE'
        if(url === '/sobre'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html; charset=utf-8')
            res.end('<h1>Página sobre</h1>')
            }

    }
)

// POR ULTIMO EU CRIEI UM ESCUTADOR QUE VAI ME INDICAR 
// O ENDEREÇO E A PORTA QUE MEU SERVER ESTARÁ RODA
// INICIANDO O SERVIDOR E RECEBENTO NOVAS CONEXOES
server.listen(PORT, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${PORT}`);
})