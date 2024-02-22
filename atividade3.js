// 3 - Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que a pessoa nasceu).

let ano = 2024;
let nascimento = 2005;

idade = ano - nascimento;

console.log(idade);

if(idade>=18){
    console.log("Já é permitido votar.")
}

else{
    console.log("Não é permitido votar, pois você é menor de idade.")
}
