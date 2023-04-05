var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var operador = prompt("Digite o operador (+, -, *, /):");
var resultado;

switch (operador) {
    case "+":
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        resultado = valor1 / valor2;
        break;
    default:
        resultado = "Operador inválido";
        break;
}

alert("O resultado da operação é: " + resultado);
