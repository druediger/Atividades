// 6 - Ler 3 valores e escrever o maior deles.

let num1 = 3;
let num2 = 3;
let num3 = 3;

console.log("\n============================");

console.log("Números digitados:\n" + "\n- " + num1 + "\n- " + num2 + "\n- " + num3);

if(num1 > num2 && num1 > num3){
    console.log("\nO maior número é " + num1)
}

else if(num2 > num1 && num2 > num3){
    console.log("\nO maior número é " + num2)
}

else{
    console.log("\nO maior número é " + num3)
}

console.log("============================\n");
