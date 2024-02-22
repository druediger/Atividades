// 10.  Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

let golsA = 0;
let golsB = 0;

console.log("\n========================");
console.log("Time A " + golsA + " x " + golsB + " Time B");

if(golsA > golsB){
    console.log("\nTime A é o vencedor!")
}

else if(golsA==golsB){
    console.log("\nEmpate!")
}

else{
    console.log("\nTime B é o vencedor!")
}

console.log("========================\n");
