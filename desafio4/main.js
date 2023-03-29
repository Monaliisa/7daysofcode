
var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while (tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute!"));

    if (chute == numeroPensado) {

        alert("Você ACERTOU, o número pensado era " + numeroPensado);
        break;

    } else {

        alert("Você ERROU!");
    }
    tentativas++;
}

mostra("FIM");
