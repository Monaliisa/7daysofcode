const nome = prompt("Qual o seu nome?")
let area = prompt("Qual area você quer seguir, Front-End ou Back-End?");

if (area == 'Front-End') {
    var linguagem = prompt("Você quer aprender Vue ou React?")
}

else if (area == 'Back-End') {
    var linguagem = prompt("Você quer aprender Java ou C#?")
}

const especialidade = prompt("Se você quer aprofundar na área escolhida, digite 1. Se deseja se tornar fullstack, digite 2")

if (especialidade == 1) {
    alert(`"Olá ${nome}, você quer seguir ${area}, continue se dedicando em ${linguagem}!"`);
}
else if (especialidade == 2) {
    alert(`"Olá ${nome}, você quer seguir ${area}, já está aprendendo ${linguagem} e quer se tornar FullStack !"`);
}

let outraTecnologia = prompt("Qual outra tecnolgia você gostaria de aprender? Digite ok, para prosseguir.")

for (var i = 0; outraTecnologia == 'ok'; i++) {
    var tecnologia = prompt("Qual é essa nova tecnologia ?");
    alert(`Que legal! Você quer aprender ${tecnologia}`);
    outraTecnologia = prompt("Você deseja aprender mais alguma? Se sim, digite ok");
}