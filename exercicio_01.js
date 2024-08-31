/*
Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.
*/


    let numeros = [];
    let mensagem = "";

    for (let i = 0; i < 5; i++) {
        let numero = prompt("Digite um número inteiro:");
        numeros.push(numero);
    }
    for (let i = 0; i < numeros.length; i++) {

        mensagem += numeros[i] + ", "
    }
     
alert(mensagem);
