/* Código 1 */

let idade = 17; // Minha idade 

let idadeMaxima = 80; // Minha idade máxima 

let lancheDia = 1; // Lanches por dia 

let anosRestante = idadeMaxima - idade; // Calculo para saber quantos anos ainda vou viver 

let qtdlanches = anosRestante * 365 * lancheDia; // Calculando a quantidade de lanches que vou comer 

// Output de quantos lanches vou precisar 
document.write(`Você precisará de ${qtdlanches} lanches para durar até a velhice de ${idadeMaxima} anos.`);



/*  Código 2 

let raio = 15; // Variável com o raio do circulo 

let circunferencia = 2 * Math.PI * raio; // Calculo da circunferência usando Math.PI 

// Output com a circunferência 
console.log("A circunferência tem " + circunferencia + ".");

// Calculando a area do raia 
let area = Math.PI * (raio ** 2);

// Output com o resultado da area 
document.write("A área é " + area + ".");
*/


/*  Código 3 
let idioma = "es"; // Definindo o idioma 


if (idioma === "fr") {
  document.write("Bonjour tout le monde!"); // Se(if) o idioma for igual a "fr" imprima "Bonjour tout le monde!" 

} else if (idioma === "es") {
  document.write("Hola, Mundo!"); // Senao se(else if) o idioma for igual a "es" imprima "Hola, Mundo!"

} else {
  document.write("Hello World!"); // Senha(else) o idioma for diferente de "es" e "fr" imprima "Hello World!" 
}
*/


/*  Código 4 

let linhas = 8; // Quantidade de linhas

for (let i = 1; i <= linhas; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += j;
  }
  console.log(linha);
}
*/