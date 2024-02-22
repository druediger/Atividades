// 7 - Ler 3 valores e escrever a soma dos 2 maiores.

let num1 = 39;
let num2 = 40;
let num3 = 50;

let maior1, maior2;

console.log("\n=====================================");

console.log("Números digitados:\n" + "\n- " + num1 + "\n- " + num2 + "\n- " + num3);

if (num1 >= num2 && num1 >= num3) {
    maior1 = num1;
    if (num2 >= num3) {
        maior2 = num2;
    } else {
        maior2 = num3;
    }
}

else if (num2 >= num1 && num2 >= num3) {
    maior1 = num2;
    if (num1 >= num3) {
        maior2 = num1;
    } else {
        maior2 = num3;
    }
} 

else {
    maior1 = num3;
    if (num1 >= num2) {
        maior2 = num1;
    } else {
        maior2 = num2;
    }
}

let somaMaiores = maior1 + maior2;

console.log("\nOs maiores números são: " + maior1 + " e " + maior2);
console.log("\nA soma dos dois maiores números é: " + somaMaiores);

console.log("=====================================\n");
