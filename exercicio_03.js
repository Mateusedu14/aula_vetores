/*
 Crie um algoritmo que leia um vetor de 10 letras, e diga quantas 
consoantes foram lidas e mostre essas consoantes.
*/

let msg = "";
let letras = [];
let consoantes = [];

for (let i = 0; i < 10; i++) {

    let val = prompt("Informe letra");

    letras[i] = val;
}

for (let j = 0; j < 10; j++) {

    let val = String(letras[j]).toUpperCase();

    if (!   (val == "A") || 
            (val == "E") || 
            (val == "I") || 
            (val == "O") || 
            (val == "U"))

    {   consoantes++;

        msg += val + "\n";
    }

}

alert(msg + "Nas letras acima existem " + consoantes + " consoantes");

