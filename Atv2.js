// Escreva um programa que irá solicitar ao usuário uma palavra e conte o
// número de vogais presentes.//

let contadorVogais = 0;
let palavra = prompt ("Digite uma palavra");
for (let letra of palavra){
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log (letra);
        contadorVogais++;
    }
}
console.log ("O número de vogais "  +  palavra + " é: " + contadorVogais);