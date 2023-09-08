function saldoRanqueada(vitorias, derrotas){
    return vitorias - derrotas
}
let resultadoRanqueada = saldoRanqueada(85,2)
if (resultadoRanqueada <= 10){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Ferro`)
} else if(resultadoRanqueada <= 20){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Bronze`)
} else if(resultadoRanqueada <= 50){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Prata`)
} else if(resultadoRanqueada <= 80){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Ouro`)
} else if(resultadoRanqueada <= 90){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Diamante`)
} else if(resultadoRanqueada <= 100){
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Lendário`)
} else{
    console.log(`O herói tem o saldo de ${resultadoRanqueada} vitórias e está no nível Imortal`)
}