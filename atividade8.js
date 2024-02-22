// 8 - Ler 3 valores e escrevê-los em ordem crescente.

let num1 = 2;
let num2 = 3;
let num3 = 1;

if (num1 > num2 && num1 > num3){
    let maior = num1;
    let meio, menor;

    if (num2 > num3) {
        meio = num2;
        menor = num3;
    } 
    
    else {
        meio = num3;
        menor = num2;
    }

    console.log("Em ordem crescente:\n" +"\n- " + menor + "\n- " + meio + "\n- " + maior);
}

else if(num2 > num1 && num2 > num3){
    let maior = num2;
    let meio, menor;

    if(num1 > num3){
        meio = num1;
        menor = num3;
    }
    
    else{
        meio = num3;
        menor = num1;
    }

    console.log("Em ordem crescente:\n" +"\n- " + menor + "\n- " + meio + "\n- " + maior);
}

else{
    let maior = num3;
    let meio, menor;

    if(num2 > num1){
        meio = num2;
        menor = num1;
    }

    else{
        meio = num1;
        menor = num2;
    }

    console.log("Em ordem crescente:\n" +"\n- " + menor + "\n- " + meio + "\n- " + maior);
}