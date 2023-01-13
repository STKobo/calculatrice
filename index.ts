import { question } from 'readline-sync';

function main(): void
{
    const firstStr: string = question('Entrez votre nombre : \n');
    const operator: string = question('Entrez un opérateur : \n');
    const secondStr: string = question('Entrez votre second numéro: \n');

    
}

function isNumber(str: string)
{
    const maybeNum = parseInt(str); 
    const isNum: boolean = Boolean(isNaN(maybeNum));
    return isNum;
}

main();