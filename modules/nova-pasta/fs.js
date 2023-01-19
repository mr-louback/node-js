// MODULO DE ARQUIVOS DO SISTEMA FILE SISTEM
const fs = require('fs')

/* MANIPULAÇÃO DE PASTAS */

// fs.existsSync() // verifica se caminho existe
// fs.mkdirSync() // cria uma pasta
// fs.renameSync() // renomear uma pasta
// fs.rmdir() // deletar uma pasta

// if (!fs.existsSync('./public')) {
//     fs.mkdirSync('./public', (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Pasta criada com sucesso!");
//     })
// }else{
//     console.log('A pasta "public" ja existe!');
// }


// METODO MAIS SIMPLES DE FAZER O QUE ESTA ACIMA
// fs.existsSync('./public') || fs.mkdirSync('./public')

// RENOMEANDO PASTA
if (fs.existsSync('./public')) {
    fs.renameSync('./public', './nova-pasta', (err)=>{
        if(err){
            throw err;
        }
        console.log("Pasta renomeada com sucesso!");
    })
}