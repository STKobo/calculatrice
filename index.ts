import { question } from 'readline-sync';

function main(): void
{
    const firstStr: string = question('Entrez votre nombre : \n');
    const operator: string = question('Entrez un opérateur : \n');
    const secondStr: string = question('Entrez votre second numéro: \n');

    console.log(firstStr, operator, secondStr);
}

main();