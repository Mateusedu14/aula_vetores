function contarConsoantes(vetor) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let consoantes = [];

    for (let i = 0; i < vetor.length; i++) {
        if (!vogais.includes(vetor[i]) && /[a-zA-Z]/.test(vetor[i])) {
            consoantes.push(vetor[i]);
        }
    }

    alert(`Consoantes lidas: ${consoantes.length}`);
    alert(`Consoantes: ${consoantes.join(', ')}`);
}

// Exemplo de uso
let vetor = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
contarConsoantes(vetor);