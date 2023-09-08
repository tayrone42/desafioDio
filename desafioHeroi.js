let nomeDoHeroi = prompt("Digite o nome do seu herói: ")
let xpHeroi = 5000
if(xpHeroi <= 1000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Ferro`)
} else if (xpHeroi <= 2000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Bronze`)
} else if(xpHeroi <= 5000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Prata`)
} else if(xpHeroi <= 7000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Ouro`)
} else if(xpHeroi <= 8000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Platina`)
} else if(xpHeroi <= 9000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Ascendente`)
} else if(xpHeroi <= 10000){
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Imortal`)
} else{
    console.log(`O herói ${nomeDoHeroi} está no nível ${xpHeroi} sendo a patente Radiante`)
}