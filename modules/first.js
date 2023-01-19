// function somar(a,b){
//     return a + b
// }

// function sub(a,b){
//     return a - b
// }

const calcular = {
    somar: function (a, b) {
        return a + b
    },
    sub: function (a, b) {
        return a - b
    }
}

export function multiplicar(a,b){
    return a * b
}
// exportando modulos abaixo jeito menos convencional
// module.exports = calcular 

// modo comum de exportacao de arquivos
export {calcular}