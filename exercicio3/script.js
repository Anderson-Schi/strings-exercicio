//Crie a const para a frase aqui
const frase1 = "Jorge tem uma casa verde e com portao azul, com os dizeres:" ; // Original
const frase2 =  "Boas Vindas, mas nao deixe o gato sair" ; // Separei em duas frases para poder substituir mais de uma string
const newFrase = frase1.replace("verde","rosa"); // replacing Verde por Rosa
const fraseFinal = newFrase.replace("azul","laranja"); // replacing Azul por Laranja
const frase2ToUpperCase = frase2.toLocaleUpperCase(); // mudando a frase para letras maisculas
console.log("Frase original: ",frase1, frase2);
console.log("Frase modificada: ", fraseFinal, frase2ToUpperCase);

 
