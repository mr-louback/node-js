// guardar o requerimento de express 
// dentro de uma variavel
const express = require('express')
// pegar o roteamento de expresse 
// e guardar dentro de outra variavel
const router = express.Router()
// usar o 'router' junto com o get 
// para instanciar a rota desejada
// sendo que a primeira rota e a tela inicial
// com nome do arquivo declarado - carros
router.get('/',(req, res)=>{
    // devolver uma resposta para o user
    res.send('<h1>Rota Inicial</h1>')
})
// segunda rota - /segunda
router.get('/segunda',(req, res)=>{
    // devolver uma resposta para o user
    res.send('<h1>Rota Segunda</h1>')
})
// terceira rota - /segunda/terceira
// e preciso incluir a rota anterior 
// para que o servidor devolva uma resposta certa
router.get('/segunda/terceira',(req, res)=>{
    // devolver uma resposta para o user
    res.send('<h1>Rota terceira</h1>')
})

// declaraNDO um parametro atraves de ':' 
// ELE retornar um objeto
// com o nome declarado na URL
router.get('/:qualquercoisa/:outra',(req, res)=>{
    // devolve um objeto com o nome passado na URL
    res.send('Rota é ' + req.params.qualquercoisa)
    // console.log(outra);
})

module.exports = router