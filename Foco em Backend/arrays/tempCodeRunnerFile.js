let posicao = -1

for(let j = 0; j < numeros.length; j++) {
    if ( numeros[j] ===  numeroProcurado    ) {
        posicao = j;
        break;
    }
}
console.log(`O número ${numeroProcurado} está na posição ${posicao}`)