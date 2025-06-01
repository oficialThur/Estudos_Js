//funçoes 

function soma(a, b){
    return a + b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function subtracao(a, b){
    return a - b;
}

let parametro1 = parseFloat(prompt("Digite o primeiro numero: "))

let parametro2 = parseFloat(prompt("Digite o segundo numero: "))

let operacao = prompt("Digite a operacao: soma = +, subtracao = -, multiplicacao = *, divisao = /:")


if(operacao === "+"){
    alert("Resultado: " + soma(parametro1, parametro2));
}
else if(operacao === "-"){
    alert("Resultado: " + subtracao(parametro1, parametro2));
}
else if(operacao === "*"){
    alert("Resultado: " + multiplicacao(parametro1, parametro2));
}
else if(operacao === "/"){
    alert("Resultado: " + divisao(parametro1, parametro2));
}
else{
    alert("Operacao invalida");
}