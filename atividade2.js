// 2 - Ler as notas da 1ª e 2ª avaliação de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado 
// (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.


let nota1 = 10;
let nota2 = 5;

media = (nota1 + nota2) / 2;

console.log("Sua média é: " + media)

if(media>=7){
    console.log("Aprovado.")
}

else{
    console.log("Reprovado")
}
