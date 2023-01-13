import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void
{
    const firstStr: string = question('Entrez votre nombre : \n');
    const operator: string = question('Entrez un operateur : \n');
    const secondStr: string = question('Entrez votre second numero: \n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    console.log(validInput);

    if (validInput)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
    }
    else 
    {
        console.log('\nentree non valide\n');
        main()
    }
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

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
    
}

function isNumber(str: string)
{
    const maybeNum = parseInt(str); 
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}


main();