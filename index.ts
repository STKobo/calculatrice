import { question } from 'readline-sync';

function main(): void
{
    const firstStr: string = question('Entrez votre nombre : \n');
    const operator: string = question('Entrez un operateur : \n');
    const secondStr: string = question('Entrez votre second numero: \n');

    const op = isOperator(operator);
    console.log(op);
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true ;
        default : 
            return false;
    }
}

function isNumber(str: string)
{
    const maybeNum = parseInt(str); 
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}


main();