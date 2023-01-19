// console.log('Hello Word!')

// const {spawnSync} = require('child_process');
// spawnSync('notepad.exe')

// console.log(process)

// importando modulos abaixo menos comum
// const somando = require('./modules/first')
// console.log(somando.somar(10, 20));
// console.log(somando.sub(10, 20));

// importando from 
// import { calcular, multiplicar } from "./modules/first.js";

// console.log(calcular.somar(10, 20));
// console.log(multiplicar(5, 5));
// console.log(calcular.sub(10, 20));

const express = require('express')
const app = express()

// CONFIG
const PORT = process.env.PORT || 3000;

// importo os arquivos que estao em routes/carros 
// para dentro de uma variavel que vai receber 
// o mesmo nome do arquivo 
const carros = require('./routes/carros')

// CRIANDO ROTAS 
// ESSAS ROTAS PODEM SER DO TIPO
// GET, POST, PUT, DELETE
app.get('/', (req, res)=>{

    res.sendFile(__dirname + '/public/index.html')
})
// usando rota criada em routes
app.use('/carros', carros);



app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})


