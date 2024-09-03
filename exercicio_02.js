/*
Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela.
*/


let mensagem = ""; 
let notas = [];
let soma = 0

for (let i=0;i<4;i++){
    notas[i] = prompt("Informe nota: ");
    
    soma += parseFloat(notas[i]);
}

for (let j=0; j<4;j+=1){
    mensagem += notas[j] + " \n";

}

let media = soma/4;

alert("Notas\n"  + mensagem + "E a média é " + media);