"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Entrez votre nombre : \n');
    var operator = (0, readline_sync_1.question)('Entrez un opérateur : \n');
    var secondStr = (0, readline_sync_1.question)('Entrez votre second numéro: \n');
    var firstNum = isNumber(firstStr);
    console.log(firstNum);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
