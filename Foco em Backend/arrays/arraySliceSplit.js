const estudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = estudantes.slice(0, estudantes.length/2);
const sala2 = estudantes.slice(estudantes.length/2);
//o fim não é incluido, se colocarmos o 10 vai até a posição 9
console.log(sala1,sala2)

const estudantes2 = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie']
//primeiro numero seria o numero de nomes que continua, o segundo seria retirar os próximos 3 elementos, no final colocamos o que queremos que entre no lugar
estudantes2.splice(2,3, 'Rodrigo', 'Maira')
console.log(estudantes2)

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')

console.log(animaisDoAquario)

animaisDoAquario.splice(3, 2, 'atum')
console.log(animaisDoAquario)