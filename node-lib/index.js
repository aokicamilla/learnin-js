import chalk from 'chalk';

console.log(chalk.blue('ola mundo'));

console.log(chalk.blue.bgWhite.bold('Alura'));

console.log(chalk.blue('curso', 'de', 'Node.js'));
//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/');
// console.log('São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento <input> (https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer] (https://developer.mozilla.org/pt-BR/docs/Web/API/');
