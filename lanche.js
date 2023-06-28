var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */


let [codigo, quantidade] = lines.shift().split(" ").map(item => parseInt(item));

       switch (codigo) {
      
        case 1:
       console.log(`Total: R$ ${(4.00 * quantidade).toFixed(2)}`);     
       break;
   
       case 2:
       console.log(`Total: R$ ${(4.50 * quantidade).toFixed(2)}`);
       break;
       
       case 3:
       console.log(`Total: R$ ${(5.00 * quantidade).toFixed(2)}`);
       break;
       
       case 4:
       console.log(`Total: R$ ${(2.00 * quantidade).toFixed(2)}`);
       break;
       
       case 5:
       console.log(`Total: R$ ${(1.50 * quantidade).toFixed(2)}`);
       break;


       default: console.log("Código inexistente");

   }