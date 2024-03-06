const notas = [10, 6.5, 7.7, 9]

const notasAtualizadas2 = notas.map(function(nota) {
    return nota + 1;
})
//operador ternário ? é true e : é false
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);


console.log(notasAtualizadas)

// O forEach() não retorna nada, portanto, é para quando não precisamos de retorno. Caso contrário, quando precisamos que o resultado do processamento seja capturado e guardado em outro array, precisamos usar o map(). Essa é uma das principais diferenças entre o forEach() e o map().